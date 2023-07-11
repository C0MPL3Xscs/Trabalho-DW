import React, { useState } from 'react';
import "./CreateEvent.css";

function CreateEvent() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const userId = sessionStorage.getItem("userId");

    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventImageURL, setEventImageURL] = useState("");
    const [maxParticipants, setMaxParticipants] = useState("");
    const [eventIsPrivate, setEventIsPrivate] = useState(false);

    const handleEventNameChange = (e) => {
        setEventName(e.target.value);
    };

    const handleEventDateChange = (e) => {
        setEventDate(e.target.value);
    };

    const handleEventLocationChange = (e) => {
        setEventLocation(e.target.value);
    };

    const handleEventEndDateChange = (e) => {
        setEventEndDate(e.target.value);
    };

    const handleEventDescriptionChange = (e) => {
        setEventDescription(e.target.value);
    };

    const handleEventImageURLChange = (e) => {
        setEventImageURL(e.target.value);
        console.log(userId);
    };

    const handleMaxParticipantsChange = (e) => {
        setMaxParticipants(e.target.value);
    };

    const handleEventPrivacyChange = (e) => {
        setEventIsPrivate(e.target.checked);
    };


    const createEvent = async () => {
        try {
            const url = `https://localhost:7192/api/events/createEvent?id=${parseInt(userId)}&eventName=${eventName}&eventDate=${eventDate}&eventLocation=${eventLocation}&endDate=${eventEndDate}&eventDesc=${eventDescription}&imgURL=${eventImageURL}&isPrivate=${eventIsPrivate}&maxParticipants=${parseInt(maxParticipants)}`;
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();

                if (data.success) {

                    setTimeout(() => {
                        window.location.href = '/Profile';
                    }, 2000);
                } else {
                    console.log('Failed to create event');
                }
            } else {
                console.log('Failed to create event');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }


    return (
        <div className="fundo">
            {isLoggedIn ? (
                <div className="cont">
                    <h1>Create Event</h1>
                    <input
                        placeholder='Enter event name'
                        value={eventName}
                        onChange={handleEventNameChange}
                        required
                    /><br /><br />
                    <input
                        type="date"
                        placeholder="Select event date"
                        value={eventDate}
                        onChange={handleEventDateChange}
                        required
                    /><br /><br />
                    <input
                        placeholder='Enter event location'
                        value={eventLocation}
                        onChange={handleEventLocationChange}
                        required
                    /><br /><br />
                    <input
                        type="date"
                        placeholder="Select event end date"
                        value={eventEndDate}
                        onChange={handleEventEndDateChange}
                        required
                    /><br /><br />
                    <input
                        placeholder="Enter event description"
                        value={eventDescription}
                        onChange={handleEventDescriptionChange}
                        required
                    /><br /><br />
                    <input
                        placeholder='Enter event image URL'
                        value={eventImageURL}
                        onChange={handleEventImageURLChange}
                        required
                    /><br /><br />
                    <input
                        type="number"
                        placeholder="Enter maximum participants"
                        value={maxParticipants}
                        onChange={handleMaxParticipantsChange}
                        required
                    /><br /><br />
                    <label>
                        <input
                            type="checkbox"
                            checked={eventIsPrivate}
                            onChange={handleEventPrivacyChange}
                        />
                        Private Event
                    </label><br /><br />
                    <button className='buttonSave' onClick={createEvent}>Create Event</button>
                </div>
            ) : (
                <h1>You need to be logged in to create events.</h1>
            )}
        </div>
    );
}

export default CreateEvent;
