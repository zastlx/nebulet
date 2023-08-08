import { useNavigate } from "react-router-dom";
import authStore from "../../stores/AuthStore";

const withAuth = (WrappedComponent) => {
    return function WithAuth(props) {
        const navigate = useNavigate();
        if (!authStore.isAuthenticated) return navigate("/login");  

        return <WrappedComponent {...props}/>;
    };
};

export default withAuth;
