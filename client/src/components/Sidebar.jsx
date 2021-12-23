import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";


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
            <Link className="d-sidebar-link" to="/">
                <div className="d-sidebar-item d-sidebar-headingitem">
                    Home
                </div>
            </Link>
            <Link className="d-sidebar-link" to="/channels">
                <div className="d-sidebar-item d-sidebar-headingitem">
                    Channels
                </div>
            </Link>
            {
                data.channels.map((name, i) =>
                    <Link className="d-sidebar-link" to={`/channels/${name}`}>
                        <div className="d-sidebar-item d-sidebar-subitem">
                            #{name}
                        </div>
                    </Link>
                )
            }
            <Link className="d-sidebar-link" to="/members">
                <div className="d-sidebar-item d-sidebar-headingitem">
                    Members
                </div>
            </Link>
            {
                data.members.map((name, i) =>
                    <Link className="d-sidebar-link" to={`/members/${name}`}>
                        <div className="d-sidebar-item d-sidebar-subitem">
                            @{name}
                        </div>
                    </Link>
                )
            }
        </div>
    );
}

export default Sidebar;
