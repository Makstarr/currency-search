import { createContext, useState } from "react";

import { setUrlHash } from 'src/helpers/set-url-hash.helper';

interface TValue {
	searchQuery: string, changeSearchQuery?: (newQuery: string) => void,
}

export const CurrencySearchContext = createContext<TValue>({ searchQuery: '' });

export const CurrencySearchContextProvider = ({ children }: { children?: JSX.Element | JSX.Element[]; }) => {
	const initialSearchString = window.location.hash.split('#')[1] || '';
	const [searchQuery, setSearchQuery] = useState(typeof initialSearchString === 'string' ? initialSearchString : '');

	const changeSearchQuery = (newQuery: string): void => {
		setSearchQuery(newQuery)
		setUrlHash(newQuery)
	}


	return (
		<CurrencySearchContext.Provider
			value={{
				searchQuery,
				changeSearchQuery,
			}}
		>
			{children}
		</CurrencySearchContext.Provider>
	);
};
