import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext'

export default function Sidebar() {
    let newArray = <NotefulContext.Consumer>
        {({contextState, folderClicked, folderCounter}) => (
            contextState.folders.map(folder => {
                return (
                    <li key= {folder.id} className={`listItem ${contextState.currentFolder === folder.id? 'highlight' : ''}`}>
                        <Link to={`/folder/${folder.id}`} onClick={()=> folderClicked(folder.id)}>
                            <div className='listItem'>
                                {folder.name}
                                <span>{folderCounter[folder.id]}</span>
                            </div>
                        </Link>
                        
                    </li>
                )
            })
        )}
    </NotefulContext.Consumer>
    return(
        <ul className='sidebar-ul'>
            {newArray}
        </ul>
    );
    
}