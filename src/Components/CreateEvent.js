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
    };

    const handleMaxParticipantsChange = (e) => {
        setMaxParticipants(e.target.value);
    };

    const handleEventPrivacyChange = (e) => {
        setEventIsPrivate(e.target.checked);
    };


    const createEvent = async () => {
        try {
            // Construct the endpoint URL with the event details as query parameters
            const url = `https://localhost:7192/api/events/createEvent?id=${us}&eventName=${encodeURIComponent(eventName)}&eventDate=${encodeURIComponent(eventDate)}&eventLocation=${encodeURIComponent(eventLocation)}&endDate=${encodeURIComponent(eventEndDate)}&eventDesc=${encodeURIComponent(eventDescription)}&imgURL=${encodeURIComponent(eventImageURL)}&isPrivate=${eventIsPrivate}&maxParticipants=${encodeURIComponent(maxParticipants)}`;

            // Make a GET request to the constructed URL
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();

                if (data.success) {
                    console.log('Event created successfully');
                    console.log('Event Name:', eventName);
                    console.log('Event Date:', eventDate);
                    console.log('Event Location:', eventLocation);
                    console.log('Event End Date:', eventEndDate);
                    console.log('Event Description:', eventDescription);
                    console.log('Event Image URL:', eventImageURL);
                    console.log('Event Is Private:', eventIsPrivate);
                    console.log('Maximum Participants:', maxParticipants);

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
