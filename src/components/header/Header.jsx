import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/user/UserActions';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as EmptyCart } from '../../assets/icons/empty-cart.svg';
import { ReactComponent as FullHeart } from '../../assets/icons/full-heart.svg';
import { ReactComponent as DarkMode } from '../../assets/icons/day-and-night.svg';
import './Header.css';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bgColor: '#fffffa'
        }
    };

    darkMode = (e) => {
        const app = document.querySelector(".app");
        if(this.state.bgColor === '#fffffa'){
            this.setState({bgColor: '#b9d2d2'})
            app.style.backgroundColor = '#b9d2d2';
        } else if(this.state.bgColor === '#b9d2d2'){
            this.setState({bgColor: '#fffffa'})
            app.style.backgroundColor = '#fffffa';
        }
    };

    render(){
        return(
            <header>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <Link to="/" className="d-flex align-items-center" style={{marginLeft: '5%', marginTop: '1%'}}>
                        <img src={Logo} alt="Women's Fashion Shop" className="logo"/>
                        <p className="womens-fashion-shop">Women's Fashion Shop</p>
                    </Link>
                    <div className="d-flex align-items-center" style={{marginRight: '5%'}}>
                        <DarkMode onClick={this.darkMode} className="dark-mode" />

                        { 
                            this.props.user
                            ? 
                            <div className="header-icons d-flex flex-row align-items-center">  
                                <p className="hi-user">Hi, {this.props.user.displayName}!</p>
                                <div>
                                    <Link to="/favorites">
                                        <FullHeart className="favorites" />
                                    </Link>
                                </div>
                                    <Link to="/cart" className="d-flex" style={{marginRight: '20px'}}>
                                        <EmptyCart className="shopping-cart"/>
                                        <p className="number-of-products">{ this.props.numberOfProducts }</p>
                                </Link>
                                
                                <p className="logout-btn" onClick={() => this.props.signOut()}>Log out</p>
                            </div>
                            : 
                            <div className="header-icons d-flex flex-row align-items-center">
                                <Link to="/login" className="login-btn">
                                    <p className="login-p">Log in</p>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </header>
        );
    };
};

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);