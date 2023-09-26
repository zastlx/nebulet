import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import pages from "./pages";
import eventManager from "./services/eventManager";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) return (
            <>
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(82, 3, 84, 0.7)",
                    borderRadius: "10px",
                    boxShadow: "inset 0 -9px rgba(0, 0, 0, 0.2), 0 5px rgba(0, 0, 0, 0)",
                    width: "70vw",
                    padding: "30px 10px",
                    display: "flex",
                    justifyContent: "center",
                    flexFlow: "column",
                    textAlign: "center",
                    color: "white"
                }}>
                    <div style={{
                        fontFamily: "Titan One",
                        fontSize: "50px",
                    textShadow: "1px 1px 5px rgba(255, 255, 255, 0.7)"
                    }}>Error</div>
                    <div style={{
                        display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                        width: "100%",
                        height: "auto"
                    }}>
                        <p style={{ fontSize: '25px' }}>Something went wrong.<br />Please contact developers of Nebulet as soon as possible.</p>
                    </div>
                </div>
                <div style={{
                    position: "fixed",
                    backgroundImage: "url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    height: "100vh",
                    width: "100%",
                    opacity: "0.1",
                    zIndex: "-2"
                }}></div>
            </>
        );
        return this.props.children;
    }
}
*/

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<pages.home />} />
                <Route path="/terms" element={<pages.terms />} />
                <Route path="/register" element={<pages.auth type="register" />} />
                <Route path="/login" element={<pages.auth type="login" />} />
                <Route path="/logout" element={<pages.logout />} />
                <Route path="/stats" element={<pages.stats />} />
                <Route path="/leaderboard" element={<pages.leaderboard />} />
                <Route path="/chat" element={<pages.chat />} />
                <Route path="/galaxy" element={<pages.galaxy />} />
                <Route path="/inv" element={<pages.inv />} />
                <Route path="/plaza" element={<pages.plaza />} />
                <Route path="/quests" element={<pages.quests />} />
                <Route path="/panel" element={<pages.panel />} />
                <Route path="/settings" element={<pages.settings />} />
                <Route path="/credits" element={<pages.credits />} />
                <Route path="/store" element={<pages.store />} />
                <Route path="/particles" element={<pages.particles />} />
            </Routes>
        </BrowserRouter>
    );
};

document.addEventListener("keydown", (event) => {
    eventManager.dispatch("KEY_PRESS", event);
});

// window.global = window;

createRoot(document.getElementById('root')).render(
    <App />
);