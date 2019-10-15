import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';


export default function SideBar(props) {
    let newArray = props.folders.map(folder => {
        return (
            <li key= {folder.id} className={`listItem ${props.currentFolder === folder.id? 'highlight' : ''}`}>
                <Link to={`/folder/${folder.id}`} onClick={()=> props.folderClicked(folder.id)}>
                    <div className='listItem'>
                        {folder.name}
                        <span>{props.counter[folder.id]}</span>
                    </div>
                </Link>
                
            </li>
        );
    });

    return(
        <ul className='sidebar-ul'>
            {newArray}
        </ul>
    );
}