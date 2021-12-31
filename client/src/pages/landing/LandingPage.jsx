import React, {useEffect, useState} from "react";
import './LandingPage.css';
import { filler_messages } from "../../data";


const MessageBubble = ({msg}) => 
    <div className="d-message-bubble">
        <p>{msg.content}</p>
        <p>{msg.x}, {msg.y}</p>
    </div>

function LandingPage() {
    const serverName = "Scum";
    const numMessages = 10;
    const [messages, setMessages] = useState([]);

    const updateMessagePositions = () => {
        if(messages.length === 0) return;
        const updated_messages = messages.map((msg) => {
            return {
                content: msg.content, //xd
                x: msg.x+Math.random()-0.5,
                y: msg.y+Math.random()-0.5
            }
        });
        setMessages(updated_messages);
    }

    useEffect(()=>{
        //get numMessages random messages from filler messages
        //replace this with something fancy later
        const sample = filler_messages.sort(() => 0.5 - Math.random()).slice(0, numMessages);
        const transformed_sample = sample.map((msg) => { 
            return {
                content: msg,
                x: Math.random() * 50 + 50,
                y: Math.random() * 50 + 50
            }
        })
        setMessages(transformed_sample);
        setInterval(updateMessagePositions, 100);
    }, [])

    return (
        <div className="LandingPage">
            <h1 className=" landing-title ">
                It's been an <br /> 
                <strong>interesting year</strong>
                <br /> for the {serverName} <br />
                Server
            </h1>
            {messages.map((msg, i) => 
            <MessageBubble key = {"message-bubble-"+i} msg={msg}/>
            )}
        </div>
    );
}

export default LandingPage;
