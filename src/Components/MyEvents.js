import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event from "./Event.js"


function UserEvents( userId ){
    const [eventIds, setEventIds] = useState([]);

    useEffect(() => {
        // Fetch event IDs from API and update state
        fetchEventIds();
    }, []);


    const fetchEventIds = async () => {
        try {
        const response = await fetch(`https://localhost:7192/api/users/getMyEvents?id=${userId}`);
        const data = await response.json();
        setEventIds(data);
        } catch (error) {
        console.error('Error fetching event IDs:', error);
        }
    };

    return (
        <div className='bigContainer'>
            {eventIds.map((eventId) => (
            <Event id={eventId} />
            ))}
        </div>
    );
};

export default UserEvents;