import Sidebar from "../../components/Sidebar.jsx";
import './home.css'; // Import the CSS for the home page
export default function Home(){
    return(
        <div className="app-container">
            <h1 className="app-heading">Welcome to ChitChat</h1>
            <Sidebar />
        </div>
    )
}