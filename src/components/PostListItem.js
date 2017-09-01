import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class PostListItem extends Component {
    render() {
        return (
                <div>
                    <p><Link to={"/post/"+this.props.post._id}>{this.props.post.title}</Link></p>
                </div>	
                )
    }
}

export default PostListItem