import { useParams } from "react-router-dom";
import MessageInput from "./MessageInput";
import Message from "./Message";
import './MessageContainer.css';
import { useState } from "react";
export default function MessageContainer() {
    const fullname = useParams().fullname;
    const [messages, setMessages] = useState([]);
    return (
        <div className="message-container">
            <div className="chat-header">
                <span>Chatting with:</span>
                <strong>{fullname}</strong>
            </div>
            <Message messages={messages} setMessages={setMessages} />
            <MessageInput setMessages={setMessages} />
        </div>

    );
}