import { Component } from 'react'
import PostsContainer from './PostsContainer';
import { Redirect } from 'react-router';
import { connect } from 'react-redux'

class Main extends Component {

  render() {
    if (!this.props.currentUser) {
        return <Redirect to="/"/>
    }
    return (
      <div>
        <br/>
        <br/>
        <PostsContainer />
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
      currentUser: state.userReducer.user
    }
  }
  
  export default connect(mapStateToProps)(Main);