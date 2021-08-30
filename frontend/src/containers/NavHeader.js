import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/UserActions'

class NavHeader extends Component {

    logout = () => this.props.logout()

    renderDisplay = () => {
        if (!!this.props.user) {
            return (
                <div className="d-flex flex-fill justify-content-between">
                    <NavLink to={"/users/" + this.props.user} exact>
                        <Badge id="user-badge" className="d-inline-flex align-items-center" pill>{this.props.user}</Badge>
                    </NavLink>
                    <Navbar.Brand href="/">PIC-SURE</Navbar.Brand>
                    <Button className="danger-button" onClick={this.logout}>LOGOUT</Button>
                </div>
            )
        } else {
            return (
                <div className="d-flex flex-fill justify-content-center">
                    <Navbar.Brand href="/">PIC-SURE</Navbar.Brand>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavHeader)