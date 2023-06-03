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

    return (
        <AuthContext.Provider value={{ encodedToken, user, loginHandler }} >
            { children }
        </AuthContext.Provider>
    );
}