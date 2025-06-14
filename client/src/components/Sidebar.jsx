import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import './Sidebar.css'; // Import the CSS

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <Conversations />
            <div className="logout-container">
                <LogoutButton />
            </div>
        </div>
    );
}
