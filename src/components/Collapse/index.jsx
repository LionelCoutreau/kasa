import { useState } from 'react';
import './index.scss';

const Collapse = ({ collapseTitle, children }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="kasa-accordion">
            <div className={`kasa-accordion__title ${isOpen ? "kasa-accordion--open" : ""}`} onClick={() => setOpen(!isOpen)}>
                {collapseTitle}
            </div>
            <div className={`kasa-accordion__item ${!isOpen ? "kasa-accordion--collapsed" : ""}`}>
                <div className="kasa-accordion__content">{children}</div>
            </div>
        </div>
    );
};

export default Collapse;