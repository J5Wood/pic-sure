import React, { Component } from 'react'
import { Photo } from '../components/Photo'
import { Content } from '../components/Content'
import { NavLink } from 'react-router-dom';

export default class Post extends Component {

    render() {
        return (
            <NavLink to={"/posts/" + this.props.post.id} exact>
                <div className="post-card">
                    <Photo src={this.props.post.attributes.photo_url}/>
                    <Content post={this.props.post} />
                </div>
            </NavLink>
        )
    }
}