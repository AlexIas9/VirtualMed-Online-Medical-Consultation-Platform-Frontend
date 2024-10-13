import React, { useState } from "react";
import "./LoginForm.css"; // Importăm fișierul de stiluri pentru a putea aplica modificările CSS

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.warn(email, password);
    };

    return ( <
        div className = "login-container" >
        <
        h1 className = "login-title" > Login < /h1>{" "} <
        input type = "email"
        placeholder = "Enter Email"
        className = "inputBox"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        />{" "} <
        input type = "password"
        placeholder = "Enter Password"
        className = "inputBox"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        />{" "} <
        button onClick = { handleLogin }
        className = "appButton"
        type = "button" >
        Login { " " } <
        /button>{" "} <
        /div>
    );
};

export default LoginForm;