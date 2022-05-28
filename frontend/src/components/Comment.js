import React from "react";
import { NavLink } from "react-router-dom";

export const Comment = ({ comment }) => {
  return (
    <li>
      <NavLink
        className="comment-name-link"
        to={"/users/" + comment.attributes.user}
        exact
      >
        <b>{comment.attributes.user}</b>
      </NavLink>{" "}
      - {comment.attributes.content}
    </li>
  );
};
