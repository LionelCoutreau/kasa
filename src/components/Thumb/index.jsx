import './index.scss';

const Thumb = ({logementTitle, logementCover}) => {
    return (
        <div className="kasa-thumb">
            <img src={logementCover} alt={logementTitle} />
            <h2>{logementTitle}</h2>
        </div>
    );
}

export default Thumb;