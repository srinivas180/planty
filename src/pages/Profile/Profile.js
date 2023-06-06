import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Profile.css";

export function Profile() {
    const { user, logoutHandler } = useContext(AuthContext);

    return (
        <>
            {
                ( user == undefined || user == null ) ? "Loading" : (
                    <div className="container column column--center">
                        <div className="column">
                            <h2 className="account">Account</h2>
                            <h3 className="account__sub-heading">Profile</h3>
                            <div className="profile__details">
                                <div>
                                    <span className="profile__title">Full Name:</span>
                                    <span className="profile__value">{ user.firstName } { user.lastName }</span>
                                </div>
                                <div>
                                    <span className="profile__title">Email:</span>
                                    <span className="profile__value">{ user.email }</span>
                                </div>
                            </div>

                            <h3 className="account__sub-heading">Address</h3>
                            <div className="address">
                                <h4 className="address__subheading">Home</h4>
                                <div>
                                    #1/4 , 100ft Ring Road, Karve Nagar
                                </div>
                                <div>
                                    Whitefield
                                </div>
                                <div>
                                    Bangalore, India
                                </div>
                            </div>
                            <button className="button--primary logout" onClick={() => logoutHandler()}>Logout</button>
                        </div>
                </div>
                )
            }
        </>
    )
}