import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import { useNavigate } from "react-router-dom";

export default function logout() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!authStore.isAuthenticated) return navigate("/login");

        authStore.logout().then(() => navigate("/login")).catch((e) => {
            if (e.status === 201 || e.status === 404) {
                authStore.forceLogout();
                return navigate("/login");
            }
        });
    }, []);

    return (<div>Loading...</div>);
}