import React from 'react'
import './TextField.css'

class TextField extends React.Component{
    
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        let mand;
        if(this.props.imp)
        {
            mand=" *"
        }
        else{
            mand=""
        }
        return (
            <div class='TextField'>
                <h4>{this.props.label}<span>{mand}</span></h4>
                <textarea rows="4"></textarea>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default TextField;