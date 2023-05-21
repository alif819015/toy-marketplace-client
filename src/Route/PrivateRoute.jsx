import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    
    if(loading){
        return <section className="flex items-center justify-center h-screen">
        <ImSpinner className="h-20 w-40 mx-auto text-pink-600 animate-spin"></ImSpinner>

  </section>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;