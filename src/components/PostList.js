import React, { Component } from 'react'
import PostListItem from './PostListItem'

class PostList extends Component {
    state = {
        posts:[]
    }
    componentWillMount(){
        fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/")
        .then((response) => response.json())
        .then((posts) => this.setState({posts: posts}))
    }
    render() {
        return (
                <div>
                <h2>PostList</h2>	
                {this.state.posts.map(function(post) {
                    return (<div key={post._id}>
                    <PostListItem post={post}/>
                    </div>)
                })}
                </div>
                
                )
    }
}

export default PostList