import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/PostActions'

class PostContainer extends Component {

    componentDidMount() {
        debugger
        this.props.fetchPost(this.props.match.url.split("/")[2])
    }

    render() {
        return (
            <div>
                IM A POST CONTAINER
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id))
    }
}

export default connect(null, mapDispatchToProps)(PostContainer)