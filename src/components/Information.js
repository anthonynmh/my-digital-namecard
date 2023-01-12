import React from "react";

export default function Information() {
    return (
        <main className="mainContent">
            <div className="info--main">
                <p className="name">Anthony Neo Ming Hong</p>
                <p className="role">Aspiring Web Developer</p>
                <p className="email">anthonyneomh@gmail.com</p>
            </div>
            <div className="info--extra">
                <div className="about">
                    <h3>About:</h3>
                    <p>
                        Hi! 
                        I am a second year computer science student from NUS.
                        The skills I currently have are listed below!

                        {/*
                        Hi! 
                        I am a second year computer science student from NUS.
                        The skills I currently have are listed below!
                        */}
                    </p>
                </div>
                <div className="skills-container">
                    <h3>Skills:</h3>
                    <ul>
                        <li>Confident language: 
                            <span className="skills">Java</span>
                        </li>
                        <li>Other languages: 
                            <span className="skills">C, Python</span>
                        </li>
                        <li>Backend: 
                            <span className="skills">SQL, PostgreSQL</span>
                        </li>
                        <li>Frontend: 
                            <span className="skills">HTML, CSS, JS, React</span>
                        </li>
                        <li>Others: 
                            <span className="skills">Electrical and Electronics</span>
                        </li>
                        <li>Also: 
                            <span className="skills">Communication, Leadership</span>
                        </li>
                    </ul>
                </div>
                {/*
                <div className="email">
                    <img src={require("../images/Email-icon.png")} />
                    <p>Email</p>
                </div>
                */}
            </div>
        </main>
    )
}