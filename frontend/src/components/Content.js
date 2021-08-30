import React from 'react'
import { NavLink } from 'react-router-dom'

const renderHeart = props => {
    if (props.post.attributes.likes.includes(props.userId)) {
        return (
            <b>
                {String.fromCharCode(9829)} - {props.post.attributes.likes.length} Likes
            </b>
        )
    } else {
        return (
            <b>
                {String.fromCharCode(9825)} - {props.post.attributes.likes.length} Likes
            </b>
        )
    }
}

export const Content = props => {
    return (
        <div className="post-content" >
            <br/>
            <NavLink to={"/users/" + props.post.attributes.user} exact><b className="post-name-link">{props.post.attributes.user}</b></NavLink> 
            - {props.post.attributes.content}
            <br/>
            <br/>
            <div className="likes" onClick={() => props.handleLike(props.post.id)}>
                {renderHeart(props)}
            </div>
        </div>
    )
}