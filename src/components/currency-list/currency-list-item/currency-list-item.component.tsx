import { useEffect, useState } from 'react'
import type { TCurrency } from 'src/types/currency.types'

interface Props {
	data: TCurrency
}

export const CurrencyListItemComponent = ({ data: { currency } }: Props) => {
	const [src, setSrc] = useState(undefined)

	useEffect(
		() => {
			import("../../../flags/" + currency.toLowerCase().slice(0, 2) + ".png").then((image) => setSrc(image.default))
		}, [currency])


	return (
		<div>
			{src && <img src={src} alt={currency} />}

			{currency}
		</div>
	)
}
