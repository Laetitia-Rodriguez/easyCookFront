// Local import
import './contact.css';
import logoLinkedIn from '../../assets/linkedin-logo.png';

const Contact = () => (
    <div className="contact">
        <h1 className="contact__h1">Contact</h1>
        <p className="contact__presentation"> Bonjour,<br/>
            Je suis Laëtitia, développeuse fullstack.<br/><br />
            J'ai développé cette application pour mon usage personnel, mais si vous souhaitez l'utiliser, c'est avec plaisir!<br/><br/>
            Vous pouvez consulter mon profil et mes réalisations en suivant le lien ci-dessous.
        </p>
        <a className="link_linkedIn" href="https://www.linkedin.com/in/laetitia-rodriguez/ ">
            <img className="contact__logo_linkedIn" alt="" src={logoLinkedIn} />
        </a>
        <p>Vous pouvez aussi m'envoyer un message, je vous répondrai dans les meilleurs délais.</p>
        <div className="contact__form-container">
            <form className="contact__form" method="post" action="mail.php">
                <label>Votre email</label>
                <input type="email"></input>
                <label>Votre message</label>
                <textarea type="text" name="message"/>
                <label></label>
                <input type="submit" value="Envoyer"/>
            </form>
        </div>
    </div>
)

export default Contact;