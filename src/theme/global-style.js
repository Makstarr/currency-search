import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	html *{
		box-sizing: border-box;
	}
  option {
    background-color: #000000!important;
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
  }
  body {
		font-family: 'Open Sans', sans-serif;
		
    margin: auto;
    background:  ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text.main};
	
    transition: all 0.10s linear;
    &::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
