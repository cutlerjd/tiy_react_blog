import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">It's a blog site, yo</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" activeClassName="active" to="/">All Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/create">Create Post</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Iron Yard Weekly Assignment
              </span>
                </div>
            </nav>
        )
    }
}

export default NavBar