import React, { Component } from 'react'

export default class Filter extends Component {

    handleClick = () => {
        this.props.onFilterHogs()
    }

    render() {
        return (
            <div className='form'>
                <h2>Greased</h2>
                <div className='field'>
                    <button onClick={this.handleClick}>Greased / Not Greased</button>
                </div>
            </div>
        )
    }
}