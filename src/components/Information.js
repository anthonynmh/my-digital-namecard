import React from "react";

export default function Information() {
    return (
        <main className="mainContent">
            <div className="info--main">
                <p className="name">Anthony Neo Ming Hong</p>
                <p className="role">Frontend Developer</p>
                <p className="email">anthonyneomh@gmail.com</p>
            </div>
            <div className="info--extra">
                <div className="about">
                    <h3>About</h3>
                    <p>I am an aspiring frontend developer with a diploma in Electrical and Electronics Engineering. My interests lie in making an impact in people's lives. Though I lack in experience, I make up for it by continuously honing my craft.</p>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>HTML,CSS,JS,React</li>
                        <li>SQL</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>Electrical and Electronics</li>
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