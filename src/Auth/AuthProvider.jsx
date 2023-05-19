import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

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
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

// const userProfile = () =>{
//     return updateProfile(auth.currentUser,{
//         displayName: user,
//     })
// }

const google = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
        setUser(loggedUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe();
    }
},[])

    const userInfo ={
        user,
        createUser,
        loading,
        login,
        logOut,
        google,


    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;