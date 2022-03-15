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

import Show from "./components/Show";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import { useEffect, useState } from "react";
import DashBoard from "./components/DashBoard";
import api from "./api";
import BottomNav from "./components/BottomNav";
import "font-awesome/css/font-awesome.min.css";
import AddPeep from "./components/AddPeep";
import SinglePeep from "./components/SinglePeep";

function App() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [addMessage, setAddMessage] = useState(false);
    const [peeps, setPeeps] = useState(null);

    useEffect(() => {
        api.getLoggedInUser()
            .then((res) => {
                const loggedInUser = res.data.user;
                setUser(loggedInUser);
                getAllPeeps();
                setIsLoading(false);
            })
            .catch((err) => {
                console.log("nope");
                console.log(err.message);
                setIsLoading(false);
            });
    }, []);

    const getAllPeeps = () => {
        api.getAllPeeps().then((res) => {
            const results = res.data;

            setIsLoading(false);
            setPeeps(results.data);
        });
    };

    if (isLoading) {
        return <div>Still Loading</div>;
    }

    return (
        <Router>
            <NavBar user={user} setLoggedInUser={(user) => setUser(user)} />
            {addMessage && (
                <AddPeep
                    openMessageBox={(decision) => {
                        if (decision) {
                            setAddMessage(false);
                            getAllPeeps();
                        } else {
                            setAddMessage();
                        }
                    }}
                />
            )}
            <Routes>
                <Route exact path="/" element={<Home peeps={peeps} />} />

                <Route path="/peeps/:id" element={<SinglePeep />} />
                {/* <Route path="/posts/:id/edit" element={<Edit />} /> */}
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
            {/* <BottomNav openMessageBox={() => setAddMessage(true)} /> */}
        </Router>
    );
}

export default App;

if (document.getElementById("example")) {
    ReactDOM.render(<App />, document.getElementById("example"));
}
