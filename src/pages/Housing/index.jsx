import Header from '../../components/Header'
import Carrousel from '../../components/Carrousel'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Footer from '../../components/Footer'
import logements from '../../datas/logements.json'
import { useParams } from 'react-router-dom'
import './index.scss';

const Housing = () => {
    const routeParams = useParams();
    const logementData = logements.filter(logement => logement.id === routeParams.logementId)[0];

    return (
        <>
            <Header />
            <main className="kasa-housing">
                <Carrousel pictures={logementData.pictures} />
                <div className="kasa-housing__informations">
                    <div className="kasa-housing__logement">
                        <div className="kasa-housing__lieu">
                            <div className="kasa-housing__title">{logementData.title}</div>
                            <div className="kasa-housing__ville">{logementData.location}</div>
                            <div className="kasa-housing__tags">
                                {logementData.tags.map((tag, index) => {
                                    return <Tag key={`tag${index}`} tagTitle={tag} />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="kasa-housing__profile">
                        <Host hostName={logementData.host.name} hostPicture={logementData.host.picture} />
                        <Rating ratingNumber={logementData.rating} />
                    </div>
                </div>
                <div className="kasa-housing__specifications">
                    <Collapse collapseTitle="Description">
                        {logementData.description}
                    </Collapse>
                    <Collapse className="kasa-housing__equipments" collapseTitle="Equipements">
                        <ul>
                            {logementData.equipments.map((equipment, index) => {
                                return <li key={`equipment${index}`}>{equipment}</li>
                            })}
                        </ul>
                    </Collapse>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Housing
