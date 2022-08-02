import { render, screen } from "@testing-library/react";
import { CurrencyCardMock } from 'src/mocks/currensy.mock';
import { CurrencyCardComponent } from '../currency-card.component';

jest.mock('src/images', () => ({
	flags: {}
}))

describe('CurrencyCardComponent', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	test("Renders flag and data", async () => {
		render(<CurrencyCardComponent data={CurrencyCardMock} baseCurrency="baseCurrency" />);
		expect(screen.getByText('baseCurrency')).toBeInTheDocument()
		expect(screen.getByText(CurrencyCardMock.ticker)).toBeInTheDocument()
		expect(screen.getByText(CurrencyCardMock.country)).toBeInTheDocument()
		expect(screen.getByText(CurrencyCardMock.exchangeRate)).toBeInTheDocument()

		const flag = screen.getByAltText(CurrencyCardMock.ticker)
		expect(flag).toBeInTheDocument()
	});
})

