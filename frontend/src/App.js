import './App.css';
import { Component } from 'react'
import PostContainer from './containers/PostContainer';
import NavHeader from './containers/NavHeader';
import { connect } from 'react-redux'
import { fetchLoggedInUser } from './actions/UserActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchLoggedInUser()
  }

  render() {
    return (
      <div className="App">
        <NavHeader />
        <br/>
        <br/>
        <PostContainer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser())
  }
}
export default connect(null, mapDispatchToProps)(App);
