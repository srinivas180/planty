import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import "./Login.css";

export function Login() {
    const { loginHandler } = useContext(AuthContext);
    const guesUserCredentials = {
        email: "satyachandra@proton.me",
        password: "satyachandra",
    };

    return (
        <div className="container column column--center">
            <form className="form column">
            <h2 className="form__heading">Login</h2>

                <input className="form__input" type="email" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password"/>
                <div className="row row--space-between">
                    <label>
                        <input type="checkbox"/>
                        Remember me
                    </label>
                    <NavLink className="form__navlink navlink--no-underline">Forgot password</NavLink>
                </div>
                <button className="button--primary form__submit" type="submit">Login</button>
                <button className="button--text form__guest-login-button" 
                    onClick={
                        (event) => {
                            event.preventDefault();
                            loginHandler(guesUserCredentials)
                        }
                    }
                >Login as Guest</button>
            </form>
            <div>
                Don't have account?
                <NavLink className="form__navlink" to="/signup"> Signup</NavLink>
            </div>
            
        </div>
    )
}