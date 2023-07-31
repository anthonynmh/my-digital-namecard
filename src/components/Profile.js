import React from "react";

export default function Profile() {
    return (
        <div className="profile--container">
            <a href="https://drive.google.com/file/d/11XIIFXNYGn72vGKBXy9WDBHlNcjDTN5O/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <img className="profile" src={require("../images/namecard-photo2.jpeg")} 
                alt="profile" /></a>
        </div>
    )
}