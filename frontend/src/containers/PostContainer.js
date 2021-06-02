import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostContainer extends Component {

    componentDidMount() {
        fetch('http://localhost:3001/posts')
        .then(resp => resp.json())
        .then(jsonResp => this.props.populatePosts(jsonResp.data))
    }

    render() {
        return (
            <div>
                Post Container
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        populatePosts: posts => dispatch({ type: 'ADD_POSTS', payload: posts}) 
    }
}

export default connect(null,mapDispatchToProps)(PostContainer)
