import React, { useEffect, useState } from 'react';
import "./Configurations.css";

function Configurations() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const userId = sessionStorage.getItem("userId");

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

    const changeName = async () => {
        try {
            const response = await fetch(`https://localhost:7192/api/users/changeName?id=${userId}&newName=${newName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (data.success) {
                console.log('Username changed successfully');
                console.log('New Name:', newName);
                sessionStorage.setItem('userName', newName);
                alert('Username successfully changed');
            } else {
                console.log('Failed to change username');
                alert('Failed to change username');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const changePassword = async () => {
        try {
            const response = await fetch(`https://localhost:7192/api/users/changePassword?id=${userId}&newPassword=${newPassword}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (data.success) {
                console.log('Password changed successfully');
                setPrevPassword("");
                setNewPassword("");
                alert('Password successfully changed');
            } else {
                console.log('Failed to change password');
                alert('Failed to change password');
            }
        } catch (error) {
            console.error('An error occurred:', error);
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

            if (data.passwordCorrect) {
                console.log('Password is correct');
                changePassword();
            } else {
                console.log('Invalid password');
                alert('Invalid password');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="fundo">
            {showConfigurations && (
                <div className="cont">
                    <h1>SETTINGS</h1>
                    <h2>Change UserName</h2>
                    <input
                        placeholder='Enter new username'
                        value={newName}
                        onChange={handleNameChange}
                        required
                    />
                    <button className='buttonSave' onClick={changeName}>Change Name</button>

                    <h2>Change Password</h2>
                    <input
                        type="password"
                        placeholder="Enter previous password"
                        value={prevPassword}
                        onChange={handlePrevPasswordChange}
                        required
                    /><br></br><br></br>
                    <input
                        type="password"
                        placeholder="Enter new password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required
                    />
                    <button className='buttonSave' onClick={checkPassword}>Change Password</button>
                </div>
            )}
            {!isLoggedIn && (
                <h1>You need to be logged-in to see your settings.</h1>
            )}
        </div>
    );
}

export default Configurations;
