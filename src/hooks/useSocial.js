import { useState } from "react";
import auth from "../firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();


const useSocial = () => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                setError(error);
            })

    }

    return {
        handleSignInWithGoogle,
        user,
        error
    }
}

export default useSocial;