import React, { useState } from 'react';

// Components
import MyMap from './components/MyMap';
import Nav from './components/Nav';

import {
	BrowserRouter as Router,
		Switch,
		Route,
		Link
} from "react-router-dom";



function App() {
	const [theme, setTheme] = useState(true)


	return (
		<div className="App" id={theme ? 'BlackTheme' : 'WhiteTheme'}>
			<Router>
				<Nav setTheme={(themeNew) => setTheme(themeNew)} theme={theme} className={'nav'}/>
				<Switch>
					<Route path="/map">
						<MyMap />
					</Route>
					<Route path="/">
						<Accueil />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}



function Accueil() {
	return <h2>Accueil</h2>;
}

export default App;
