import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [encodedToken, setEncodedToken] = useState();
    const [user, setUser] = useState();

    async function loginHandler(userCredentials) {
        const response = await fetch("/api/auth/login", {
            method: 'POST',
            body: JSON.stringify(userCredentials),
        });
    
        const { encodedToken, user } = await response.json();
        
        localStorage.setItem("encodedToken", encodedToken);
        localStorage.setItem("user", user);
        
        setEncodedToken(encodedToken);
        setUser(user);
    }

    return (
        <AuthContext.Provider value={{ encodedToken, user, loginHandler }} >
            { children }
        </AuthContext.Provider>
    );
}