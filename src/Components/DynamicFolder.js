import React from 'react';
import NoteSection from './NoteSection';
import NotefulContext from './NotefulContext';

export default function DynamicFolder(props) {

    return (
        <NotefulContext.Consumer>
            {(context) => {
                console.log(context.folderClicked);
                return <NoteSection />
            }}
        </NotefulContext.Consumer>
    )





    // <NotefulContext.Consumer>
    //     {({folderClicked}) => (
    //        folderClicked(props.match.params.folderId)
    //     )}
    // </NotefulContext.Consumer>
    
    // return (
    //     <NoteSection />
    // )


}