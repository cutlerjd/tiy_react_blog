import React, { Component } from 'react'

class ShowPost extends Component {
    constructor(props){
        super(props)
        this.state={
            post:{
                _id:'',
                title:'',
                blog:'',
                userName:''
            }
        }
    }
    componentWillMount(){
        fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/"+this.props.match.params.id)
        .then((response) => response.json())
        .then((post) => this.setState({post:post}))
    }
    render() {
        return (
                <div>
                <h2>Title: {this.state.post.title}</h2>
                <h4>Author: {this.state.post.userName}</h4>
                <p>{this.state.post.blog}</p>
                </div>
                	
                )
    }
}

export default ShowPost