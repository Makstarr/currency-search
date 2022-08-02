import { useContext, useEffect, useState } from 'react'

import { CurrencySearchContext } from 'src/context/search-string-context'
import { filterCurrenciesList } from 'src/helpers/filter-currency-list.helper'
import { getCurrencies } from 'src/services/get-currency-data.service'
import type { TCurrency } from 'src/types/currensies.types'

import CurrencyCard from './currency-card'
import * as Styled from './currencies-list.styled'

interface TServerData {
	list: TCurrency[],
	baseCurrency: string
}

export const CurrenciesListCoponent = () => {
	const { searchQuery } = useContext(CurrencySearchContext);

	const [data, setData] = useState<TServerData>({ list: [], baseCurrency: '' })
	const [filteredList, setFilteredList] = useState<TCurrency[]>([]);
	const [isError, setIsError] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const handleLoading = async () => {
			setIsError(false)
			if (isLoaded) {
				setFilteredList(filterCurrenciesList(data.list, searchQuery))
			}
			else {
				const serverData = await getCurrencies()
				if (serverData) {
					setData(serverData)
					setFilteredList(filterCurrenciesList(serverData.list, searchQuery))
					setIsLoaded(true)
				} else {
					setIsError(true)
				}
			}
		}

		handleLoading()

	}, [searchQuery, isLoaded, data])

	if (isError) {
		return <Styled.ErrorMessage data-testid="error-message">ERROR<Styled.Smile>:(</Styled.Smile>TRY AGAIN LATER</Styled.ErrorMessage>
	}
	if (!isLoaded) {
		return <Styled.Loader data-testid="loader">LOADING...</Styled.Loader>
	}
	if (filteredList.length === 0) {
		return <Styled.NotFound data-testid="nothing-found">NOTHING FOUND<Styled.Smile>:(</Styled.Smile>MAYBE DIFFERENT KEYWORD?</Styled.NotFound>
	}
	return (
		<Styled.ListContainer>
			<Styled.CardsList>
				{filteredList.map(currency => (<CurrencyCard data={currency} key={currency.ticker} baseCurrency={data.baseCurrency} />))}
			</Styled.CardsList>
		</Styled.ListContainer>
	)
}

