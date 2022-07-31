import { useEffect, useState } from 'react'
import { TCurrency } from 'src/types/currency.types'

interface Props {
	data: TCurrency
}

export const CurrencyListItemComponent = ({ data }: Props) => {


	// TO DO: Test this 
	// const [imageUrl, setImageUrl] = useState(null);
	// useEffect(() => {
	// 	import("../../../flags/" + data.currency.toLowerCase().slice(0,2) + '.png').then((image) => {
	// 		console.log(image)
	// 		setImageUrl(image.default);
	// 	});
	// }, [data.currency])

	// return (
	// 	<div>
	// 		{imageUrl && <img src={imageUrl} alt="" />}
	// 		
	// 	</div>
	// )
	return (<div>{data.currency}</div>)
}
