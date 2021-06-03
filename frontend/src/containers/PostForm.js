import React, { Component } from 'react'

export default class PostForm extends Component {

    state = {
        content: '',
        file: []
      }
    
    handleFile = e => {
        this.setState({
            ...this.state, file: e.target.files[0]
        })
    }

    handleContent = e => {
        this.setState({
            ...this.state, content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        debugger
    }
  

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleFile} type="file" name="image" accept="image/*" />
                <input type='text' value={this.state.content} onChange={this.handleContent}/>
                <input type='submit'></input>
            </form>
        )
    }
}
