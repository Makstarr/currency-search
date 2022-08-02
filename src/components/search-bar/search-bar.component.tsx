import { useContext, useState } from 'react';
import { CurrencySearchContext } from 'src/context/search-string-context';

export const SearchBarComponent = () => {
	const { changeSearchQuery, searchQuery } = useContext(CurrencySearchContext);
	const [input, setInput] = useState(searchQuery);

	const handleInput = (e: { target: { value: string } }) => {
		setInput(e?.target?.value || '');
		changeSearchQuery && changeSearchQuery(e?.target?.value || '')
	}
	
	return (
		<div>Search: <input type='text' value={input} onChange={handleInput} data-testid="search-input"/></div>
	)
}