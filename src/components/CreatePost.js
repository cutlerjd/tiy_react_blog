import React, { Component } from 'react'

class CreatePost extends Component {
    state = {
        userName:'',
        title:'',
        blog:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        let post = JSON.stringify({
            userName:this.state.userName,
            title:this.state.title,
            blog:this.state.blog
        })
        fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/",{
            method:"POST",
            body:post,
            headers:{
                'Accept': 'application.json',
                'Content-Type':'application/json'
            }
        })
        .then((res) => res.json() )
            .then((data)=>{this.props.history.push('/post/'+data._id ) })
    }
    render() {
        return (
                <div>
                <h2>CreatePost</h2>
                <form onSubmit={this.handleSubmit}>
                <h4>Title</h4><br/>
                <input type="text" value={this.state.title} onChange={this.handleChange} name="title"/>
                <h4>Author</h4><br/>
                <input type="text" value={this.state.userName} onChange={this.handleChange} name="userName"/>
                <h4>Blog Post</h4><br/>
                <textarea value={this.state.blog} onChange={this.handleChange} name="blog"/><br/>
                <button type="submit">Submit</button>
                </form>
                </div>
                	
                )
    }
}

export default CreatePost