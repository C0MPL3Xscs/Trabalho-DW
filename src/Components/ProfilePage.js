import React from 'react';
import User from "./User.js"
import "./ProfilePage.css"

function ProfilePage() {
    const id = 1;

    return (
        <div className='bigContainer'>
            <User id={1} />
        </div>
    );
}

export default ProfilePage;
