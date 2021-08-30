import React from 'react'

export const Comment = props => {
    return (
        <li><b>{props.comment.attributes.user}</b> - {props.comment.attributes.content}</li>
    )
}