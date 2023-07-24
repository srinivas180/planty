import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

                toast.success("successfully logged in.", {
                    position: "bottom-right",
                });

                navigate("/products");
            }
        } catch (error) {
            console.error(error);
            toast.error("Some error occurred while logging in.", {
                position: "bottom-right",
            });
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

                toast.success("successfully signed up.", {
                    position: "bottom-right",
                });

                navigate("/products");
            }
        } catch (error) {
            console.error(error);
            toast.error("Some error occurred while signing up.", {
                position: "bottom-right",
            });
        }
    }

    async function logoutHandler() {
        localStorage.setItem("encodedToken", null);
        localStorage.setItem("user", null);

        setEncodedToken(null);
        setUser(null);

        toast.success("successfully logged out.", {
            position: "bottom-right",
        });

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
