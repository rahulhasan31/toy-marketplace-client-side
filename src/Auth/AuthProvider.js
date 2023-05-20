import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase.config';
import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile, } from 'firebase/auth'


const auth = getAuth(app);
export const AuthContext = createContext()

const provider= new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
            .then(r => console.log(r))
            .catch(e => console.error(e))
    }

const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}
    
    const updateProfileUser = (profile) => {
        
        return updateProfile(auth.currentUser, profile)
    }
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = { user, createUser, loginWithEmail, loading, logOut, updateProfileUser,googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;