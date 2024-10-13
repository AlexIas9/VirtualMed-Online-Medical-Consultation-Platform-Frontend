import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
        const [showResetPassword, setShowResetPassword] = useState(false);
        const [passwordError, setPasswordError] = useState('');

        // Date mock pentru demonstrație
        const userData = {
            name: 'Ion Popescu',
            email: 'ion.popescu@example.com',
            phone: '123-456-7890',
            address: 'Str. Principală 123, Oraș, România'
        };

        const currentAppointments = [
            { date: '2024-06-15', doctor: 'Dr. Ionescu', time: '10:00 AM' },
            { date: '2024-07-01', doctor: 'Dr. Popa', time: '14:00 PM' }
        ];

        const pastAppointments = [
            { date: '2023-12-01', doctor: 'Dr. Marcu', time: '11:00 AM' },
            { date: '2023-11-20', doctor: 'Dr. Florescu', time: '09:00 AM' }
        ];

        const medicalAnalyses = [
            { date: '2023-11-01', analysis: 'Analize Sânge', result: 'Normal' },
            { date: '2023-10-15', analysis: 'Radiografie', result: 'Fără probleme' }
        ];

        const handleResetPassword = () => {
            setShowResetPassword(true);
        };

        const handlePasswordResetSubmit = (e) => {
            e.preventDefault();

            const currentPassword = e.target['current-password'].value;
            const newPassword = e.target['new-password'].value;
            const confirmPassword = e.target['confirm-password'].value;

            if (newPassword.length < 8) {
                setPasswordError('Parola nouă trebuie să aibă cel puțin 8 caractere.');
                return;
            }

            if (newPassword !== confirmPassword) {
                setPasswordError('Parolele nu coincid.');
                return;
            }

            // Aici ar trebui să adăugați logica pentru verificarea parolei curente și pentru resetarea parolei

            setPasswordError('');
            alert('Parola a fost resetată cu succes.');
        };

        return ( <
            motion.div className = "profile-container"
            initial = {
                { opacity: 0 } }
            animate = {
                { opacity: 1 } }
            transition = {
                { duration: 0.5 } } >
            {
                showResetPassword ? ( <
                    motion.div className = "reset-password-form-container"
                    initial = {
                        { y: 50, opacity: 0 } }
                    animate = {
                        { y: 0, opacity: 1 } }
                    transition = {
                        { duration: 0.5, delay: 0.2 } } >
                    <
                    h2 > Resetare Parolă < /h2> <
                    form onSubmit = { handlePasswordResetSubmit } >
                    <
                    label htmlFor = "current-password" > Parola Curentă < /label> <
                    input type = "password"
                    id = "current-password"
                    name = "current-password"
                    required / >

                    <
                    label htmlFor = "new-password" > Parola Nouă < /label> <
                    input type = "password"
                    id = "new-password"
                    name = "new-password"
                    required / >

                    <
                    label htmlFor = "confirm-password" > Confirmare Parolă Nouă < /label> <
                    input type = "password"
                    id = "confirm-password"
                    name = "confirm-password"
                    required / >

                    {
                        passwordError && < p className = "error-message" > { passwordError } < /p>}

                        <
                        motion.input
                        type = "submit"
                        value = "Resetează Parola"
                        whileHover = {
                            { scale: 1.05 } }
                        whileTap = {
                            { scale: 0.95 } }
                        /> <
                        /form> <
                        /motion.div>
                    ): ( <
                        >
                        <
                        h1 > Profilul meu < /h1> <
                        div className = "personal-info" >
                        <
                        h2 > Informații Personale < /h2> <
                        p > < strong > Nume: < /strong> {userData.name}</p >
                        <
                        p > < strong > Email: < /strong> {userData.email}</p >
                        <
                        p > < strong > Telefon: < /strong> {userData.phone}</p >
                        <
                        p > < strong > Adresă: < /strong> {userData.address}</p >
                        <
                        /div> <
                        div className = "appointments" >
                        <
                        h2 > Programări Curente < /h2> {
                            currentAppointments.map((appointment, index) => ( <
                                div key = { index }
                                className = "appointment-item" >
                                <
                                p > < strong > Data: < /strong> {appointment.date}</p >
                                <
                                p > < strong > Doctor: < /strong> {appointment.doctor}</p >
                                <
                                p > < strong > Ora: < /strong> {appointment.time}</p >
                                <
                                /div>
                            ))
                        } <
                        /div> <
                        div className = "appointments" >
                        <
                        h2 > Programări Anterioare < /h2> {
                            pastAppointments.map((appointment, index) => ( <
                                div key = { index }
                                className = "appointment-item" >
                                <
                                p > < strong > Data: < /strong> {appointment.date}</p >
                                <
                                p > < strong > Doctor: < /strong> {appointment.doctor}</p >
                                <
                                p > < strong > Ora: < /strong> {appointment.time}</p >
                                <
                                /div>
                            ))
                        } <
                        /div> <
                        div className = "medical-analyses" >
                        <
                        h2 > Analize Medicale < /h2> {
                            medicalAnalyses.map((analysis, index) => ( <
                                div key = { index }
                                className = "analysis-item" >
                                <
                                p > < strong > Data: < /strong> {analysis.date}</p >
                                <
                                p > < strong > Analiză: < /strong> {analysis.analysis}</p >
                                <
                                p > < strong > Rezultat: < /strong> {analysis.result}</p >
                                <
                                /div>
                            ))
                        } <
                        /div> <
                        motion.button className = "reset-password-button"
                        onClick = { handleResetPassword }
                        whileHover = {
                            { scale: 1.05 } }
                        whileTap = {
                            { scale: 0.95 } } >
                        Resetare Parolă <
                        /motion.button> <
                        />
                    )
                } <
                /motion.div>
            );
        };

        export default Profile;