// Import css
import './footer.css';

const Footer = () => (
    <footer className="footer">
      <a className="footer__link" href="#">
          Mentions légales
      </a>
      <div className="footer__link__sign">
        <a className="footer__link" href="#">
          Connexion
        </a>
        <a className="footer__link" href="#">
            Inscription
        </a>
      </div>
      
      <a className="footer__link" href="#">
          Contact
      </a>
    </footer>
)

export default Footer;