import React, { Component } from 'react'

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
        return (
            <div className="ui column card">
                <div className="content">

                    <div className="header">
                        {this.state.title}
                         </div>

                </div>
                <div className="content">
                    {this.state.content}


                </div>
            </div>
        )
    }



}
