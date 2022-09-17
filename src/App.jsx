import "./App.scss";
import SearchTerm from "./components/SearchTerm";
import WeatherDetail from "./components/WeatherDetail";
function App() {
	return (
		<div className="App">
			<SearchTerm />
			<WeatherDetail />
		</div>
	);
}

export default App;
