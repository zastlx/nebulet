import {useEffect, useState} from "react";
import userStore from "../../stores/UserStore";
import eventManager from "../../services/eventManager";

const withUserStore = (WrappedComponent) => {
    return function WithUserStore(props) {
        const [isUserLoaded, setUserLoaded] = useState(userStore.getLocalUser() !== undefined);

        useEffect(() => {
            const userStoreUpdate = () => setUserLoaded(true);
            const int = setInterval(() => {
                if (userStore.getLocalUser() !== undefined) userStoreUpdate();
            }, 100);

            const subs = [
                eventManager.subscribe("LOCAL_USER_UPDATE", userStoreUpdate),
                eventManager.subscribe("LOCAL_USER_INIT", userStoreUpdate)
            ];

            return () => {
                clearInterval(int);
                subs.forEach((unsub) => unsub());
            };
        }, []);

        if (!isUserLoaded) return <div>Loading...</div>;
        
        return <WrappedComponent {...props}/>;
    };
};

export default withUserStore;