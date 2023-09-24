import './index.scss';

const Section = ({pageTitle, pageBackground}) => {
    return (
        <div className={`kasa-section`}>
            <img className="kasa-section__background" src={pageBackground} alt={pageTitle} />
            {pageTitle && <h1>{pageTitle}</h1>}
        </div>
    )
}

export default Section;