import React, { Component } from 'react'
import { Photo } from '../components/Photo'

export default class Post extends Component {
    render() {
        console.log(this.props.post)
        return (
            <div>
                <Photo src={this.props.post.attributes.photo_url}/>
                Post
            </div>
        )
    }
}
