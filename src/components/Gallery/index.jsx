import Thumb from '../Thumb'
import './index.scss';
import logements from '../../datas/logements.json'

const Gallery = () => {
    return (
        <div className="kasa-gallery">
            {logements.map((logement) => {
                return <Thumb key={logement.id} logementTitle={logement.title} logementCover={logement.cover} />
            })}
        </div>
    );
}

export default Gallery;