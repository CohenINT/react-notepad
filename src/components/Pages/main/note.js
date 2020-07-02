import React, { Component } from 'react'
import './note.css';

export default class note extends Component {

    constructor(props) {
        super(props);
        console.log("Note: " + props.title + " ," + props.content);
        this.state = {
            id: props.id,
            title: props.title,
            content: props.content

        }
    }




    render() {
        //TODO: build click event handler on the chosen note, to navigate for edit page, and view the chosen note.
        return (
            <div id="note_container" className="ui column fluid card">
                <div className="content">

                    <div className="header">
                        {this.state.title}
                         </div>

                </div>
                <div className="ui content content-text" >
                    {this.state.content}


                </div>
            </div>
        )
    }



}
