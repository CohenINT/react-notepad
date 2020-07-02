import React, { Component } from 'react'
import Note from './note';

export default class notesList extends Component {
    constructor(props) {
        super(props);
        console.log("NotesList: ");
        console.log(props.notesList);

        this.state = {
            notesList: props.notesList
        };

    }

    PopulateNotes() {
        //TODO: loop the noteList , for every item (different note) return new note components with the attriubes of the item
        const ListFiles= () => this.state.notesList.map((note) =>
            <Note key={note.id} id={note.id} title={note.title} content={note.content} />);

        return (
            <React.Fragment>
                   
               <ListFiles/>

            </React.Fragment>

        );



    }

    render() {

        return (
            <div>

                {this.PopulateNotes()}
            </div>
        )
    }




}
