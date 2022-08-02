import { fireEvent, render, screen } from "@testing-library/react";
import { CurrencySearchContext } from 'src/context/search-string-context';
import { SearchBarComponent } from "../search-bar.component";
import { ThemeProvider } from 'styled-components'
import { theme } from "src/theme/themes";

describe('CurrencyCardComponent', () => {
	test("Makes context change and input change", async () => {
		const changeSearchQuery = jest.fn()
		render(
			<ThemeProvider theme={theme}>
				<CurrencySearchContext.Provider value={{ changeSearchQuery, searchQuery: '123' }}>
					<SearchBarComponent />
				</CurrencySearchContext.Provider>
			</ThemeProvider>);
		const input = screen.getByTestId('search-input');
		fireEvent.change(input, { target: { value: 'Query' } });
		expect(changeSearchQuery).toHaveBeenCalledWith('Query')
	});

	test("Works with default value", async () => {
		const changeSearchQuery = jest.fn()
		render(
			<ThemeProvider theme={theme}>
				<CurrencySearchContext.Provider value={{ changeSearchQuery, searchQuery: 'defaultQuery' }}>
					<SearchBarComponent />
				</CurrencySearchContext.Provider>
			</ThemeProvider>);
		const input = screen.getByDisplayValue('defaultQuery');
		fireEvent.change(input, { target: { value: 'QueryTest' } });
		expect(changeSearchQuery).toHaveBeenCalledWith('QueryTest')
	});

	test("Works with empty input", async () => {
		const changeSearchQuery = jest.fn()
		render(
			<ThemeProvider theme={theme}>
				<CurrencySearchContext.Provider value={{ changeSearchQuery, searchQuery: 'defaultQuery' }}>
					<SearchBarComponent />
				</CurrencySearchContext.Provider>
			</ThemeProvider>);
		const input = screen.getByDisplayValue('defaultQuery');
		fireEvent.change(input, { target: { value: null } });
		expect(changeSearchQuery).toHaveBeenCalledWith('')
	});
})