import logo from '../../assets/logo_white.svg';
import './index.scss';

const Footer = () => {
    return (
        <div className="kasa-footer">
            <img src={logo} className="kasa-footer__logo" alt="Kasa logo" />
            <div className="kasa-footer__description">© 2020 Kasa. All rights reserved</div>
        </div>
    );
}

export default Footer;