import './index.scss';

const Host = ({ hostName, hostPicture }) => {
    return (
        <div className="kasa-host">
            <div className="kasa-host__name">{hostName}</div>
            <img className="kasa-host__picture" src={hostPicture} alt={hostName} />
        </div>
    );
};

export default Host;