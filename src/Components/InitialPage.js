import React from 'react';
import Slider from "./ImageSlider"
import slider1 from "../Assets/Slider1.jpg";
import slider2 from "../Assets/Slider2.jpg";
import slider3 from "../Assets/Slider3.jpg";
import "./MainPage.css"

function InitialPage() {
  return (
    <div>
      <div className="slider">
        <Slider images={[slider1, slider2, slider3]} />
      </div>
      <div className="information">
        <h2>ABOUT US</h2>
        <p>Welcome to our online platform where you can create, edit, and join events from the comfort of your own home or in-person. Our platform offers a variety of features to make event planning and participation easier than ever. Whether you're looking to organize a virtual conference or an in-person meetup, we've got you covered. Our easy-to-use tools allow you to manage your event details, schedule sessions, and interact with your attendees seamlessly. Join our community today and start planning your next event with us!</p>
      </div>
      <div className="information">
        <h2>WAIT NO MORE!<br></br>CREATE YOUR FREE ACCOUNT NOW!</h2>
        <button className="create-Account">SIGN UP</button>
      </div>
    </div>
  );
}

export default InitialPage;
