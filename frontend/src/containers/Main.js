import { Component } from 'react'
import PostsContainer from './PostsContainer';
import { Redirect } from 'react-router';
import { connect } from 'react-redux'
import PostForm from './PostForm'
import Button from 'react-bootstrap/Button'

class Main extends Component {

    state = {
        showForm: false
    }

    togglePostForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    renderPostForm = () => {
        if (this.state.showForm) {
            return (
                <div>
                    <Button className="danger-button" onClick={this.togglePostForm}>X</Button>
                    <PostForm closeForm={this.togglePostForm}/>
                </div>
            )
        } else {
            return <Button className="form-button" onClick={this.togglePostForm}>New Post</Button>
        }
    }

  render() {
    if (!this.props.currentUser) {
        return <Redirect to="/"/>
    }
    return (
        <div>
            <br/>
            {this.renderPostForm()}
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