import './index.scss';
import starEmpty from '../../assets/rating-empty.svg';
import starFull from '../../assets/rating-full.svg';

const Rating = ({ ratingNumber }) => {
    const allStars = 5;
    let stars = [];

    for(let i = 0; i < ratingNumber; i++) {
        stars.push(starFull);
    }
    for(let i = 0; i < (allStars - ratingNumber); i++) {
        stars.push(starEmpty);
    }

    return (
        <div className="kasa-rating">
            {stars.map((star, index) => {
                return <img key={`star${index}`} src={star} alt={starFull ? "Etoile remplie" : "Etoile vide"} />
            })}
        </div>
    );
};

export default Rating;