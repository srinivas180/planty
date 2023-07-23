import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [encodedToken, setEncodedToken] = useState(
        localStorage.getItem("encodedToken")
    );
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    async function loginHandler(userCredentials) {
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify(userCredentials),
            });

            if (response.status === 200) {
                const { encodedToken, foundUser } = await response.json();

                localStorage.setItem("encodedToken", encodedToken);
                localStorage.setItem("user", JSON.stringify(foundUser));

                setEncodedToken(encodedToken);
                setUser(foundUser);

                navigate("/products");
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function signupHandler(userCredentials) {
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify(userCredentials),
            });

            if (response.status === 201) {
                const { encodedToken, createdUser } = await response.json();

                localStorage.setItem("encodedToken", encodedToken);
                localStorage.setItem("user", JSON.stringify(createdUser));

                setEncodedToken(encodedToken);
                setUser(createdUser);

                navigate("/products");
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function logoutHandler() {
        localStorage.setItem("encodedToken", null);
        localStorage.setItem("user", null);

        setEncodedToken(null);
        setUser(null);

        navigate("/");
    }

    useEffect(() => {
        setIsLoggedIn(user != undefined || user != null);
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                encodedToken,
                user,
                isLoggedIn,
                loginHandler,
                signupHandler,
                logoutHandler,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
