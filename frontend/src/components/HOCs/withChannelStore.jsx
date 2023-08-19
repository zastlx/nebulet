import channelStore from "../../stores/ChannelStore";
import eventManager from "../../services/eventManager";
import { useEffect, useState } from "react";

const withChannelStore = (WrappedComponent) => {
    return function WithChannelStore(props) {
        const [channelStoreLoaded, setChannelStoreLoaded] = useState(channelStore.isInited);
        if (!channelStore.isInited) channelStore.init();


        useEffect(() => {
            const channelStoreUpdate = () => setChannelStoreLoaded(channelStore.isInited);

            const int = setInterval(() => {
                if (channelStore.isInited) channelStoreUpdate();
            }, 100);

            const subs = [
                eventManager.subscribe("CHANNEL_STORE_UPDATE", channelStoreUpdate),
                eventManager.subscribe("CHANNEL_STORE_INIT", channelStoreUpdate)
            ];

            return () => {
                clearInterval(int);
                subs.forEach((unsub) => unsub());
            };
        }, []);

        
        if (!channelStoreLoaded) return <div>Loading...</div>;

        return <WrappedComponent {...props}/>;
    };
};

export default withChannelStore;