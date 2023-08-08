import bannerStore from "../../stores/BannerStore";

const withBannerStore = (WrappedComponent) => {
    return function WithBannerStore(props) {
        if (!bannerStore.isInited) bannerStore.init();

        return <WrappedComponent {...props}/>;
    };
};

export default withBannerStore;