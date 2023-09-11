import { NavLink } from 'react-router-dom';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './index.scss';

const Error404 = () => {
    return (
        <>
            <Header />
            <main className="kasa-404">
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas</p>
                <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
            </main>
            <Footer />
        </>
    )
}

export default Error404