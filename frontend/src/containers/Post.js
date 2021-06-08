import React, { Component } from 'react'
import { Photo } from '../components/Photo'
import { Content } from '../components/Content'
import { Redirect } from 'react-router';
// import { connect } from 'react-redux'

export default class Post extends Component {

    handleClick = () => {
        debugger
        return <Redirect to={"/posts/" + this.props.post.id} />
    }

    render() {
        return (
            <div onClick={this.handleClick} className="post-card">
                <Photo src={this.props.post.attributes.photo_url}/>
                <Content post={this.props.post} />
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         currentUser: state.userReducer.user
//     }
// }

// export default connect(mapStateToProps)(Post)