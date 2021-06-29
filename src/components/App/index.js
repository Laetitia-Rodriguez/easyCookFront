import headerImage from '../../assets/headerImage.jpg';
import headerLogo from '../../assets/headerLogo.png';
import '../../components/App/App.css';

const App = () => (
  <div className="App">
    <header className="header">
      <div className="header__title">
        <h1 className="header__h1">EasyCook</h1>
        <img src={headerLogo} className="header__logo" alt="Chef Gear Hat icon by Streamline"/>
      </div>
      <div className="header__main">
        <p className="header__tagline">
          Une application simple pour cuisiner avec ce qu'il y a dans le frigo.
        </p>
        <img src={headerImage} className="header__image" alt="" />
      </div>
     
    </header>
    <main className="main">
    </main>
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
  </div>
);

export default App;
