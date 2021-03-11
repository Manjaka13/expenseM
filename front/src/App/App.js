import React from "react";
import "./App.scss";
import Login from "../Login/Login";
import ListSection from "../ListSection/ListSection";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const component_displayed = isAuthenticated ? (<ListSection />) : (<Login />);
    return (
        <div className="app">
            <div className="window">
                {component_displayed}
            </div>
        </div>
    );
}

export default App;