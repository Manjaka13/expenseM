import React, {useState} from "react";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {faUser, faLock, faUnlockAlt, faKey} from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import LoginSpinner from "../LoginSpinner/LoginSpinner";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const { loginWithRedirect } = useAuth0();
    const [loading, set_loading] = useState(false);
    const cn_submit = loading ? "app-text submit submit--disabled" : "app-text submit";
    const user_icon_content = loading ? (<LoginSpinner />) : (<Icon className="icon" icon={faLock} />);
    const handle_submit = (e) => {
        e.preventDefault();
        if(!loading) {
            set_loading(true);
            loginWithRedirect();
        }
    };

    return (
        <div className="login">
            <div className="user-icon">
                {user_icon_content}
            </div>
            <h1 className="app-title app-title-sm title">Connexion</h1>
            <form className="form">
                <div className="input-group">
                    <div className="icon-box">
                        <Icon className="icon" icon={faUser} />
                    </div>
                    <input className="app-text input name" type="text" placeholder="Entrer votre nom" />
                </div>
                <div className="input-group">
                    <div className="icon-box">
                        <Icon className="icon" icon={faKey} />
                    </div>
                    <input className="app-text input name" type="password" placeholder="Entre votre mot de passe" />
                </div>
                <button className={cn_submit} type="submit" title="Cliquer pour vous connecter." onClick={handle_submit}>
                    <Icon className="icon" icon={faUnlockAlt} /> Se connecter
                </button>
            </form>
        </div>
    );
}

export default Login;