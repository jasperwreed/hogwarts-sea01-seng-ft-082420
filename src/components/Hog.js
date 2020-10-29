import React, { Component } from 'react'


export default class Hog extends Component {

    //  //how can we dynamically generate the filename?
    // return <img src={pigImage} />
    buildImage = () => {
        let hogName = this.props.hog.name 
        let hogImageName = hogName.split(' ').join('_').toLowerCase()
        let pigImage = require(`../hog-imgs/${hogImageName}.jpg`)

        return <img src={pigImage} />
    }
    
    // handleClick = () => {
    //     return false
    // }

    render() {

        

        const {name, specialty, greased, weight, highestMedalAchieved} = this.props.hog

        return (
            <div className='card'>
                <div className='header'>
                    <h1>{name}</h1>
                </div>
                <div className='image'>{this.buildImage()}</div>
                <div className='hog-info'>
                    <h2>{weight}</h2>
                    <h3>{specialty}</h3>
                    <h5>{highestMedalAchieved}</h5>
                </div>
            
            </div>
        )
    }
}