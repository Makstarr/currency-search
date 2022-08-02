import type { TCurrency } from 'src/types/currensies.types'
import { flags } from 'src/images'

import * as Styled from './currency-card.styled'

export interface TProps {
	data: TCurrency;
	baseCurrency: string
}

export const CurrencyCardComponent = ({ data: { ticker, flag, country, exchangeRate }, baseCurrency }: TProps) => {
	return (
		<Styled.Card>
			<Styled.Flag src={flags[flag]} alt={ticker} />
			<Styled.Ticker>	{ticker}</Styled.Ticker>
			<Styled.Country> {country}</Styled.Country>
			<Styled.ExchangeRate>
				{exchangeRate.toFixed(2)} <Styled.BaseCurrency>{ticker} = 1 <span>{baseCurrency}</span></Styled.BaseCurrency> 
			</Styled.ExchangeRate>
		</Styled.Card>
	)
}
