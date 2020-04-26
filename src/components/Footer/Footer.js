import React from 'react';
import Nav from '../Nav/Nav';
import twitterlogo from '../../assets/Images/Twitter-Social-Icons/Twitter_Logo_Blue.svg'
import instagramlogo from '../../assets/Images/instagram.svg'
import facebooklogo from '../../assets/Images/facebook.svg'
import './Footer.css'

class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <div className="footer-flex">
                    <div className="footer-social">
                        <p>Socials</p>
                        <ul>
                            <li><img src={twitterlogo}></img></li>
                            <li><img src={instagramlogo}></img></li>
                            <li><img src={facebooklogo}></img></li>
                        </ul>
                    </div>


                    <div className="footer-head">
                        <h1>Maker<span>Jobs</span>.</h1>
                    </div>
                       
                    
                    <div className="footer-nav">
                        <Nav />
                    </div>
               
                </div>

                <h4>This Website is Created by</h4>
                <h3> • Himanshu Mishra &amp; Mayank Kulkarni • </h3>
            </div>
        ) 
    }
}

export default Footer;