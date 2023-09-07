import Nav from './Nav'
import logo from '../assets/logo.svg';

import '../styles/Header.scss';

const Header = () => {
    return (
        <header className="kasa-header">
            <img src={logo} className="kasa-header__logo" alt="Kasa logo" />
            <Nav />
        </header>
    );
}

export default Header;