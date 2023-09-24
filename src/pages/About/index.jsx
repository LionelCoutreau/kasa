import Header from '../../components/Header'
import Section from '../../components/Section'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import aboutData from '../../datas/about.json'
import picture from '../../assets/bg_apropos.png'

import './index.scss';

const About = () => {
    return (
        <>
            <Header />
            <main className="kasa-about">
                <Section pageTitle='' pageBackground={picture} />
                <div className="kasa-accordions">
                    {aboutData.map((about) => {
                        return <Collapse key={about.id} collapseTitle={about.title}>
                            {about.description}
                        </Collapse>
                    })}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default About
