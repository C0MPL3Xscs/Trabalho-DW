import "./User.css";
import React, { useEffect, useState } from "react";
import Logo from "../Assets/UserLogo.png";
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
            <img className="logo" src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0"/>
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
