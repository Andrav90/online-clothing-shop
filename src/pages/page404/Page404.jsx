import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Error404 } from '../../assets/icons/404.svg';
import './Page404.css';

function Page404() {
    return(
        <div className="errorContainer">
            <Error404 className="errorImage" />
            <Link to="/" className="link">Back to home</Link>
        </div>
    );
};

export default Page404;