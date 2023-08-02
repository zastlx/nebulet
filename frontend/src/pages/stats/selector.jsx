import styles from "./styles/selector.module.css";
import Blook from "../../components/Blook";
import APIManager from "../../services/apiManager";
import { ENDPOINTS } from "../../constants/endpoints";
import authStore from "../../stores/AuthStore";
import { useNavigate } from "react-router-dom";
import userStore from "../../stores/UserStore";
import { useState } from "react";
import bannerStore from "../../stores/BannerStore";

/* eslint-disable */
export default function Selector({type, close}) {
/* eslint-enable*/
    return (type === "blook" ? (<BlookSelector close={close}/>) : (<BannerSelector close={close}/>));
}


function BlookSelector({ close }) {
    const navigate = useNavigate();
    const [blooks, setBlooks] = useState(["astronaut", ...Object.keys(userStore.getLocalUser().blooks).filter(key => userStore.getLocalUser().blooks[key] >= 1)]);

    const handleSearch = (element) => {
        const predicate = element.target.value.toLowerCase();

        if (!predicate || predicate === " " || predicate === "") return setBlooks([
            "astronaut",
            ...Object.keys(userStore.getLocalUser().blooks).filter(key => userStore.getLocalUser().blooks[key] >= 1)
        ]);
        
        setBlooks([
            ...["astronaut", ...Object.keys(userStore.getLocalUser().blooks).filter(key => userStore.getLocalUser().blooks[key] >= 1)].filter(blookName => blookName.includes(predicate))
        ]);
    };
    return (
        <div className={styles.model}>
            <div onClick={() => close()} className={styles.modalButton} role="button"></div>
            <div className={styles.blookSelectorContainer}>
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

function BannerSelector({ close }) {
    const navigate = useNavigate();
    const [banners, setBanners] = useState(["default", ...userStore.getLocalUser().banners]);

    const handleSearch = (element) => {
        const predicate = element.target.value.toLowerCase();

        if (!predicate || predicate === " " || predicate === "") return setBanners([
            "default", 
            ...userStore.getLocalUser().banners
        ]);
        
        setBanners([
            ...["default", ...userStore.getLocalUser().banners].filter(blookName => blookName.includes(predicate))
        ]);
    };
    return ( //
        <div className={styles.model}>
            <div onClick={() => close()} className={styles.modalButton} role="button"></div>
            <div className={styles.bannerSelectorContainer}>
                <div className={styles.searchContainer}>
                    <input
                        className={styles.searchInput}
                        placeholder="Search Banners"
                        onChange={handleSearch}
                        type="text"/>
                </div>
                <div className={styles.editBannerColumn}>
                    {banners.map((bannerName, _) => {
                        return (
                            <div
                                key={_}
                                onClick={async () => {
                                    const response = await APIManager.post(ENDPOINTS.USER.INFO(), {
                                        banner: bannerName
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
                                }}
                                className={styles.editBannerContainer}>
                                <img
                                    src={bannerStore.getBanner(bannerName).image}
                                    alt={bannerStore.getBanner(bannerName).displayName}
                                    style={{
                                        width: "100%"
                                    }}
                                    draggable={false} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}