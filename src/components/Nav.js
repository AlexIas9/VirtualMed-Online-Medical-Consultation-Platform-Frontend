import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return ( <
        div className = "nav-container" >
        <
        div className = "logo" > VirtualMed < /div> <
        ul className = "nav-ul" >
        <
        li > < Link to = "/"
        className = "nav-link" > Acasa < /Link></li >
        <
        li > < Link to = "/servicii"
        className = "nav-link" > Servicii < /Link></li >
        <
        li > < Link to = "/medici"
        className = "nav-link" > Medici < /Link></li >
        <
        li > < Link to = "/Asistent Virtual"
        className = "nav-link" > Asistent Virtual < /Link></li >
        <
        li > < Link to = "/signup"
        className = "nav-link" > Login < /Link></li >
        <
        li > < Link to = "/profile"
        className = "nav-link" > Profile < /Link></li >
        <
        /ul> < /
        div >
    );
}

export default Nav;