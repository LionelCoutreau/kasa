import Header from './Header'
import Section from './Section'
import Gallery from './Gallery'
import Footer from './Footer'

import '../styles/App.scss';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Section pageName="accueil" />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
