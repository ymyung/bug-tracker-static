import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import UsersAll from "./pages/UsersAll";
import MyTicket from "./pages/MyTickets"
import TicketEdit from "./pages/TicketEdit";
import TicketHistory from "./pages/TicketHistory";
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import './App.css';

function App() {
    const { user } = useAuthContext()

    return (
        <Router>
            {user && <Navbar />}
            <div className="body">
                <Routes>
                    <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/projects" element={user ? <Projects /> : <Navigate to="/login" />} />
                    <Route path="/users-all" element={user ? <UsersAll /> : <Navigate to="/login" />} />
                    <Route path="/my-tickets" element={user ? <MyTicket /> : <Navigate to="/login" />} />
                    <Route path="/ticket-edit" element={user ? <TicketEdit /> : <Navigate to="/login" />} />
                    <Route path="/ticket-history" element={user ? <TicketHistory /> : <Navigate to="/login" />} />
                    <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
                    <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                    <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} /> 
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
