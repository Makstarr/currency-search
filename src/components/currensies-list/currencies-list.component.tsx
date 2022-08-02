import { useContext, useEffect, useState } from 'react'
import { CurrencySearchContext } from 'src/context/search-string-context'
import { filterCurrenciesList } from 'src/helpers/filter-currency-list.helper'
import { getCurrencies } from 'src/services/get-currency-data.service'
import type { TCurrency } from 'src/types/currensies.types'
import CurrencyCard from './currency-card'

interface TServerData {
	list: TCurrency[],
	baseCurrency: string
}

export const CurrenciesListCoponent = () => {
	const { searchQuery } = useContext(CurrencySearchContext);

	const [data, setData] = useState<TServerData>({ list: [], baseCurrency: '' })
	const [filteredList, setFilteredList] = useState<TCurrency[]>([]);
	const [error, setError] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const handleLoading = async () => {
			setError(false)
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
					setError(true)
				}
			}
		}

		handleLoading()

	}, [searchQuery, isLoaded, data])

	if (error) {
		return <div>ERROR</div>
	}
	if (!isLoaded) {
		return <div>LOADING</div>
	}
	if (filteredList.length === 0) {
		return <div>NOTHING FOUND</div>
	}
	return (
		<div>
			{filteredList.map(currency => (<CurrencyCard data={currency} key={currency.ticker} baseCurrency={data.baseCurrency} />))}
		</div>
	)
}

