import React, { Component } from 'react'
import NavHeader from './NavHeader'
import { Redirect } from 'react-router';
import { connect } from 'react-redux'

class Welcome extends Component {
    render() {
        if (!!this.props.currentUser) {
            return <Redirect to="/home"/>
        }
        return (
            <div>
                <NavHeader />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      currentUser: state.userReducer.user
    }
}

export default connect(mapStateToProps)(Welcome);