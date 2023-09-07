import '../styles/Section.scss';

const Section = ({pageName}) => {
    const pages = [
        {
            "name": "accueil",
            "title": "Chez vous, partout et ailleurs"
        },
        {
            "name": "apropos",
        }
    ]
    const actualPage = pages.filter(page => {
        return page.name === pageName
    })

    return (
        <div className={`kasa-section kasa-section--${actualPage[0].name}`}>
            {actualPage[0].title && <h1>{actualPage[0].title}</h1>}
        </div>
    );
}

export default Section;