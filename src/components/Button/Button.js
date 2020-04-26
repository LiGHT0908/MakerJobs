import React from 'react';
import './Button.css'
class Button extends React.Component{

    render(){
        
        return (
            <button 
                className="Button"
                type = "submit"
                style = {this.props.styles}
                // disabled = {!this.state.value.length}
                // onClick = { this.searchitem(this.state.value) }
                >
                {this.props.title}
            </button>
        )
        
    }
}

export default Button;