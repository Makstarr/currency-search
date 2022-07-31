import CurrencyListItemComponent from './currency-list-item'

export const CurrencyListCoponent = () => {
	return (
		<div>
			<CurrencyListItemComponent data={{
				"currency": "BRL",
				"precision": 2,
				"nameI18N": "Brazilian Real",
				"exchangeRate": {
					"buy": 4.0404,
					"middle": 4.2654,
					"sell": 4.4904,
					"indicator": 0,
					"lastModified": "2018-11-08T23:00:00Z"
				},
				"banknoteRate": {
					"buy": 3.8,
					"middle": 4.3,
					"sell": 4.8,
					"indicator": 0,
					"lastModified": "2018-11-06T23:00:00Z"
				},
				"flags": ["provided"]
			}} />
		</div>
	)
}

