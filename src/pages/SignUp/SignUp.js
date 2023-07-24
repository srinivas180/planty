import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export function SignUp() {
    const { signupHandler } = useContext(AuthContext);
    const [userCredentials, setUserCredentials] = useState();

    return (
        <div className="container column column--center">
            <form className="form column">
                <h2 className="form__heading">Sign Up</h2>
                <input
                    className="form__input"
                    type="text"
                    placeholder="First Name"
                    onChange={(event) =>
                        setUserCredentials((userCredentials) => ({
                            ...userCredentials,
                            firstName: event.target.value,
                        }))
                    }
                />
                <input
                    className="form__input"
                    type="text"
                    placeholder="Last Name"
                    onChange={(event) =>
                        setUserCredentials((userCredentials) => ({
                            ...userCredentials,
                            lastName: event.target.value,
                        }))
                    }
                />
                <input
                    className="form__input"
                    type="email"
                    placeholder="Email"
                    onChange={(event) =>
                        setUserCredentials((userCredentials) => ({
                            ...userCredentials,
                            email: event.target.value,
                        }))
                    }
                />
                <input
                    className="form__input"
                    type="password"
                    placeholder="Password"
                    onChange={(event) =>
                        setUserCredentials((userCredentials) => ({
                            ...userCredentials,
                            password: event.target.value,
                        }))
                    }
                />
                <input
                    className="form__input"
                    type="password"
                    placeholder="Confirm Password"
                />
                <button
                    className="button button--primary form__submit"
                    type="submit"
                    onClick={(event) => {
                        event.preventDefault();
                        signupHandler(userCredentials);
                    }}
                >
                    Create New Account
                </button>
            </form>
            <div>
                Already have account?
                <NavLink className="form__navlink" to="/login">
                    {" "}
                    Login{" "}
                </NavLink>
            </div>
        </div>
    );
}
