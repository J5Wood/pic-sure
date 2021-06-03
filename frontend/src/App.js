import './App.css';
import { Component } from 'react'
import PostContainer from './containers/PostContainer';
import NavHeader from './containers/NavHeader';

class App extends Component {

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

export default App;
