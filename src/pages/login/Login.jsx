import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { googleLoginUser, facebookLoginUser } from '../../redux/user/UserActions';
import Logo from '../../assets/images/logo.png';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import './Login.css';

class Login extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    };

    render() {
        return(
            <div className="login-page">
                <Link to='/' className="d-flex flex-column align-items-center" >
                    <img src={Logo} alt="logo" className="login-page-logo"/>
                    <h4>Women's Fashion Shop</h4>
                    <h5>Back to home</h5>
                </Link>

                <h1 className="h3 mt-4">Login</h1>

                <button
                    className="login-button btn btn-outline-success d-flex align-items-center"
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap">Log in with Google</span>
                </button>

                <button
                    className="login-button btn btn-outline-info d-flex align-items-center"
                    onClick={() => this.props.signInWithFacebook()}
                >
                    <Facebook className="w-50 mr-3"/>
                    <span className="text-nowrap">Login with Facebook</span>
                </button>
             
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        user: state.user.data
    };
};

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: () => dispatch(googleLoginUser()),
        signInWithFacebook: () => dispatch(facebookLoginUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);