// Import images
import headerImage from '../../assets/headerImage.jpg';
import headerLogo from '../../assets/headerLogo.png';
import LogoEasyCook from '../../assets/LogoEasyCook.png';

// Import css
import './header.css';


const Header = () => (
    <header className="header">
        <a href="/" className="header__title">
            <img src={LogoEasyCook} className="header__EasyCook" alt=""/>
            <img src={headerLogo} className="header__logo" alt="Chef Gear Hat icon by Streamline"/>
        </a>
        <div className="header__main">
            <p className="header__tagline">
                Une application simple pour cuisiner avec ce qu'il y a dans le frigo.
            </p>
            <img src={headerImage} className="header__image" alt="" />
        </div>
    </header>
)

export default Header;
