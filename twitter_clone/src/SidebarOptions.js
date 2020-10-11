import React from 'react';
import './SidebarOptions.css';

function SidebarOptions(props) {
    return (
        <div className="sidebarOption">
            <props.Icon/>
            <h2>{props.text}</h2>
        </div>
    )
}

export default SidebarOptions;
