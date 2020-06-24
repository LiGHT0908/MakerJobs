import React from 'react'
import './Dropdown.css'

class Dropdown extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        let mand;
        if(this.props.imp)
        {
            mand=" *"
        }
        else{
            mand=""
        }
        return (
            <div class="Dropdown">   
            <h4>{this.props.label}<span>{mand}</span></h4>
            <select name="type">
                {/* <option disabled></option> */}
                    {
                        this.props.options.map( opt => {
                            return (
                                <option>{opt}</option>
                            )
                        })
                    }
            </select>
            <p>{this.props.description}</p>
            </div>
           
        )
    }
}

export default Dropdown;