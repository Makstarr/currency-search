import { render, screen } from "@testing-library/react";
import { currencyListItemMock } from 'src/mocks/currensy.mock';
import { CurrencyListItemComponent } from '../currency-list-item.component';

jest.mock('src/images', () => ({
	flags: {}
}))

describe('CurrencyListItemComponent', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	test("Renders flag and data", async () => {
		render(<CurrencyListItemComponent data={currencyListItemMock} baseCurrency="baseCurrency" />);
		expect(screen.getByText('baseCurrency')).toBeInTheDocument()
		expect(screen.getByText(currencyListItemMock.ticker)).toBeInTheDocument()
		expect(screen.getByText(currencyListItemMock.country)).toBeInTheDocument()
		expect(screen.getByText(currencyListItemMock.exchangeRate)).toBeInTheDocument()

		const flag = screen.getByAltText(currencyListItemMock.ticker)
		expect(flag).toBeInTheDocument()
	});
})

