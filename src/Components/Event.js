import React, { useEffect, useState } from "react";
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./Event.css";

function Event({ id }) {
    const [eventData, setEventData] = useState(null);
    const [participants, setData] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`https://localhost:7192/api/events/getEvent?id=${id}`);
                const data = await response.json();
                setEventData(data.result.eventData); // Update to access the eventData property from the response
                setData(data.result.participants);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvent();
    }, [id]);


    if (!eventData) {
        return <div>Loading...</div>;
    }

    console.log(eventData.participants);

    return (
        <Link to={`/Event/${eventData.id}`} className="events">
            <div className="imagevent">
                <img className="imag" src={eventData.image} alt="Event Image" />
            </div>
            <div className="Info">
                <p className="nomeevent">{eventData.title}</p>
                <p className="dataevent">{eventData.description}</p>
                <p className="location">{eventData.location}</p>
                <p className="location">
                    {participants.length} / {eventData.maxParticipants}{" "}
                    <FaUser size={14} color="black" />
                </p>
            </div>
        </Link>
    );
}

export default Event;
