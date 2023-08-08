import channelStore from "../../stores/ChannelStore";

const withChannelStore = (WrappedComponent) => {
    return function WithChannelStore(props) {
        if (!channelStore.isInited) channelStore.init();
        
        return <WrappedComponent {...props}/>;
    };
};

export default withChannelStore;