import React from "react";

export default function Information() {
    return (
        <main className="mainContent">
            <div className="info--main">
                <p className="name">Anthony Neo Ming Hong</p>
                <p className="role">Aspiring Developer</p>
                <p className="email">anthonyneomh@gmail.com</p>
            </div>
            <div className="info--extra">
                <div className="about">
                    {/*
                    <p className="about--thoughts">
                        Coding is art.{"\n"}
                        Art on canvas, a painter's touch.{"\n"}
                        Touch of perfection, lines apart.{"\n"}
                        Apart from details, lines in part.{"\n"}
                        Part of coding, coding of art.{"\n"}
                    </p>
                    */}
                    <h3>About:</h3>
                    <p>
                        Hi there!{"\n"}
                        I'm probably coding right now to expand the list below ;){"\n"}
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