import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EventPage.css";
import Banner from "../Assets/banner.jpg";

function EventPage() {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`https://localhost:7192/api/events/getEvent?id=${id}`);
                const data = await response.json();
                setEventData(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvent();
    }, [id]);

    if (!eventData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="event-page">
            <img className="EventBanner" src={Banner} alt="Event Image" />
            <img className="EventImage" src={eventData.image} alt="Event Image" />
            <h1 className="EventName">{eventData.title}</h1>
            <p className="EventDesc">{eventData.description}</p>
            <button className="Participate">PARTICIPATE</button>
        </div>
    );
}

export default EventPage;
