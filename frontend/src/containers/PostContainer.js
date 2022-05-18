import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import CommentsContainer from "./CommentsContainer";
import { Redirect } from "react-router";

class PostContainer extends Component {
  renderPost = () => {
    if (
      !!this.props.post.id &&
      this.props.post.id === this.props.match.url.split("/")[2]
    ) {
      return (
        <div className="post-container">
          <Post key={this.props.post.id} post={this.props.post} />
          <CommentsContainer postId={this.props.post.id} />
        </div>
      );
    }
  };

  render() {
    if (!this.props.user) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <br />
        <button
          onClick={() => window.history.back()}
          type="button"
          className="back-button"
        >
          BACK
        </button>
        <br />
        {this.renderPost()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userReducer.user,
    post: state.postReducer.posts.filter(
      (post) => post.id === ownProps.match.url.split("/")[2]
    )[0],
  };
};

export default connect(mapStateToProps)(PostContainer);
