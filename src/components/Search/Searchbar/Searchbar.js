import React from 'react';
import './Searchbar.css';
import Button from '../../Button/Button'

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : "",
            width: window.innerWidth
        }
    }

    searchitem(item){
        if(item!==""){
            console.log( `Searching ${item}` )
        }
    }

    updateInput(input){
        this.setState({
            value : input
        })
    }
    render(){
        if(this.state.width>768){
            var styles = {
                margin : "0 10px",
                height : "50px",
                width : "120px", 
                fontSize: "15px"
            } 
        }
        else if (this.state.width<768 && this.state.width>577)
        {
            var styles = {
                margin : "0 10px",
                height : "50px",
                width : "90px", 
                fontSize: "13px"
            }
        }
        else
        {
            var styles = {
                margin : "0 10px",
                height : "35px",
                width : "90px", 
                fontSize: "13px"
            }
        }
        return (
            <div className="flex-container">    
                <div className="Search-container">
                    <span>
                        <input 
                        type="text" 
                        onChange={e => this.updateInput(e.target.value)} 
                        placeholder={this.props.placeHolder} 
                        value={this.state.value}
                        />
                        <Button title={this.props.buttonTitle} 
                                styles={styles}
                        />
                    </span>


                </div>
            </div>
        )   
    }
}

export default Searchbar;