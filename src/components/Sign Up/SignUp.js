import React, { useState } from "react";
import "./SignUp.css"; // Importăm fișierul de stiluri pentru a putea aplica modificările CSS

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Adăugăm stare pentru confirmarea parolei

    const collectData = () => {
        console.warn(name, email, password, confirmPassword); // Includem confirmarea parolei în funcția de colectare a datelor
    };

    return ( <
        div className = "register-container" >
        <
        h1 className = "register-title" > Register < /h1>{" "} <
        input type = "text"
        placeholder = "Enter Name"
        className = "inputBox"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        />{" "} <
        input type = "email"
        placeholder = "Enter Email"
        className = "inputBox"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        />{" "} <
        input type = "password"
        placeholder = "Enter Password"
        className = "inputBox"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        />{" "} <
        input type = "password"
        placeholder = "Confirm Password" // Adăugăm placeholder-ul pentru confirmarea parolei
        className = "inputBox"
        value = { confirmPassword }
        onChange = {
            (e) => setConfirmPassword(e.target.value)
        }
        />{" "} <
        button onClick = { collectData }
        className = "appButton"
        type = "button" >
        Sign Up { " " } <
        /button>{" "} < /
        div >
    );
};

export default SignUp;