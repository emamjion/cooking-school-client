import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName : name,
            photoURL : photo
        });
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // get and set token
            if(currentUser){
                axios.post('https://cooking-school-server.vercel.app/jwt', {email : currentUser.email})
                .then(data => {
                    // console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token');
            }

            
        })
        return () => unsubscribe();
    }, [])
    
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateProfileUser,
        googleSignIn
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;