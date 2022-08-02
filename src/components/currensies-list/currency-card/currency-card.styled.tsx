import styled from "styled-components";

export const Card = styled.li`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 50px 30px;
	max-width: 100% ;
	border-bottom: 1px solid ${({ theme }) => theme.card.border};
	@media (min-width: 840px) {
    grid-template-columns: 1fr 2fr 3fr 2fr;
  } 
`;

export const Flag = styled.img`
	width: 80px;
	
	align-self: center;
	text-align: center;
	@media (min-width: 840px) {
    grid-column: 1 / 2;
  } 
`
export const Ticker = styled.div`
	font-size: 35px;
	align-self: center;
	font-weight: 600;
	letter-spacing: 3px;
	color:  ${({ theme }) => theme.text.headings};
	@media (min-width: 840px) {
    grid-column: 2 / 3;
		grid-row: 1 / 2;
  } 
	@media (max-width: 450px) {
			text-align: center;
  } 
`
export const Country = styled.div`
	align-self: center;
	font-size: 20px;
	opacity: .8;
	@media (max-width: 450px) {
		font-size: 14px;
		max-width: 80px;
  } 
`
export const ExchangeRate = styled.div`
  font-size: 35px;
	align-self: center;
	align-items: center;
	font-weight: 600;
	color:  ${({ theme }) => theme.text.headings};
	@media (max-width: 450px) {
			display: flex;
			flex-direction: column;
  } 
`
export const BaseCurrency = styled.span`
  font-size: 15px;
	opacity: .3;
	z-index:  0;
`