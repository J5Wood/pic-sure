import { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";

class UserPage extends Component {
  renderPosts = () => {
    return this.props.posts.map((post) => <Post key={post.id} post={post} />);
  };

  render() {
    return (
      <div>
        <button
          onClick={() => window.history.back()}
          type="button"
          className="back-button"
        >
          BACK
        </button>

        <div className="post-container">{this.renderPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.postReducer.posts
      .filter(
        (post) => post.attributes.user === ownProps.match.url.split("/")[2]
      )
      .reverse(),
  };
};

export default connect(mapStateToProps)(UserPage);
