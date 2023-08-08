import blookStore from "../../stores/BlookStore";

const withBlookStore = (WrappedComponent) => {
    return function WithBlookStore(props) {
        if (!blookStore.isInited) blookStore.init();
        
        return <WrappedComponent {...props}/>;
    };
};

export default withBlookStore;