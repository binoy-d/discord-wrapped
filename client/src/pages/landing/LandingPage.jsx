import React, { useEffect, useState } from "react";
import './LandingPage.css';
import { filler_messages } from "../../data";


const MessageBubble = ({ msg, scale}) =>
    <div className="d-message-bubble float" style={{
        position: "absolute",
        left: msg.x +"vw",
        top: msg.y +"vh",
    }}>
        <p className="d-bubble-text">{msg.content}</p>
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
        const transformed_sample = sample.map((msg) => {
            return {
                content: msg,
                x: Math.random() * 50 + 50,
                y: Math.random() * 100
            }
        })
        setMessages(transformed_sample);
    }, []);

    return (
        <div className="LandingPage">
            <h1 className=" landing-title ">
                It's been an <br />
                <strong>interesting year</strong>
                <br /> for the {serverName} <br />
                Server
            </h1>
            {messages.map((msg, i) =>
                <MessageBubble key={"message-bubble-" + i} msg={msg} scale={(numMessages - i) / (numMessages/2)} />
            )}
        </div>
    );
}

export default LandingPage;
