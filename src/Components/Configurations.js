import React, { useEffect, useState } from 'react';
import "./Configurations.css"

const [newName, setNewName] = useState("");
const [showConfigurations, setShowConfigurations] = useState(false);
const [prevPassword, setPrevPassword] = useState("");
const [newPassword, setNewPassword] = useState("");

useEffect(() => {
    if (isLoggedIn) {
        setShowConfigurations(true);
    }
}, [isLoggedIn]);

const handleNameChange = (e) => {
    setNewName(e.target.value);
};

const handlePrevPasswordChange = (e) => {
    setPrevPassword(e.target.value);
};

const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
};

useEffect(() => {
    const fetchName = async () => {
        try {
            const response = await fetch(`https://localhost:7192/api/events/getUser?id=${id}`);
            const data = await response.json();
            setUserData(data);
            console.log(id)
        } catch (error) {
            console.error(error);
        }
    };

    const checkPassword = async () => {
        try {
            const response = await fetch(`https://localhost:7192/api/users/checkPassword?id=${userId}&password=${prevPassword}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (!userData) {
                return <div>Precisa de estar logado na sua conta para poder aceder as configurações.</div>;
            }

            const saveSettings = () => {
                handleNameChange();
                // Implement logic to save settings
                console.log('Settings saved');
            };

            return (
                <div class="fundo">
                    <div class="cont">
                        <h1>Configurações</h1>
                        <h2>Mudar de Nome</h2>
                        <input
                            placeholder='Insira o novo nome'
                            value={userData.name}
                            onChange={handleNameChange}
                            required
                        />
                        <button onClick={saveSettings}>Save</button>
                    </div>
                </div>
            );
        }

export default Configurations;
