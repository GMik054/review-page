import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Log Out
            </MyButton>
            <div className="navbar__links">
                <Link to="/about">About Us</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;