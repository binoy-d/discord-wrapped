import React, { useEffect, useState } from "react";
import './LandingPage.css';
import { filler_messages } from "../../data";
import {FaDiscord} from "react-icons/fa"

const MessageBubble = ({ msg, x, y, scale, i}) =>
    <div className="d-message-bubble float" style={{
        position: "absolute",
        left: x +"vw",
        top: y +"vh",
        animationDuration: 8/scale+"s"
    }}>
        <FaDiscord size={20+scale*20} className="message-discord-icon"  />
        <p className="d-bubble-text" style={{fontSize:scale+"em"}}>"{msg}"</p>
        <div className="d-bubble-background"></div>
    </div>

function LandingPage() {
    const serverName = "Scum";
    const numMessages = 10;
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        //get numMessages random messages from filler messages
        //replace this with something fancy later
        const sample = filler_messages.sort(() => 0.5 - Math.random()).slice(0, numMessages);
        setMessages(sample);
    }, []);

    return (
        <div className="LandingPage">
            <h1 className=" landing-title ">
                It's been an <br />
                <strong>interesting year</strong>
                <br /> for the {serverName} <br />
                Server
            </h1>
            <MessageBubble i={0} msg={messages[0]} scale={2.5} x={30} y = {45} />
            <MessageBubble i={0} msg={messages[1]} scale={1.5} x={70} y = {10} />
            <MessageBubble i={0} msg={messages[2]} scale={1} x={40} y = {20} />
            <MessageBubble i={0} msg={messages[3]} scale={1} x={60} y = {80} />
            
        </div>
    );
}

export default LandingPage;
