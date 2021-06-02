import './App.css';
import { Component } from 'react'
import PostContainer from './containers/PostContainer';

const handleSubmit = e => {
  e.preventDefault()
  debugger

}


class App extends Component {

  state = {
    file: ''
  }

  handleChange = e => {
    console.log(e.target)

    debugger
  }

  render() {
    return (
      <div className="App">
        Hello
        <form onSubmit={handleSubmit} >
        <input onChange={event => this.handleChange(event)} type="file" name="image" accept="image/*" />
        <input type='submit'></input>
        </form>
        <br/>
        <br/>
        <PostContainer />
      </div>
    );
  }
}

export default App;
