import * as React from 'react';
// import UserList from './UserList';
// import { BrowserRouter as Route , Switch , Router } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  category: string;
}

interface BoodschappenProps {
}

interface BoodschappenState {
  products: Array<Product>;
  isLoading: boolean;
  productname: string;
  productcategory: string;
  deleteproductid: string;
}

class Boodschappen extends React.Component<BoodschappenProps, BoodschappenState> {

  constructor(props: BoodschappenProps) {
    super(props);

    this.state = {
      products: [],
      isLoading: false,
      productname: '',
      productcategory: '',
      deleteproductid: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: any) {
    event.preventDefault();    
    var data = {name: this.state.productname, category: this.state.productcategory};
    window.location.reload();
    fetch('http://localhost:8081/products', {
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
    fetch('http://localhost:8081/products?id=' + event.target.id , {      
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

    fetch('http://localhost:8081/products', {method: 'GET'})
      .then(response => response.json())
      .then(data => this.setState({products: data, isLoading: false}));
  }

  render() {
    const {products, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div>
          <div className="row">
            <div className="col-sm-4">
              <h3>Naam</h3>
            </div>
            <div className="col-sm-4">
              <h3>Categorie</h3>
            </div>
          </div>
          {products.map((product: Product) =>
            <div key={product.id} className="row space">
              <div className="col-sm-4">{product.name}</div>
              <div className="col-sm-4">{product.category}</div>
              <div className="col-sm-4">
                <button className="btn btn-dark" onClick={this.handleDelete} id={product.id}>x</button>
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
                name="productname" 
                placeholder="Naam nieuw product"
                value={this.state.productname} 
                onChange={this.handleChange} 
                // tslint:disable-next-line:jsx-alignment
                />
              <input 
                type="text" 
                className="form-control" 
                name="productcategory" 
                placeholder="Category nieuw product"
                value={this.state.productcategory} 
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

export default Boodschappen;