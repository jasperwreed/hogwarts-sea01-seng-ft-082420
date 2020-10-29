import React, { Component } from 'react'
import Hog from './Hog'


export default class HogContainer extends Component {

    render() {
        return (
            <div className='container'>
                {this.props.hogs.map( hog => <Hog hog={hog} />)}
            </div>
        )
    }
}