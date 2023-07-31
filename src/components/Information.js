import React from "react";

export default function Information() {
    return (
        <main className="mainContent">
            <div className="info--main">
                <p className="name">Anthony Neo Ming Hong</p>
                <p className="role">Aspiring Full-Stack Developer</p>
                <p className="email">anthonyneomh@gmail.com</p>
            </div>
            <div className="info--extra">
                <div className="about">
                    <h3>About:</h3>
                    <p>
                        Hi there!{"\n"}
                        You may click/tap my profile image for my latest resume.{"\n\n"}
                        Documenting my journey to full-stack.{"\n"}
                    </p>
                </div>
                <div className="projects">
                    <h3>Project Highlights</h3>
                    <h4>Web Dev (HTML, CSS, JavaScript, React)</h4>
                    <ul> 
                        <li>
                            <a href="https://monster-hunter-rpg-2.netlify.app/" 
                            target="_blank"
                            rel="noopener noreferrer">Monster Hunter RPG</a>
                            <p>Try the game here by clicking the link!</p>
                        </li>
                        <li>
                            <a href="https://anthonynmh.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer">My digital name card</a>
                            <p>It's the page you're currently seeing!</p>
                        </li>
                    </ul>
                    <h4>App Dev (Java, JavaFX)</h4>
                    <ul>
                        <li>
                            <a href="https://github.com/anthonynmh/tp"
                            target="_blank"
                            rel="noopener noreferrer">EZ-Schedule</a>
                            <p>Download the latest release from GitHub.</p>
                        </li>
                    </ul>
                </div>
                <div className="skills-container">
                    <h3>Summary:</h3>
                    <div className="checks">
                        <span>&#10003;</span>
                        <label> Web Dev (HTML, CSS, JavaScript, React)</label><br/>
                        <span>&#10007;</span>
                        <label> Back End</label><br/>
                        <span>&#10007;</span>
                        <label> App Development (Android)</label><br/>
                        <span>&#10007;</span>
                        <label> App Development (IOS: Swift)</label><br/>
                        <span>&#10003;</span>
                        <label> App Development (Java)</label><br/>
                    </div>
                </div>
            </div>
        </main>
    )
}