import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import { useNavigate } from "react-router-dom";
import withAuth from "../../components/HOCs/withAuth";

function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        authStore.logout().then(() => navigate("/login")).catch((e) => {
            if (e.status === 201 || e.status === 404) {
                authStore.forceLogout();
                return navigate("/login");
            }
        });
    }, []);

    return (<div>Loading...</div>);
}

export default withAuth(Logout);