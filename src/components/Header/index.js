// Import images
import headerImage from '../../assets/headerImage.jpg';
import headerLogo from '../../assets/headerLogo.png';
import egg from '../../assets/egg.png';

// Import css
import './header.css';


const Header = () => (
    <header className="header">
        <div className="header__title">
        {/* TODO: Make EasyCook logo with title and eggs on a graphics software
            Like this : SEO problem with "EasyCook" word and css "homemade" */}
            <h1 className="header__h1_left">EasyC</h1>
            <img src={egg} className="header__egg" alt=""/>
            <img src={egg} className="header__egg" alt=""/>
            <h1 className="header__h1_right">k</h1>
            <a href="/">
                <img src={headerLogo} className="header__logo" alt="Chef Gear Hat icon by Streamline"/>
            </a>
        </div>
        <div className="header__main">
            <p className="header__tagline">
                Une application simple pour cuisiner avec ce qu'il y a dans le frigo.
            </p>
            <img src={headerImage} className="header__image" alt="" />
        </div>
    </header>
)

export default Header;
