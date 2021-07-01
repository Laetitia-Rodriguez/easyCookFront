// Local import
import './signUp.css';

const SignUp = () => (
    <div className="signUp">
        <h1 className="sign-up__h1">Formulaire d'inscription</h1>
        <div className="sign-up__form-container">
            <form className="sign-up__form">
                <label className="sign-up__form-label">Saisissez votre email</label>
                <input className="sign-up__form-input"type="email"></input>
                <label className="sign-up__form-label">Saisissez votre mot de passe</label>
                <input className="sign-up__form-input"type="password"></input>
                <label className="sign-up__form-label">Confirmer votre mot de passe</label>
                <input className="sign-up__form-input"type="password"></input>
                <hr/>
                <p>
                    FACULTATIF
                </p>
                <label className="sign-up__form-label">Choisir un avatar</label>
                <input className="sign-up__form-input" type="file"></input>
                <hr/>
                <div className="sign-up__form-validation">
                    <input type="submit" value="Annuler"/>
                    <input type="submit" value="Valider"/>
                </div>
            </form>
        </div>
    </div>
)

export default SignUp;