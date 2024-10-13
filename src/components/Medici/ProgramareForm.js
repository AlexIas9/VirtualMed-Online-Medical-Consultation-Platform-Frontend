import React, { useState } from 'react';
import './ProgramareForm.css';

const ProgramareForm = () => {
    const [formData, setFormData] = useState({
        data: '',
        ora: '',
        nume: '',
        prenume: '',
        telefon: '',
        serviciu: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Trimiteți datele către backend sau faceți altceva cu acestea
        console.log(formData);
    };

    return ( <
        div className = "programare-form-container" >
        <
        h2 > Formular de Programare < /h2> <
        form onSubmit = { handleSubmit } >
        <
        label >
        Data:
        <
        input type = "date"
        name = "data"
        value = { formData.data }
        onChange = { handleChange }
        /> <
        /label> <
        label >
        Ora:
        <
        input type = "time"
        name = "ora"
        value = { formData.ora }
        onChange = { handleChange }
        /> <
        /label> <
        label >
        Nume:
        <
        input type = "text"
        name = "nume"
        value = { formData.nume }
        onChange = { handleChange }
        /> <
        /label> <
        label >
        Prenume:
        <
        input type = "text"
        name = "prenume"
        value = { formData.prenume }
        onChange = { handleChange }
        /> <
        /label> <
        label >
        Telefon:
        <
        input type = "tel"
        name = "telefon"
        value = { formData.telefon }
        onChange = { handleChange }
        /> <
        /label> <
        label >
        Serviciu:
        <
        input type = "text"
        name = "serviciu"
        value = { formData.serviciu }
        onChange = { handleChange }
        /> <
        /label> <
        input type = "submit"
        value = "Trimite" / >
        <
        /form> <
        /div>
    );
}

export default ProgramareForm;