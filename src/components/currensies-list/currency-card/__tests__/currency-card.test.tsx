import { render, screen } from "@testing-library/react";
import { CurrencyCardMock } from 'src/mocks/currensy.mock';
import { CurrencyCardComponent } from '../currency-card.component';
import { ThemeProvider } from 'styled-components'
import { theme } from "src/theme/themes";

jest.mock('src/images', () => ({
	flags: {}
}))

describe('CurrencyCardComponent', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	test("Renders flag and data", async () => {
		render(
			<ThemeProvider theme={theme}>
				<CurrencyCardComponent data={CurrencyCardMock} baseCurrency="baseCurrency" />
			</ThemeProvider>);
		expect(screen.getByText('baseCurrency')).toBeInTheDocument()
		expect(screen.getByText(CurrencyCardMock.ticker)).toBeInTheDocument()
		expect(screen.getByText(CurrencyCardMock.country)).toBeInTheDocument()
		expect(screen.getByText(CurrencyCardMock.exchangeRate.toFixed(2))).toBeInTheDocument()

		const flag = screen.getByAltText(CurrencyCardMock.ticker)
		expect(flag).toBeInTheDocument()
	});
})

