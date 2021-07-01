// Local import
import './signIn.css';

const SignIn = () => (
    <div className="sign-in">
        <h1 className="sign-in__h1">Connexion</h1>
        <div className="sign-in__form-container">
            <form className="sign-in__form">
                <label className="sign-in__form-label">Email</label>
                <input className="sign-in__form-input"type="email"></input>
                <label className="sign-in__form-label">Mot de passe</label>
                <input className="sign-in__form-input"type="password"></input>
                <input type="submit" value="Se connecter"/>
            </form>
        </div>
    </div>
)

export default SignIn;