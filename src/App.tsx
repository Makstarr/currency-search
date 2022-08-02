import './App.css';
import CurrenciesList from './components/currensies-list';
import Header from './components/header';
import SearchBar from './components/search-bar';
import { CurrencySearchContextProvider } from './context/search-string-context';

function App() {
	return (
		<CurrencySearchContextProvider>
			<Header />
			<SearchBar />
			<CurrenciesList />
		</CurrencySearchContextProvider>
	);
}


export default App;
