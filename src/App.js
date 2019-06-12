import React from 'react';
import './App.css';
import {recipes} from './tempList'
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList';

class App extends React.Component {

  state = {
    recipes: recipes,
    url: 'https://www.food2fork.com/api/search?key=4d39ee35f73e035b1879339d3d68fa59',
    details_id:35382
  };

  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes: jsonData.recipes
  //     })
  //    }catch (error) {
  //     console.log(error);
  //   }
  //  }

  //  componentDidMount(){
  //    this.getRecipes()
  //  }
  

  render() {
    // console.log(this.state.recipes)
  return (
          <React.Fragment>
              {/* <RecipeList recipes={this.state.recipes}/> */}
              <RecipeDetails id={this.state.details_id}/>
          </React.Fragment>
  );
  }
}

export default App;
