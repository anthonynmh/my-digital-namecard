import React from "react";

export default function Profile() {
    return (
        <div className="profile--container">
            <img className="profile" src={require("../images/profilepic.jpeg")} />
        </div>
    )
}