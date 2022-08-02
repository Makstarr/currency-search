import { fireEvent, render, screen } from "@testing-library/react";
import { CurrencySearchContext } from 'src/context/search-string-context';
import { HeaderSearchComponent } from "../header-search.component";




describe('CurrencyListItemComponent', () => {
	test("Makes context change and input change", async () => {
		const changeSearchQuery = jest.fn()
		render(
			<CurrencySearchContext.Provider value={{ changeSearchQuery, searchQuery: '123' }}>
				<HeaderSearchComponent />
			</CurrencySearchContext.Provider>);
		const input = screen.getByTestId('search-input');
		fireEvent.change(input, { target: { value: 'Query' } });
		expect(changeSearchQuery).toHaveBeenCalledWith('Query')
	});

	test("Works with default value", async () => {
		const changeSearchQuery = jest.fn()
		render(
			<CurrencySearchContext.Provider value={{ changeSearchQuery, searchQuery: 'defaultQuery' }}>
				<HeaderSearchComponent />
			</CurrencySearchContext.Provider>);
		const input = screen.getByDisplayValue('defaultQuery');
		fireEvent.change(input, { target: { value: 'QueryTest' } });
		expect(changeSearchQuery).toHaveBeenCalledWith('QueryTest')
	});

	test("Works with empty input", async () => {
		const changeSearchQuery = jest.fn()
		render(
			<CurrencySearchContext.Provider value={{ changeSearchQuery, searchQuery: 'defaultQuery' }}>
				<HeaderSearchComponent />
			</CurrencySearchContext.Provider>);
		const input = screen.getByDisplayValue('defaultQuery');
		fireEvent.change(input, { target: { value: null } });
		expect(changeSearchQuery).toHaveBeenCalledWith('')
	});
})