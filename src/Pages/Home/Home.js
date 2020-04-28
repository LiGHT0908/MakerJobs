import React from 'react';
import Header from '../../components/Header/Header'
import Feed from '../../components/Feed/Feed'
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'
import './Home.css'


class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            togglemenu:false
        }
    }
    
    toggleMenu = () => 
    {
        if (this.state.togglemenu){
            this.setState({togglemenu:false})
        }
        else
        { 
            this.setState({togglemenu:true});
        }
    }

	render() {
        let menu;
        if (this.state.togglemenu)
        {
            menu = (
               
                <div className="menuoverlay">
                    <ul>
                    <li><a href="">Browse Companies</a></li>
                    <li><a href="">Find Jobs</a></li>
                    <li><a href="">Post a Job</a></li>
                    </ul>
                </div>
          
            )
        } 
		return(
			<div className="body">
				<Header togglemenu={this.toggleMenu.bind(this)} />
                <div className="hold">
                    {menu}
                    <div className="home-content-container">
                        <div className="home-quote">
                            <h3>Are you looking for a maker/Developer Job that you wish to search here?</h3>
                        </div>
                        <Search placeHolder="Search Jobs" buttonTitle="Search"/>
                        <Feed />
                    </div>
                </div>
                <Footer />
            </div>
		)
	}
}

export default Home;
