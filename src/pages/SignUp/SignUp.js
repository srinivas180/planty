import { NavLink } from "react-router-dom";

export function SignUp() {

    return (
        <div className="container column column--center">
            <form className="form column">
            <h2 className="form__heading">Sign Up</h2>
                <input className="form__input" type="text" placeholder="First Name" />
                <input className="form__input" type="text" placeholder="Last Name" />
                <input className="form__input" type="email" placeholder="Email" />
                <input className="form__input" type="password" placeholder="Password"/>
                <input className="form__input" type="password" placeholder="Password"/>
                <button className="button--primary form__submit" type="submit">
                    Create New Account
                </button>
            </form>
            <div>
                Already have account?
                <NavLink className="form__navlink" to="/login"> Login </NavLink>
            </div>
        </div>
    )
}