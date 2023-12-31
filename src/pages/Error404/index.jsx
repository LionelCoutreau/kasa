import { Link } from 'react-router-dom';
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
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </main>
            <Footer />
        </>
    )
}

export default Error404