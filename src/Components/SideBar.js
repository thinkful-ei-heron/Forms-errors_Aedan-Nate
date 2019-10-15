import React from 'react';
import './Sidebar.css'


export default function SideBar(props) {
    let newArray = props.folders.map(folder => {
        return (
            <li key= {folder.id}>
                <button onClick={()=> props.folderClicked(folder.id)}>{folder.name}</button>
            </li>
        );
    });

    return(
        <ul className='sidebar-ul'>
            {newArray}
        </ul>
    );
}