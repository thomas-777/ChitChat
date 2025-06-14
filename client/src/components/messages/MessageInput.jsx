import { useEffect, useState } from "react";
import "./MessageInput.css";
import useSendMessage from "../../hooks/useSendMessage";
import { useParams } from "react-router-dom";
export default function MessageInput({setMessages}) {
    const [message, setMessage] = useState("");
    const { sendMessage, loading } = useSendMessage();
    const receiverId = useParams().id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message || !receiverId) return;

        const newMessage = await sendMessage({ message, receiverId });
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessage("");  // Clear the input field
    };

    return (
        <div className="message-input-container">
    <form onSubmit={handleSubmit} className="message-form">
        <input
            className="message-input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <button className="send-button" type="submit" disabled={loading}>
            {loading ? '...' : 'Send'}
        </button>
    </form>
</div>

    );
}