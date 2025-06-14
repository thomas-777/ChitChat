import getConversations from "../hooks/getConversations";
import { useNavigate } from "react-router-dom";
import { useSocketContext } from "../context/SocketContext";
import './Conversations.css'; // Import the CSS

export default function Conversations() {
    const { loading, conversation } = getConversations();
    const navigate = useNavigate();
    const { onlineUsers } = useSocketContext();

    const handleNavigate = (userId, fullname) => {
        navigate(`/messages/${fullname}/${userId}`);
    };

    return (
        <div className="conversations-container">
            {loading ? (
                <p className="loading-text">Loading conversations...</p>
            ) : (
                conversation.map((convo) => {
                    const isOnline = onlineUsers.includes(convo._id);
                    return (
                        <button
                            key={convo._id}
                            onClick={() => handleNavigate(convo._id, convo.fullname)}
                            className="conversation-button"
                        >
                            <span>{convo.fullname}</span>
                            {isOnline && <span className="online-dot"></span>}
                        </button>
                    );
                })
            )}
        </div>
    );
}
