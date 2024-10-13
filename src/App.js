import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Acasa from "./components/Acasa/Acasa";
import QuizPage from "./components/Asistent Virtual/QuizPage";
import Footer from "./components/Footer/Footer";
import Medici from "./components/Medici/Medici";
import Nav from "./components/Nav";
import Servicii from "./components/Servicii/Servicii";
import AuthForm from "./components/Sign Up/AuthForm";
import Profile from "./components/Sign Up/Profile";

function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        Nav / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Acasa / > }
        />{" "} <
        Route path = "/servicii"
        element = { < Servicii / > }
        />{" "} <
        Route path = "/medici"
        element = { < Medici / > }
        />{" "} <
        Route path = "/Asistent Virtual"
        element = { < QuizPage / > }
        />{" "} <
        Route path = "/profile"
        element = { < Profile / > }
        />{" "} <
        Route path = "/signup"
        element = { < AuthForm / > }
        />{" "} <
        /Routes>{" "} <
        /BrowserRouter>{" "} <
        Footer / >
        <
        /div>
    );
}

export default App;