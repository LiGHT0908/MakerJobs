import React from 'react';
import pic from '../../assets/Images/WALLp.png'
import './Feed.css';

class Feed extends React.Component{
    constructor(){
        super();
        this.state = {
            jobs : [
                {
                    company: "Company1",
                    span: "full-time",
                    pay: 1500,
                    jobtitle: "Front-end Developer",
                    postedon: "25 Sep 2019"
                },
                {
                    company: "Company2",
                    span: "part-time",
                    pay: 3000,
                    jobtitle: "senior back-end Developer",
                    postedon: "25 Sep 2019"
                },
                {
                    company: "Company3",
                    span: "full-time",
                    pay: 500,
                    jobtitle: "Photoshop editor",
                    postedon: "25 Sep 2019"
                },
                {
                    company: "Company4",
                    span: "one-time",
                    pay: 700,
                    jobtitle: "Video Editing",
                    postedon: "25 Sep 2019"
                },
                {
                    company: "Company5",
                    span: "one-time",
                    pay: 700,
                    jobtitle: "Video Editing",
                    postedon: "25 Sep 2019"
                },
                {
                    company: "Company6",
                    span: "one-time",
                    pay: 700,
                    jobtitle: "Video Editing",
                    postedon: "25 Sep 2019"
                },
                {
                    company: "Company7",
                    span: "one-time",
                    pay: 700,
                    jobtitle: "Video Editing",
                    postedon: "25 Sep 2019"
                },
                {
                    company: "Company8",
                    span: "one-time",
                    pay: 700,
                    jobtitle: "Video Editing",
                    postedon: "25 Sep 2019"
                }
            ],
            showitems : 4,
            expanded : false
        }
    }

    showmore(){
        this.state.showitems == 4? (
            this.setState({
                showitems : this.state.jobs.length,
                expanded : true
            })
        ):
        (
            this.setState({
                showitems: 4,
                expanded: false
            })
        )
    }


    render(){
        return (
            <div className="feed">
                <h1>Featured Feed</h1>
                <div className="feed-container">
                    {this.state.jobs.slice(0,this.state.showitems).map( job => {
                        return (
                            <div className="feed-packet">
                                <img className="job-img" src={pic}/>
                                <div className="job-details">
                                <h3>{job.jobtitle}  at  {job.company}</h3>
                                <h4>{job.span} •  Pay {job.pay} $ / year •  Posted on  {job.postedon} </h4>
                                </div>    
                            </div>

                        )
                    }
                        )}
                        <a onClick ={() => this.showmore()}>
                        {this.state.expanded ? (
                            <span>Show less</span>
                            ) : (
                            <span>Show more</span>)     
                            }   
                        </a> 
                        
                </div>
            </div>
        )
    }
}

export default Feed;