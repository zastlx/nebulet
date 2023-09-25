import { useNavigate } from "react-router-dom";
import authStore from "../../stores/AuthStore";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
    return function WithAuth(props) {
        const navigate = useNavigate();
        useEffect(() => {
            if (!authStore.isAuthenticated) return navigate("/login");  
        }, [authStore.isAuthenticated]);

        return <WrappedComponent {...props}/>;
    };
};

export default withAuth;
