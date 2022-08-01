import { useEffect, useState } from 'react'
import type { TCurrency } from 'src/types/currency.types'
import { flags } from 'src/images'
import { getCurrencyFlagName } from 'src/helpers/get-currency-flag-name'

interface Props {
	data: TCurrency
}

export const CurrencyListItemComponent = ({ data: { currency } }: Props) => {
	return (
		<div>
			{<img src={flags[getCurrencyFlagName(currency)]} alt={currency} />}
			{currency}
		</div>
	)
}
