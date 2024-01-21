import React from "react";
import './Sidebar.css';
import SidebarRow from '../SidebarRow/SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className='observes'>Obserwowani</h2>
            <SidebarRow />
            <SidebarRow />
            <SidebarRow />
            <SidebarRow />
        </div>
    )
}

export default Sidebar;