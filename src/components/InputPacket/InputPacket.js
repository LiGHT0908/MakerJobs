import React from  'react'
import './InputPacket.css'


class InputPacket extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return (
            <div class='InputPacket'>
                <h4>{this.props.label}</h4>
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    />
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default InputPacket;