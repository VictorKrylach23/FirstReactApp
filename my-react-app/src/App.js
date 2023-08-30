import logo from './logo.svg';
import './App.css';

const currentYear = new Date().getFullYear();

export const App = () => {
	// тут все декларативный код
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{currentYear}</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};
