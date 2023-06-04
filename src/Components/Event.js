import React, { useEffect, useState } from "react";
import "./Event.css";

function Event({ id }) {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`https://localhost:7192/api/events/getEvent?id=${id}`);
                const data = await response.json();
                setEventData(data);
                console.log(id)
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
        <div className="events">
            <div className="imagevent">
                <img className="imag" src={eventData.image} alt="Event Image" />
            </div>
            <div className="Info">
                <p className="nomeevent">{eventData.title}</p>
                <p className="dataevent">{eventData.description}</p>
                <p className="location">{eventData.location}</p>
                <p className="location">{eventData.listaParticipants.length + " / " + eventData.maxParticipants + " Participants "}</p>
            </div>
        </div>
    );
}

export default Event;
