
import React from 'react';
import Home from './Pages/Home/Home'
import Findjobs from './Pages/Findjobs/FindJobs'
import Postjob from './Pages/PostJob/Postjob'
import BrowseCompanies from './Pages/BrowseCompanies/BrowseCompanies'
import Page from './components/Page/Page'

import {BrowserRouter, Links , Route} from 'react-router-dom'


class App extends React.Component{
	render() {
		return(
			<BrowserRouter>
				<Route path='/' exact component={Home} />
				<Route path='/home' component={Home} />
				<Route path='/findjobs' exact component={Findjobs} />
				<Route path='/postjob' exact component={Postjob} />
				<Route path='/browsecompanies' exact component={BrowseCompanies} />
			</BrowserRouter>
		)
	}
}

export default App;
