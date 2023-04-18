import React, { Component } from 'react'
import './Welcome.css'

class Welcome extends Component {
    render() {
        const { name, children } = this.props

        return (
            <>
                <h1 className='title-welcome'>Welcome to {name}</h1>
                <p>{children}</p>
            </>
        )
    }
}

export default Welcome