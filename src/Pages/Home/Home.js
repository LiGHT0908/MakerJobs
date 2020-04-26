import React from 'react';
import Header from '../../components/Header/Header'
import Feed from '../../components/Feed/Feed'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
import './Home.css'


class Home extends React.Component{
    
	render() {
		return(
			<div className="body">
				<Header />
                <div className="home-content-container">
                    
                    <div className="home-quote">
                        <h3>Are you looking for a maker/Developer Job that you wish to search here?</h3>
                    </div>
                    <Search placeHolder="Search Jobs" buttonTitle="Search"/>
                    <Feed />
                    
                </div>
                <Footer />
            </div>
		)
	}
}

export default Home;
