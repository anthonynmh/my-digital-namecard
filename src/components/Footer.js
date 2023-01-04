import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <a target={"_blank"} href="https://www.linkedin.com/in/anthony-neomh/">
                <img src={require("../images/LinkedIn-icon.png")} />
            </a>
            <a target={"_blank"} href="https://github.com/anthonynmh">
                <img src={require("../images/GitHub-icon.png")} />
            </a>
        </footer>
    )
}