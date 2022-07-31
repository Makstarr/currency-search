import { useContext, useEffect, useState } from 'react'
import { CurrencySearchContext } from 'src/context/search-string-context'
import { getCurrenciesData } from 'src/service/get-currency-data.service'
import type { TCurrency } from 'src/types/currency.types'
import CurrencyListItemComponent from './currency-list-item'

export const CurrencyListCoponent = () => {
	const { searchQuery } = useContext(CurrencySearchContext);
	const [data, setData] = useState<TCurrency[]>([])

	useEffect(() => {
		setData(getCurrenciesData(searchQuery))
	}, [searchQuery])

	return (
		<div>
			{data.map(currency => (<CurrencyListItemComponent data={currency} key={currency.currency} />))}
		</div>
	)
}

