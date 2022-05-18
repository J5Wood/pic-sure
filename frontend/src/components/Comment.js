import React from "react";
import { NavLink } from "react-router-dom";

export const Comment = (props) => {
  return (
    <li>
      <NavLink
        className="comment-name-link"
        to={"/users/" + props.comment.attributes.user}
        exact
      >
        <b>{props.comment.attributes.user}</b>
      </NavLink>{" "}
      - {props.comment.attributes.content}
    </li>
  );
};
