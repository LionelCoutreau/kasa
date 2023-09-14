import Header from '../../components/Header'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import Footer from '../../components/Footer'
import './index.scss';

const Homepage = () => {
    return (
        <>
            <Header />
            <main className="kasa-accueil">
                <Section pageName='accueil' />
                <Gallery />
            </main>
            <Footer />
        </>
    )
}

export default Homepage
