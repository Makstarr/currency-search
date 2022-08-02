import { Container } from 'src/shared/container.styled'
import * as Styled from './header.styled'


export const HeaderComponent = () => {
	return (
		<Styled.Header>
			<Container>
				<Styled.Title>Exchange rates</Styled.Title>
			</Container>
		</Styled.Header>
	)
}