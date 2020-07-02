import React, { Component } from 'react'

export default class note extends Component {

    constructor(props) {
        super(props);
        console.log("Note: "+props.title+" ,"+props.content);
        this.state = {
            id:props.id,
            title:props.title,
            content:props.content

        }
    }




    render() {
        return (
            <div>
                    <p>{this.state.title}</p> 
                    <p>{this.state.content}</p>
            </div>
        )
    }



}
