import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2.3em;
  text-align: center;
  color:  ${({ theme }) => theme.text.headings};
	text-align: left;
	margin: 0 10px;
	font-weight: 500;
`;

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  z-index: 20;
  position: relative;
	width: 100%;
	background-color: ${({ theme }) => theme.header.background};
`