import Error404 from "./errors/404";
import Homepage from "./home";
import Auth from "./auth";
import Terms from "./tos";
import Test from "./_test";

export default {
    errors: {
        error404: Error404
    },
    home: Homepage,
    auth: Auth,
    terms: Terms,
    test: Test
};