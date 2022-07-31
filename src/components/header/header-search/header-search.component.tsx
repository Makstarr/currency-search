import { useContext, useState } from 'react';
import { CurrencySearchContext } from 'src/context/search-string-context';

export const HeaderSearchComponent = () => {
	const { changeSearchQuery, searchQuery } = useContext(CurrencySearchContext);
	const [input, setInput] = useState(searchQuery);

	const handleInput = (e: { target: { value: string } }) => {
		setInput(e?.target?.value || '');
	}
	const handleSearch = () => {
		changeSearchQuery && changeSearchQuery(input || '')
	}

	return (
		<div>Search: <input type='text' value={input} onChange={handleInput} onKeyUp={handleSearch} /></div>
	)
}