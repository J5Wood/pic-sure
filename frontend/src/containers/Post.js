import React, { Component } from 'react'
import { Photo } from '../components/Photo'
import { Content } from '../components/Content'

export default class Post extends Component {
    render() {
        console.log(this.props.post)
        return (
            <div>
                <Photo src={this.props.post.attributes.photo_url}/>
                <Content post={this.props.post} />
            </div>
        )
    }
}
