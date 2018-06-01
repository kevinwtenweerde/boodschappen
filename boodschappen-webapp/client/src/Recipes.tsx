import * as React from 'react';
// import UserList from './UserList';
// import { BrowserRouter as Route , Switch , Router } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  category: string;
}

interface Recipe {
  id: string;
  name: string;
  category: string;
  products: Array<Product>;
}

interface RecipesProps {
}

interface RecipesState {
  recipes: Array<Recipe>;
  isLoading: boolean;
  newRecipeName: string;
  deleteRecipeId: string;
}

class Recipes extends React.Component<RecipesProps, RecipesState> {

  constructor(props: RecipesProps) {
    super(props);

    this.state = {
      recipes: [],
      isLoading: false,
      newRecipeName: '',
      deleteRecipeId: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any) {
    event.preventDefault();    
    var data = {name: this.state.newRecipeName};
    window.location.reload();
    fetch('http://localhost:8081/recipes', {
      body: JSON.stringify(data),
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',      
      headers: new Headers({
        'Content-Type': 'application/json'
      })      
    }
  );
  }

  handleDelete(event: any) {
    event.preventDefault();
    fetch('http://localhost:8081/recipes?id=' + event.target.id , {      
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',      
      headers: new Headers({
        'Content-Type': 'application/json'
      })      
    }
  );
    window.location.reload();
  }

  handleChange(event: any) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:8081/recipes', {method: 'GET'})
      .then(response => response.json())
      .then(data => this.setState({recipes: data, isLoading: false}));
  }

  render() {
    const {recipes, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div>
          <div className="row">
            <div className="col-sm-4">
              <h3>Recept</h3>
            </div>            
          </div>
          {recipes.map((recipe: Recipe) => 
            <div key={recipe.id} className="row space">
              <div className="col-sm-4">{recipe.name}</div>
              <div className="col-sm-4">
                {recipe.products.map((prod: Product) =>
                  <div key={prod.id} className="row">
                    <div className="col-sm-6">{prod.name}</div>
                    <div className="col-sm-6">{prod.category}</div>
                  </div>
                )}
              </div>
              <div className="col-sm-4">
                <button className="btn btn-dark" onClick={this.handleDelete} id={recipe.id}>x</button>
              </div>              
            </div>            
          )}
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <form className="form-signin" onSubmit={this.handleSubmit}>
              <input 
                type="text" 
                className="form-control" 
                name="newRecipeName" 
                placeholder="Naam nieuw recept"
                value={this.state.newRecipeName} 
                onChange={this.handleChange} 
                // tslint:disable-next-line:jsx-alignment
                />    
              <button className="btn btn-lg btn-primary btn-block" type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>      
    );
  }
}

export default Recipes;