import "./User.css";
import React, { useEffect, useState } from "react";
import Logo from "../UserLogo.png";
import banner from "../Assets/banner.jpg";
import Event from "./Event.js";

function ProfilePage() {
    const [eventIds, setEventIds] = useState([]);
    const [eventPartIds, setEventPartIds] = useState([]);
    const name = sessionStorage.getItem("userName");

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(
                    `https://localhost:7192/api/users/getEvents?id=${sessionStorage.getItem(
                        "userId"
                    )}`
                );
                const data = await response.json();
                setEventIds(data.events);
            } catch (error) {
                console.error(error);
            }

            try {
                const response = await fetch(
                    `https://localhost:7192/api/users/getEventsPart?id=${sessionStorage.getItem(
                        "userId"
                    )}`
                );
                const data = await response.json();
                setEventPartIds(data.events);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvent();
    }, []);

    return (
        <div className="bigContainer">
            <img className="banner" src={banner} alt="Event Image" />
            <img className="logo" src={Logo} alt="Event Image" />
            <h1>{name}</h1><br></br><br></br><br></br>
            <h1>YOUR EVENTS:</h1>
            {eventIds.map((id) => (
                <Event key={id} id={id} />
            ))}
            <h1>EVENTS YOU ARE PARTICIPATING:</h1>
            {eventPartIds.map((id) => (
                <Event key={id} id={id} />
            ))}
        </div>
    );
}

export default ProfilePage;
