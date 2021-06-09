import { Component } from 'react'
import PostsContainer from './PostsContainer';
// import NavHeader from './NavHeader';
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
// import { connect } from 'react-redux'
// import { fetchLoggedInUser } from '../actions/UserActions'

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
  