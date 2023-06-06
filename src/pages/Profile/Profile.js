import "./Profile.css";

export function Profile() {
    return (
        <div className="container column column--center">
            <div className="column">
                <h2 className="account">Account</h2>
                <h3 className="account__sub-heading">Profile</h3>
                <div className="profile__details">
                    <div>
                        <span className="profile__title">Full Name:</span>
                        <span className="profile__value">Satya Chandra</span>
                    </div>
                    <div>
                        <span className="profile__title">Email:</span>
                        <span className="profile__value">satyachandra@gmail.com</span>
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
                <button className="button--primary form__submit" type="submit">Logout</button>
            </div>
        </div>
    )
}