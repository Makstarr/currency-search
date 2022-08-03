import { ThemeProvider } from 'styled-components';
import CurrenciesList from './components/currensies-list';
import Header from './components/header';
import SearchBar from './components/search-bar';
import { CurrencySearchContextProvider } from './context/search-string-context';
import { GlobalStyles } from "./theme/global-style";
import { theme } from "./theme/themes";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CurrencySearchContextProvider>
				<GlobalStyles />
				<Header />
				<SearchBar />
				<CurrenciesList />
			</CurrencySearchContextProvider>
		</ThemeProvider>
	);
}


export default App;
