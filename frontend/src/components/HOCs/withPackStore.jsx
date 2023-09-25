import packStore from "../../stores/PackStore";
import eventManager from "../../services/eventManager";
import { useEffect, useState } from "react";

const withPackStore = (WrappedComponent) => {
    return function WithPackStore(props) {
        const [packStoreLoaded, setPackStoreLoaded] = useState(packStore.isInited);

        useEffect(() => {
            if (!packStore.isInited) packStore.init();
            const packStoreUpdate = () => setPackStoreLoaded(packStore.isInited);

            const int = setInterval(() => {
                if (packStore.isInited) packStoreUpdate();
            }, 100);

            const subs = [
                eventManager.subscribe("PACK_STORE_UPDATE", packStoreUpdate),
                eventManager.subscribe("PACK_STORE_INIT", packStoreUpdate)
            ];

            return () => {
                clearInterval(int);
                subs.forEach((unsub) => unsub());
            };
        }, []);

        
        if (!packStoreLoaded) return <div>Loading...</div>;

        return <WrappedComponent {...props}/>;
    };
};

export default withPackStore;