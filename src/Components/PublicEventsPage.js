import React from 'react';
import Event from "./Event.js"
import "./PublicEventsPage.css"

function InitialPage() {
  const userId = 1;

  return (
    <div className='bigContainer'>
      <Event id={1} />
      <Event id={5} />
      <Event id={6} />
      <Event id={9} />
      <Event id={11} />
      <Event id={12} />
    </div>
  );
}

export default InitialPage;
