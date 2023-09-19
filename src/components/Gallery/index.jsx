import Thumb from '../Thumb'
import { Link } from 'react-router-dom';
import './index.scss';
import logements from '../../datas/logements.json'

const Gallery = () => {
    return (
        <div className="kasa-gallery">
            {logements.map((logement) => {
                return (
                    <Link key={logement.id} to={`/housing/${logement.id}`}>
                        <Thumb logementTitle={logement.title} logementCover={logement.cover} />
                    </Link>
                );
            })}
        </div>
    );
}

export default Gallery;