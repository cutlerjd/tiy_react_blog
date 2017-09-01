import React, { Component } from 'react'
import NavBar from './NavBar'

class BaseLayout extends Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                {this.props.children}
                <nav className="navbar fixed-bottom navbar-light bg-light">
                    <a className="navbar-brand" href="http://jasecutler.com">Jase Cutler</a>
                </nav>
            </div>

        )
    }
}

export default BaseLayout