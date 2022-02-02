import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Sidebar.css';

function Sidebar({open, setOpen}) {
    const [members, setMembers] = useState([]);
    const [channels, setChannels] = useState([]);

    const handleClosedButtonClick = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    const handleOpenedButtonClick = (e) => {
        e.preventDefault();
        setOpen(false);
    };

    useEffect(() => {
        //get members
        axios.get("http://localhost:5000/members")
            .then((response) => {
                setMembers(response.data.names)
                
            })
            
        //get channels
        axios.get("http://localhost:5000/channels")
            .then((response) => {
                console.log("yes")
                setChannels(response.data.names)
                console.log(response.data.names)
            })

    }, []);

    return (
        <div className={"d-sidebar " + (open ? "open-sidebar" : "closed-sidebar")}>
            <Link className="d-sidebar-link" to="/">
                <div className="d-sidebar-banner">
                banner?
                </div>
            </Link>
            {open?
            <button className="opened-sidebar-btn" onClick={handleOpenedButtonClick}>
                <AiOutlineClose />
            </button>:
            <button className="closed-sidebar-btn" onClick={handleClosedButtonClick}>
                <AiOutlineMenu />
            </button>
        }
            
        
        <Link className="d-sidebar-link" to="/">
            <div className="d-sidebar-item d-sidebar-headingitem">
                Home
            </div>
        </Link>
        <Link className="d-sidebar-link" to="/overview">
            <div className="d-sidebar-item d-sidebar-headingitem">
                Overview
            </div>
        </Link>
        <Link className="d-sidebar-link" to="/channels">
            <div className="d-sidebar-item d-sidebar-headingitem">
                Channels
            </div>
        </Link>
        {
            channels.map((name, i) =>
                <Link className="d-sidebar-link" to={`/channels/${name}`} key={"sidebar-channel-" + i}>
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
            members.map((name, i) =>
                <Link className="d-sidebar-link" to={`/members/${name}`} key={"sidebar-member-" + i}>
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
