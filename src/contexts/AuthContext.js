import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [encodedToken, setEncodedToken] = useState(localStorage.getItem("encodedToken"));
    const [user, setUser] = useState(localStorage.getItem("user"));

    async function loginHandler(userCredentials) {
        const response = await fetch("/api/auth/login", {
            method: 'POST',
            body: JSON.stringify(userCredentials),
        });
    
        const { encodedToken, foundUser } = await response.json();
        
        localStorage.setItem("encodedToken", encodedToken);
        localStorage.setItem("user", foundUser);
        
        setEncodedToken(encodedToken);
        setUser(foundUser);
    }

    async function signupHandler(userCredentials) {
        const response = await fetch("/api/auth/signup", {
            method: 'POST',
            body: JSON.stringify(userCredentials),
        });

        const { encodedToken, createdUser} = await response.json();

        localStorage.setItem("encodedToken", encodedToken);
        localStorage.setItem("user", createdUser);

        setEncodedToken(encodedToken);
        setUser(createdUser);
    }

    return (
        <AuthContext.Provider value={{ encodedToken, user, loginHandler, signupHandler }} >
            { children }
        </AuthContext.Provider>
    );
}