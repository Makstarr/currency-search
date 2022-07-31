import './App.css';
import CurrencyList from './components/currency-list';
import Header from './components/header';
import { CurrencySearchContextProvider } from './context/search-string-context';

function App() {
	return (
		<CurrencySearchContextProvider>
			<Header />
			<CurrencyList />
		</CurrencySearchContextProvider>
	);
}


export default App;
