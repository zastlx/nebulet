import styles from "./styles/selector.module.css";
import Blook from "../../components/Blook";
import APIManager from "../../services/apiManager";
import { ENDPOINTS } from "../../constants/endpoints";
import authStore from "../../stores/AuthStore";
import { useNavigate } from "react-router-dom";
import userStore from "../../stores/UserStore";
import { useState } from "react";

// up here is t

/* eslint-disable */
export default function Selector({type, close}) {
/* eslint-enable*/
    const navigate = useNavigate();
    const [blooks, setBlooks] = useState(["astronaut", ...Object.keys(userStore.getLocalUser().blooks)]);

    const handleSearch = (element) => {
        const predicate = element.target.value;

        if (!predicate || predicate === " " || predicate === "") return setBlooks([
            "astronaut",
            ...Object.keys(userStore.getLocalUser().blooks)
        ]);
        
        setBlooks([
            ...Object.keys(userStore.getLocalUser().blooks).filter(blookName => blookName.includes(predicate))
        ]);
    };
    return (
        <div className={styles.model}>
            <div onClick={() => close()} className={styles.modalButton} role="button"></div>
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                    <input
                        className={styles.searchInput}
                        placeholder="Search Blooks"
                        onChange={handleSearch}
                        type="text"/>
                </div>
                <div className={styles.blooksHolder}>
                {blooks.map((blookName, _) => {
                            return (
                                <div key={_} className={styles.blookContainer} role="button">
                                    <div className={`${styles.blookContainerInside} ${styles.blook}`}>
                                    <Blook
                                        blookName={blookName}
                                        customClass={styles.blook}
                                        onClick={async () => {
                                            const response = await APIManager.post(ENDPOINTS.USER.INFO(), {
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
                                        }} key={_} />
                                    </div>
                                </div>
                            );
                })}
                </div>
            </div>
        </div>
    );
}

/*
<div class="styles__blookContainer___hvHJM-camelCase" role="button" tabindex="0"><div class="styles__blookContainer___36LK2-camelCase styles__blook___3FnM0-camelCase"><img src="https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg" alt="Chick Blook" draggable="false" class="styles__blook___1R6So-camelCase"></div></div>
*/