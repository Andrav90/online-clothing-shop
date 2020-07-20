import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.css';

function goToTop(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
}

function Layout(props) {
    return(
        <div className="layout">
            <Header/>
                <hr className="hrs" />
                <button className="go-top-btn" onClick={goToTop}>
                    <i className="fa fa-angle-double-up"/>
                </button>
                { props.children }
                <hr className="hrs" />
            <Footer/>
        </div>
    );
};

export default Layout;