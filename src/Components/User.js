import "./User.css"
import React, { useEffect, useState } from "react";



function ProfilePage({ id }) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://localhost:7192/api/events/getUser?id=${id}`);
                const data = await response.json();
                setUserData(data);
                console.log(id)
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, [id]);

    if (!userData) {
        return <div>Precisa de estar logado na sua conta para poder ver o seu perfil.</div>;
    }



    return (
        <div className="profile">
            <img src="profile-pic.jpg" alt={userData.img} />
            <h2>Nome: {userData.Name} </h2>
            <h3>Eventos Criados: {userData.listaCreated}</h3>
            <h4>Eventos em que está a participar: {userData.listaParticipant} </h4>
            <h5>Membro desde: {userData.created_at} </h5>
        </div>
    );

}
export default ProfilePage;