import * as React from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

interface LoginState {
  username: string;
  password: string;
  accessGranted: boolean;
}

interface LoginProps {
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      accessGranted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event: any) {
    event.preventDefault();
    // fetch('http://localhost:8081/login?username=' + this.state.username + '&password=' + this.state.password)
    //   .then(response => response.json())
    //   .then(data => this.setState({accessGranted: data}));
    fetch('http://localhost:8081/login?username=' + this.state.username + '&password=' + this.state.password)
    .then((response) => response.json())
    .then((responseJSON) => {      
      window.alert(responseJSON);
    });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              className="form-control" 
              name="username" 
              value={this.state.username} 
              onChange={this.handleChange} 
              // tslint:disable-next-line:jsx-alignment
              />
            <input 
              type="password" 
              className="form-control" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange} 
              // tslint:disable-next-line:jsx-alignment
              />      
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;