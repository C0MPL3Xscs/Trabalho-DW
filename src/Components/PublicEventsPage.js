import React, { useEffect, useState } from "react";
import Event from "./Event.js";
import "./PublicEventsPage.css";

function InitialPage() {
  const [eventIds, setEventIds] = useState([]);

  useEffect(() => {
    const fetchEventIds = async () => {
      try {
        const response = await fetch(`https://localhost:7192/api/events/getEventIds`);
        const data = await response.json();
        setEventIds(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEventIds();
  }, []);

  return (
    <div className='bigContainer'>
      {eventIds.map((id) => (
        <Event key={id} id={id} />
      ))}
    </div>
  );
}

export default InitialPage;

