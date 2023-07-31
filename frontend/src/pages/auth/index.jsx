import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faLock, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import Background from "../../components/Background";
import NavBar from "../../components/NavBar";
import styles from "./index.module.css";
import {useEffect, useState} from "react";
import authStore from "../../stores/AuthStore";
import APIManager from "../../services/apiManager";
window.am = APIManager;
import { ENDPOINTS } from "../../constants/endpoints";
import { useNavigate } from "react-router-dom";
import userStore from "../../stores/UserStore";

export default function Auth({type}) {
    const [username, setUsername] = useState("");
    const [password ,setPassword] = useState("");
    const [error, setError] = useState("");
    const naviagte = useNavigate();

    useEffect(() => {
        if (authStore.isAuthenticated) return naviagte("/stats");
    });

    function handleChange(e) {
        e.target.name === "password" ? setPassword(e.target.value) : setUsername(e.target.value);
    }

    async function handleClick() {
        const response = await APIManager.post(type === "login" ? ENDPOINTS.AUTHENTICATION.LOGIN : ENDPOINTS.AUTHENTICATION.REGISTER, {
            username,
            password
        });
        const { status, data } = response;

        switch (status) {
            case 200:
                authStore.authorize(data.token);
                userStore.init();
                naviagte("/stats");
                break;
            case 404:
                setError("The stars are gone! (404)");
                break;
            default:
                setError(data);
                break;
        }
    }

    return (
        <div>
            <NavBar/>
            <Background/>

            <div className={styles.container}>
                <div className={styles.containerHeader}>{type === "login"
                        ? "Login"
                        : "Register"}</div>

                <div className={styles.inputContainer}>
                    <FontAwesomeIcon className={styles.icon} icon={faUser}></FontAwesomeIcon>
                    <input
                        value={username}
                        placeholder="Username"
                        autoComplete="username"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        className={styles.input}></input>
                </div>

                <div className={styles.inputContainer}>
                    <FontAwesomeIcon className={styles.icon} icon={faLock}></FontAwesomeIcon>
                    <input
                        value={password}
                        placeholder="Password"
                        autoComplete="password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className={styles.input}></input>
                </div>

{/*
                {type !== "login"
                    ? <div className={styles.discordButton}>
                        <img className={styles.discordIcon} src="/content/discordIcon.jpeg" alt="Discord Icon"></img>
                        <text className={styles.discordText}>Login with Discord</text>
                      </div>
                    : ""
                }
                */}

                <input type="submit" onClick={handleClick} className={styles.button} value="Let's Go!"></input>

                {error
                    ? <div className={styles.errorContainer}>
                           <FontAwesomeIcon className={styles.errorIcon} icon={faTimesCircle}></FontAwesomeIcon>
                            <div className={styles.errorText}>
                                {error}
                            </div>
                        </div>
                    : ""
                }

            </div>

        </div>
    );
}