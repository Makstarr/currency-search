import { render, screen } from "@testing-library/react";
import { CurrenciesListCoponent } from "../currencies-list.component";
import { TProps } from '../currency-card/currency-card.component';
import { ThemeProvider } from 'styled-components'
import { theme } from "src/theme/themes";


jest.mock('src/components/currensies-list/currency-card', () => ({ data, baseCurrency }: TProps) => (<div>CurrencyCardComponent
	<div>{data.ticker}</div>
	<div>{baseCurrency}</div>
</div>))

jest.mock('src/services/get-currency-data.service', () => ({ getCurrencies: jest.fn() }))
const { getCurrencies } = require('src/services/get-currency-data.service');


describe('CurrenciesListComponent', () => {
	beforeEach(() => {
		jest.resetModules();
	});


	test("Loads and renders error state", async () => {

		getCurrencies.mockImplementation(async () => null)

		render(<ThemeProvider theme={theme}><CurrenciesListCoponent /></ThemeProvider>);
		const loader = screen.getByTestId('loader');
		expect(loader).toBeInTheDocument();
		const notFound = await screen.findByTestId('error-message');
		expect(notFound).toBeInTheDocument()
	});

	it("Loads and renders list items", async () => {
		getCurrencies.mockImplementation(() => Promise.resolve({
			list: [
				{ ticker: "RUB", flag: "ru.png", country: "Russian Rouble", exchangeRate: 1 },
				{ ticker: "USD", flag: "us.png", country: "US Dollar", exchangeRate: 10000 },
				{ ticker: "RSD", flag: "rs.png", country: "Serbian dinar", exchangeRate: 2 },
			], baseCurrency: 'EUR'
		}))

		render(<ThemeProvider theme={theme}><CurrenciesListCoponent /></ThemeProvider>);
		const loader = screen.getByTestId('loader');
		expect(loader).toBeInTheDocument();
		const listElements = await screen.findAllByText('CurrencyCardComponent');
		expect(listElements.length).toBe(3);
		const baseCurrencyRenders = await screen.findAllByText('EUR');
		expect(baseCurrencyRenders.length).toBe(3);
		expect(screen.getByText("RUB")).toBeInTheDocument()
		expect(screen.getByText("USD")).toBeInTheDocument()
		expect(screen.getByText("RSD")).toBeInTheDocument()
	});

	test("Loads and renders empty state", async () => {

		getCurrencies.mockImplementation(() => Promise.resolve({
			list: [], baseCurrency: 'EUR'
		}))

		render(<ThemeProvider theme={theme}><CurrenciesListCoponent /></ThemeProvider >);
		const loader = screen.getByTestId('loader');
		expect(loader).toBeInTheDocument();
		const notFound = await screen.findByTestId('nothing-found');
		expect(notFound).toBeInTheDocument()
	});
})

