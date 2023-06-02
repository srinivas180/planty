import { createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ encodedToken }} >
            { children }
        </AuthContext.Provider>
    );
}