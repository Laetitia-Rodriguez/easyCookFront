// Import css
import './footer.css';

const Footer = () => (
    <footer className="footer">
      <a className="footer__link" href="/mentions-légales">
          Mentions légales
      </a>
      <div className="footer__link__sign">
        <a className="footer__link" href="/connexion">
          Connexion
        </a>
        <a className="footer__link" href="/inscription">
            Inscription
        </a>
      </div>
      
      <a className="footer__link" href="/contact">
          Contact
      </a>
    </footer>
)

export default Footer;