import styles from "./styles/selector.module.css";
import Blook from "../../components/Blook";
import APIManager from "../../services/apiManager";
import { ENDPOINTS } from "../../constants/endpoints";
import authStore from "../../stores/AuthStore";
import { useNavigate } from "react-router-dom";
import logManager from "../../services/logManager";
import userStore from "../../stores/UserStore";
import eventManager from "../../services/eventManager";

/* eslint-disable */
export default function Selector({type, close}) {
/* eslint-enable*/
    const navigate = useNavigate();
    return (
        <div className={styles.model}>
            <div className={styles.modalButton} role="button"></div>
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                    <input
                        className={styles.searchInput}
                        placeholder="Search Blooks"
                        type="text"/>
                </div>
                <div className={styles.blooksHolder}>
                    <div className={styles.blookContainer} role="button">
                        <div className={`${styles.blookContainerInside} ${styles.blook}`}>
                            <Blook
                                onClick={() => {
                                    const response = APIManager.post(ENDPOINTS.USER.INFO(), {
                                        avatarBlook: "astronaut"
                                    });

                                    const { status, data } = response;

                                    switch (status) {
                                        case 401:
                                            authStore.forceLogout();
                                            navigate("/login");
                                            break;
                                        case 200:
                                            eventManager.dispatch("LOCAL_USER_UPDATE");
                                            break;
                                        default:
                                            logManager.error(status, data);
                                            break;
                                    }

                                    close();
                                }}
                                blookName="astronaut"
                                customClass={styles.blook}/>
                            
                            {Object.keys(userStore.getLocalUser().blooks).map((blookName, _) => {
                                return (<Blook onClick={() => {
                                    const response = APIManager.post(ENDPOINTS.USER.INFO(), {
                                        avatarBlook: blookName
                                    });

                                    const { status, data } = response;

                                    switch (status) {
                                        case 401:
                                            authStore.forceLogout();
                                            navigate("/login");
                                            break;
                                        case 200:
                                             userStore.getLocalUser().update(data);
                                            break;
                                        default:
                                            console.log(status, data);
                                            break;
                                    }

                                    close();
                                }} key={_} blookName={blookName} customClass={styles.blook}/>);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
