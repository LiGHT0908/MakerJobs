import React from 'react';
import Search from '../Search'
import './Tags.css'

class Tags extends React.Component{
    
    constructor (props)
    {
        super(props);
        this.state = {
            tags : [
                "php", "Java", "Javascript", "Photoshop", "Primere", "Python", "C", "C++", "C#","ReactJS", "AngularJS", "NodeJS", "HTML", "CSS", "Bootstrap", "php", "Numpy", "Ruby", "scss", "nodemodules" 
            ],
            colours: ["#d15353","#a7e248","#3e8ae2","#69e265","#ee9b4d"],
            width: window.innerWidth,
            colortags:[]
        }

        for (let i=0;i<this.state.tags.length;i++)
        {   
            let random=this.state.colours[Math.floor(Math.random() * this.state.colours.length)]
            this.state.colortags.push(random)
        }
        

        if (this.state.width<=577)
        {
            var reducedTags = [...this.state.tags];
            reducedTags.splice(9,10);
            this.state.tags=reducedTags;
        } 
    }
    render = () =>
    {    var randomcolor = Math.floor( Math.random() * this.state.colours.length )
        
        return (
            <div className="tags-container">
              {this.state.tags.map( (item , index) => {
                  return (
                    <div className="tag-packet">
                      <p><span style={{background:this.state.colortags[index]}}>#</span> {item}</p>
                    </div>
                  )
              })}
               
               
            </div>
        )
    }
} 

export default Tags;