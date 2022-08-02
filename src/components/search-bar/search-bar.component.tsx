import { useContext, useState } from 'react';

import { CurrencySearchContext } from 'src/context/search-string-context';
import { Container } from 'src/shared/container.styled'

import * as Styled from './search-bar.styled'

export const SearchBarComponent = () => {
	const { changeSearchQuery, searchQuery } = useContext(CurrencySearchContext);
	const [input, setInput] = useState(searchQuery);

	const handleInput = (e: { target: { value: string } }) => {
		setInput(e?.target?.value || '');
		changeSearchQuery && changeSearchQuery(e?.target?.value || '')
	}

	return (
		<Styled.Wrapper>
			<Container>
				<span>Search:</span>
				<Styled.Input type='text' value={input} onChange={handleInput} data-testid="search-input" />
			</Container>
		</Styled.Wrapper>
	)
}