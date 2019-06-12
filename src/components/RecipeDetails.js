import React, { Component } from 'react'
import {recipe} from '../tempDetails'

export default class RecipeDetails extends Component {
    constructor(props){
        super(props)

        this.state ={
            recipe:{},
            url: `https://www.food2fork.com/api/get?key=4d39ee35f73e035b1879339d3d68fa59&rId=${this.props.id}`

        }
    }
    
    render() {
        return (
            <div>
                <React.Fragment>
                    <h1>Hello From Details</h1>
                </React.Fragment>
            </div>
        )
    }
}
