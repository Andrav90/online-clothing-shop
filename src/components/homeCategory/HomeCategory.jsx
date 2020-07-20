import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css';

function HomeCategory(props) {
    const {route, name, image} = props;

    return(
        <div className="home-category col-12 col-md-6 my-3">
            <Link to={`/category/${route}`}>
                <h2 className="h4 mb-3"><strong>{name}</strong></h2>
                <div>
                    <img src={image} alt={name} className="home-category-imgs" />
                </div>
            </Link>
        </div>
    );
};

export default HomeCategory;