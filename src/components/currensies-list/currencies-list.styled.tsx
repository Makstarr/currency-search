import styled from 'styled-components';

import { Container } from 'src/shared/container.styled'

export const ErrorMessage = styled.div`
 	text-align: center;
	padding: 20vh 0;
	font-size: 40px;
	color: ${({ theme }) => theme.text.error};
`

export const Loader = styled.div`
 	text-align: center;
	padding: 20vh 0;
	font-size: 40px;
`

export const NotFound = styled.div`
	text-align: center;
	padding: 20vh 0;
	font-size: 40px;

`

export const CardsList = styled.ul`
	list-style: none;
	margin-block-start: 0;
	margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
	margin: auto;
	width: 100%;
`
export const ListContainer = styled(Container)`
	min-height: calc(100vh - 60px);
	padding: 0;
	@media (min-width: ${({ theme }) => theme.maxContainerWidth}) {
    border: 1px solid ${({ theme }) => theme.listBorder};
		border-top: 0;
		border-bottom: 0;
  }
`
export const Smile = styled.div`
	transform: rotate(90deg);
	font-size:  70px;
	font-weight: 400
`;
