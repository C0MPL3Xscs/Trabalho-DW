import "./User.css"
import React, { useEffect, useState } from "react";
import Logo from "../UserLogo.png";
import banner from "../Assets/banner.jpg";
import Event from "./Event.js"

function ProfilePage() {

    const name = sessionStorage.getItem("userName");

    return (
        <div className='bigContainer'>
            <img className="banner" src={banner} alt="Event Image" />
            <img className="logo" src={Logo} alt="Event Image" />
            <h1>{name}</h1>
            <h1>EVENTS YOU CREATED:</h1>
            <div className="Events">
                <Event className="Evento" id={6} />
                <Event className="Evento" id={9} />
                <Event className="Evento" id={12} />
            </div>
        </div>
    );

}
export default ProfilePage;