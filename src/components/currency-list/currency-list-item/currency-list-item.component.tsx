import type { TCurrency } from 'src/types/currensies.types'
import { flags } from 'src/images'

export interface TProps {
	data: TCurrency;
	baseCurrency: string
}

export const CurrencyListItemComponent = ({ data: { ticker, flag, country, exchangeRate }, baseCurrency }: TProps) => {
	return (
		<div>
			<div>
				{<img src={flags[flag]} alt={ticker} />}
			</div>
			<div>	{ticker}</div>
			<div> {country}</div>
			<div>1 <span>{baseCurrency}</span> = <span>{exchangeRate}</span> {ticker} </div>
		</div>
	)
}
