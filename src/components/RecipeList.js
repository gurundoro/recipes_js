import React, { Component } from 'react'
import Recipe from './Recipes'
import RecipeSearch from './RecipeSearch'

export default class RecipeList extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                   <h1> Hello From Recipe List </h1> 
                   <RecipeSearch/>
                   <Recipe/>
                </React.Fragment>
            </div>
        )
    }
}
