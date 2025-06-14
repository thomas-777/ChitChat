import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useGetMessages from "../../hooks/useGetMessages";
import './Message.css';
import { useSocketContext } from "../../context/SocketContext";

export default function Message({ messages, setMessages }) {
    const receiverId = useParams().id;
    const chatContainerRef = useRef(null);
    const { socket } = useSocketContext();
    const { loading, data: initmessages } = useGetMessages(receiverId);

    useEffect(() => {
        if (initmessages) {
            setMessages(initmessages);
        }
    }, [initmessages, setMessages]);

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            console.log("New message received", newMessage);
            setMessages(prev => [...prev, newMessage]);
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, setMessages]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]); // Scroll when messages change

    if (!receiverId) return <div>No receiver selected.</div>;
    if (loading) return <div>Loading messages...</div>;

    return (
        <div
            className="chat-container"
            ref={chatContainerRef}
            style={{ overflowY: 'scroll', width: '450px', height: '320px', backgroundColor: 'black', borderRadius: '10px' }}
        >
            {messages && messages.length > 0 ? (
                messages.map((msg, index) => (
                    <div
                        key={ index}
                        className={`chat-message ${msg?.receiverId === receiverId ? 'sent' : 'received'}`}
                    >
                        {msg?.message}
                    </div>
                ))
            ) : (
                <p>No messages yet.</p>
            )}
        </div>
    );
}
