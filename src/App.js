
import React from 'react';
import Home from './Pages/Home/Home'
import Findjobs from './Pages/Findjobs/FindJobs'
import {BrowserRouter as Router, Links , Route} from 'react-router-dom'


class App extends React.Component{
	render() {
		return(
			<Router>
				<Route  to='./Pages/Home/' component={Home} />
			</Router>
		)
	}
}

export default App;
