import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.searchBar.background};
	padding: 20px 0;
	position: sticky;
	top: 0;
	border-width: 0px 0px 2px 0px;
	border-style: solid;
	border-color: ${({ theme }) => theme.searchBar.border};
	box-shadow: 0px 10px 15px rgba(29, 29, 29, 0.24);
	font-size: 1.2em;
	font-weight: 500px;
	width: 100%;
	z-index:  10;
	@media (max-width: 600px) {
		section{
			display: flex;
			align-items: center;
			justify-content: center;
		}
  } 

`;

export const Input = styled.input`
	margin: 0 20px;
  background: ${({ theme }) => theme.inputs.background};
  border: 1px solid ${({ theme }) => theme.inputs.border};
	padding: .5rem 1rem;
	color: ${({ theme }) => theme.inputs.text};
  border-radius: 5px;
  text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.05);
  font-weight: 400;
	max-width: 80%;
	width: 100%;
	font-size: 25px;
	&:focus-visible {
      outline: #000 auto 1px;
  }
	@media (min-width: 840px) {
   max-width: 500px;
  } 
`