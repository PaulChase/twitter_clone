import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import { useState, useEffect } from "react";

const NavBar = ({ user, setLoggedInUser }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/register");
        }
    }, []);
    return (
        <nav className="  w-full bg-purple-500">
            <div className=" flex justify-between items-center max-w-6xl mx-auto p-3 text-white">
                <Link to="/" className=" font-bold text-2xl uppercase ">
                    nerdstack
                </Link>
                <ul className=" flex space-x-3 justify-center items-center font-semibold">
                    <Link to="/profile">Profile</Link>

                    <Link to="/add">Add Post</Link>

                    {user ? (
                        <h2 className=" px-2">{user.name}</h2>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link
                                to="/register"
                                className=" px-3 py-1 bg-white rounded-md text-yellow-700"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}

                    <button
                        onClick={() => {
                            api.logOutUser()
                                .then((res) => {
                                    console.log(res);
                                    navigate("/register");
                                })
                                .catch((err) =>
                                    console.log(" unsuccessful " + err)
                                );
                        }}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
