import React, { Component } from 'react'
import NoteList from './notesList';

export class index extends Component {


    FetchNotes() {
        //TODO: scan for json files (notes)
        // if exist load each one to conmponent called "note" 
        // a function that return note compopnent with attributes according the the parameter of the json file.
        // that function will be called inside the loop of each json file
        // the note components would be inside notes list component, which is scroleable, with style adjustments.  this notes list components will accept list of notes, and inside the notes compontents it will populate notes
        //else not exist, then display only 'plus' svg symbol
        const files = () => {

            //TODO: This will bring from server/local drive the json files and create json array to return back to notelist component.
            return notes
        };

        if (files() == null) {//TODO: put svg with "plus" symbol.
            return <p>Add Note</p>;
        }
        else {

            return <NoteList notesList={files()} />;
        }


    }

    render() {
        return (
            <div className="ui text container">
                <p>All Notes</p>
                {this.FetchNotes()}


            </div>
        )
    }
}

export default index;
const notes =
    [

        {
            id: "someID1",
            title: 'firstTitleNote',
            content: "firstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNotefirstContentNote",


        },
        {
            id: "someID2",
            title: 'secondTitleNote',
            content: "secondContentNote",


        },
        {
            id: "someID3",
            title: 'thirdTitleNote',
            content: "thirdContentNote",


        },
        {
            id: "someID4",
            title: 'title4',
            content: "content4",


        },
        {
            id: "someID5",
            title: 'title5',
            content: "content5",


        },

    ];
