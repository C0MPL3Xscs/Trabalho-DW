import React, { useEffect, useState } from 'react';
import "./Configurations.css"


function Configurations(id) {
    const [userData, setUserData] = useState(null);

    const handleNameChange = (e) => {
        setUserData.name(e.target.value);
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

        fetchName();
    }, [id]);

    if (!userData) {
        return <div>You need to be logged in to access configurations.</div>;
    }

    const saveSettings = () => {
        // Implement logic to save settings
        console.log('Settings saved');
    };

    return (
        <div class="fundo">
            <div class="cont">
                <h1>Configurations</h1>
                <h2>Change your username</h2>
                <input
                    placeholder='Insert new name'
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