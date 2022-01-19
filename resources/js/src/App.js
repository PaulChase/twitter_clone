import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Show from "./components/Show";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import { useEffect, useState } from "react";
import DashBoard from "./components/DashBoard";
import api from "./api";
import BottomNav from "./components/BottomNav";
import "font-awesome/css/font-awesome.min.css";

function App() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getLoggedInUser()
            .then((res) => {
                console.log(res.data);
                console.log("sure");
                const loggedInUser = res.data.user;
                setUser(loggedInUser);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("nope");
                console.log(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Still Loading</div>;
    }

    return (
        <Router>
            <NavBar user={user} setLoggedInUser={(user) => setUser(user)} />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/posts/:id" element={<Show />} />
                <Route path="/posts/:id/edit" element={<Edit />} />
                <Route
                    path="/register"
                    element={
                        <RegisterPage
                            setLoggedInUser={(user) => setUser(user)}
                        />
                    }
                />
                <Route path="profile" element={<DashBoard user={user} />} />
                <Route
                    path="/login"
                    element={
                        <LoginPage setLoggedInUser={(user) => setUser(user)} />
                    }
                />
            </Routes>
            <BottomNav />
        </Router>
    );
}

export default App;

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
