import { NavLink } from 'react-router-dom';
import './index.scss';

const Nav = () => {
    return (
        <nav className="kasa-nav">
            <NavLink to='/'>Accueil</NavLink>
            <NavLink to='/about'>A Propos</NavLink>
        </nav>
    );
}

export default Nav;