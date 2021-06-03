import React from 'react'

export const Content = props => {
    return (
        <div>
            <h4>- {props.post.attributes.user}</h4>
            <p>{props.post.attributes.content}</p>
        </div>
    )
}
