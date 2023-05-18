import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password) =>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password);
}

const login = (email, password) =>{
    setLoading(true);
    return 
}

    const userInfo ={
        user,
        createUser,
        loading,


    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;