import React from 'react';
import { Link } from 'react-router-dom';

const Lien = ({href, txt, customClass}) => {
    return(
        <Link to={href} className={customClass}>{txt}</Link>
    )
}

export default Lien;