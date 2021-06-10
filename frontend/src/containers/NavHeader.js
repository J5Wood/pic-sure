import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import Badge from 'react-bootstrap/Badge'
import { connect } from 'react-redux'
import { logout } from '../actions/UserActions'

class NavHeader extends Component {

    state = {
        showForm: false,
        showSignup: false,
        showLogin: false
    }

    toggleLoginForm = () => {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

    renderLoginForm = () => {
        if (this.state.showLogin) {
            return (
                <div> 
                    <LoginForm closeForm={this.closeForm}/> - OR - <SignupForm closeForm={this.closeForm}/>
                </div>
            )
        }
    }

    closeForm = () => {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

    logout = () => {
        this.props.logout(this.props.user)
    }

    renderDisplay = () => {
        if (!!this.props.currentUser) {
            return (
                <div className="d-flex flex-fill justify-content-between">
                    <Badge id="user-badge" className="d-inline-flex align-items-center" pill>{this.props.currentUser}</Badge>
                    <Navbar.Brand href="/">PIC-SURE</Navbar.Brand>
                    <Button id="logout-button" onClick={this.logout}>LOGOUT</Button>
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-fill justify-content-center">
                    <Navbar.Brand href="/">PIC-SURE</Navbar.Brand>
                    <br/>
                    <Button id="login-button" onClick={this.toggleLoginForm}>LOG-IN / SIGNUP</Button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Navbar className="navbar" >
                    {this.renderDisplay()}
                </Navbar>
                {this.renderLoginForm()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: user => dispatch(logout(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)