import React from "react";
import "./ProfilePage.css"



function ProfilePage() {

    return (
        <div className="profile">
            <img src="profile-pic.jpg" alt="Profile Picture" />
            <h2>Nome: </h2>
            <h3>Eventos Criados: </h3>
            <h4>Eventos em que está a participar: </h4>
            <h5>Membro desde: </h5>
        </div>
    );
}

export default ProfilePage;