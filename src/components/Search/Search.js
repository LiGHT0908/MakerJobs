import React from 'react';
import Searchbar from '../Search/Searchbar/Searchbar'
import Tags from '../Search/Tags/Tags'

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            clickedTag : ""
        }
    }

    extractTag(tag){
        if(tag!==""){
            this.setState(
                {clickedTag : tag}
            );  
        }
        
    }

    render(){
        return (
            <div>
                <Searchbar placeHolder="Search Jobs" buttonTitle="Search" takethis={this.state.clickedTag}/>
                <Tags provideTag={ this.extractTag.bind(this)}/>
            </div>
        )
    }
}

export default Search;