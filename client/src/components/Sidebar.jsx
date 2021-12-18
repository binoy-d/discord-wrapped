import React from 'react';
import './Sidebar.css';



const data = {
    "members": ["user1", "user2", "user3"],
    "channels": ["channel-1", "channel-2", "channel-3"]
}
function Sidebar() {
    return (
        <div className="d-sidebar">
            <div className="d-sidebar-banner">
                Insert banner here?
            </div>
            <div className="d-sidebar-item">
                Home
            </div>
            <div className="d-sidebar-item">
                Channels
            </div>
            {
                data.channels.forEach((name, i) =>
                    <div className="d-sidbar-subitem">
                        {name}
                    </div>
                )
            }
            <div className="d-sidebar-item">
                Members
            </div>
            {
                data.members.forEach((name, i) =>
                    <div className="d-sidbar-subitem">
                        {name}
                    </div>
                )
            }
        </div>
    );
}

export default Sidebar;
