import React from "react";
import Profile from "./components/Profile";
import Information from "./components/Information";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="app">
            <Profile />
            <Information />
            <Footer />
        </div>
    )
}