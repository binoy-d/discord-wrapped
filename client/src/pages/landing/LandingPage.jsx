import React, { useEffect, useState } from "react";
import axios from "axios";
import './LandingPage.css';
import {FaDiscord} from "react-icons/fa"

const MessageBubble = ({ msg, x, y, scale, i}) =>
    <div className="d-message-bubble float" style={{
        position: "absolute",
        left: x +"vw",
        top: y +"vh",
        animationDuration: 8/scale+"s",
        opacity: scale/1.5
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
        axios.get("http://localhost:5000/bubble_messages")
        .then((response)=> {
            const sample = response.data.messages.sort(() => 0.5 - Math.random()).slice(0, numMessages);    
            setMessages(sample);
        })
    }, []);

    return (
        <div className="LandingPage">
            <h1 className=" landing-title ">
                It's been an <br />
                <strong> <i>interesting</i> year</strong>
                <br /> for the {serverName} <br />
                Server
            </h1>
            <button className="main-start-button btn">See More</button>
            
            <MessageBubble i={0} msg={messages[4]} scale={0.5} x={30} y = {80} />
            <MessageBubble i={0} msg={messages[1]} scale={1.25} x={70} y = {10} />
            <MessageBubble i={0} msg={messages[2]} scale={1} x={40} y = {20} />
            <MessageBubble i={0} msg={messages[3]} scale={1} x={60} y = {80} />
            <MessageBubble i={0} msg={messages[0]} scale={2.5} x={30} y = {45} />
            
        </div>
    );
}

export default LandingPage;
