import React from "react";

export default function Profile() {
    return (
        <div className="profile--container">
            <img className="profile" src={require("../images/namecard-photo2.jpeg")} 
                alt="profile photo" />
        </div>
    )
}