import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EventPage.css";
import { FaUser } from 'react-icons/fa';
import Banner from "../Assets/banner.jpg";

function EventPage() {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);
    const userId = sessionStorage.getItem("userId");
    const [isHost, setIsHost] = useState(false);
    const [participants, setData] = useState(null);
    const [isParticipant, setIsPart] = useState(false);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`https://localhost:7192/api/events/getEvent?id=${id}`);
                const data = await response.json();
                setEventData(data.result.eventData);
                setData(data.result.participants);
                setIsHost(data.result.eventData.host_id == userId);
                isParticipating(data.result.participants);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvent();
    }, [id]);

    function isParticipating(listaPart) {
        for (let i = 0; i < listaPart.length; i++) {
            if (parseInt(listaPart[i]) === parseInt(userId)) {
                setIsPart(true);
                return;
            }
        }
        setIsPart(false);
    }





    const addParticipant = async () => {
        try {
            if (!id) {
                console.log("Invalid event ID");
                return;
            }

            const response = await fetch(
                `https://localhost:7192/api/events/addParticipant?userId=${userId}&eventId=${id}`,
                {
                    method: "POST", // Use the appropriate HTTP method for adding a participant
                }
            );

            if (response.ok) {
                console.log("Participant added successfully");
                window.location.reload();
                // Optionally, you can perform a specific action after adding a participant
            } else {
                console.log("Failed to add participant");
                alert("Failed to add participant, please try again later");
            }

        } catch (error) {
            console.error("An error occurred:", error);
        }
    };


    const deleteEvent = async () => {
        try {
            if (!id) {
                console.log("Invalid event ID");
                return;
            }

            const response = await fetch(`https://localhost:7192/api/events/delete/${id}`, {
                method: "DELETE"
            });

            if (response.ok) {
                console.log("Event deleted successfully");
                alert("Event deleted successfully");
                window.open("/Events", "_self")
            } else {
                console.log("Failed to delete event");
                alert("Failed to delete event, please try again later")
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };


    if (!eventData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="event-page">
            <img className="EventBanner" src={Banner} alt="Event Image" />
            <img className="EventImage" src={eventData.image} alt="Event Image" />
            <h1 className="EventName">{eventData.title}</h1>
            <p className="EventDesc">{eventData.description}</p>
            <p className="location">{eventData.location}</p>
            <p className="location">
                {participants.length} / {eventData.maxParticipants}{" "}
                <FaUser size={14} color="black" />
            </p>
            {!isHost && !isParticipant && <button className="Participate" onClick={addParticipant}>PARTICIPATE</button>}
            {isParticipant && <button className="Participate">YOU PARTICIPATING</button>}
            {isHost && <button className="Delete" onClick={deleteEvent}>Delete Event</button>}
        </div>
    );
}

export default EventPage;
