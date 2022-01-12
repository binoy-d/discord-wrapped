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
        opacity: scale/3 +0.5,
        filter:`blur(${2.5/scale - 0.5}px) brightness(${scale/3+0.3})`,
        padding: scale*20+"px",
        fontSize: (scale/5+0.5)+"em",
        borderRadius: scale*20+"px"
    }}>
        <FaDiscord style={{left: scale+"em", top: scale+"em"}} size={10+scale*scale*8} className="message-discord-icon"  />
        <p className="d-bubble-text" style={{fontSize:scale*1.1+"em"}}>"{msg}"</p>
        <div style={{borderRadius: scale*20+"px"}}className="d-bubble-background"></div>
    </div>

function LandingPage() {
    const serverName = "Scum";
    const numMessages = 15;
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
        <>
        <section className="LandingPage">
            <h1 className=" landing-title ">
                It's been an <br />
                <strong> <i>interesting</i> year</strong>
                <br /> for the {serverName} <br />
                Server
            </h1>
            <a href="/overview">
            <button className="main-start-button btn">See More</button>
            </a>
            
            
            <MessageBubble i={10} msg={messages[10]} scale={0.6} x={40} y = {30} />
            <MessageBubble i={9} msg={messages[9]} scale={0.7} x={20} y = {5} />
            <MessageBubble i={8} msg={messages[8]} scale={1} x={20} y = {65} />
            <MessageBubble i={7} msg={messages[7]} scale={1} x={80} y = {55} />
            <MessageBubble i={6} msg={messages[6]} scale={1.7} x={70} y = {30} />
            <MessageBubble i={5} msg={messages[5]} scale={1.3} x={64} y = {65} />
            <MessageBubble i={0} msg={messages[4]} scale={1} x={30} y = {80} />
            <MessageBubble i={1} msg={messages[1]} scale={1.4} x={70} y = {3} />
            <MessageBubble i={2} msg={messages[2]} scale={1.25} x={40} y = {15} />
            <MessageBubble i={3} msg={messages[3]} scale={1.3} x={50} y = {80} />
            <MessageBubble i={4} msg={messages[0]} scale={2.5} x={30} y = {40} />
            
        </section>
        </>
    );
}


export default LandingPage;
