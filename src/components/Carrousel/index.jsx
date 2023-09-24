import { useState } from 'react';
import arrow from '../../assets/arrow-carrousel.svg';
import './index.scss';

const Carrousel = ({ pictures }) => {
    const [pictureIndex, setPictureIndex] = useState(0);

    const changePicture = (isPrevious) => {
        const lastIndex = pictures.length-1
        let currentIndex = pictureIndex

        if(isPrevious === true) {
            currentIndex <= 0 ? currentIndex = lastIndex : currentIndex--
        } else {
            currentIndex >= lastIndex ? currentIndex = 0 : currentIndex++
        }

        setPictureIndex(currentIndex)
    }

    return (
        <div className="kasa-carrousel">
            <img className="kasa-carrousel__picture" src={pictures[pictureIndex]} alt={pictureIndex+1} />
            <div className="kasa-carrousel__arrows">
                {pictures.length > 1 && <img className="kasa-carrousel__arrow-left" src={arrow} alt="Précédent" onClick={() => changePicture(true)} />}                 
                <div className="kasa-carrousel__index">{`${pictureIndex+1}/${pictures.length}`}</div>
                {pictures.length > 1 && <img className="kasa-carrousel__arrow-right" src={arrow} alt="Suivant" onClick={() => changePicture(false)} />}                 
            </div>
        </div>
    );
}

export default Carrousel;