import React,{Component} from "react";
import { _signUp, _login } from "../../services/AuthService"


class Login extends Component {

    constructor() {
        super();
    
        this.state = {
      
          logged_in: false
        }
    
        
      }
    
      
    
      getToken = () => {
        return localStorage.getItem('token');
      }
    
      deletePet = (event) => {
    
        //in button below add a data attribute with the pet's id
    
       
    
       
      }
    
      createPet = (event) => {
        event.preventDefault();
    
       
      }
    
      updatePet = (event) => {
        event.preventDefault();
    
        
      }
    
      editPet = (event) => {
        event.preventDefault();
    
    
    
      }
    
      hideEditForm = (event) => {
        event.preventDefault();
    
        this.setState({edit_id : ""})
      }
    
      signUp = (event) => {
        event.preventDefault();
    
        let inputs = event.target.children;
    
        let username = inputs[0].value;
        let password = inputs[1].value;
        let passwordConf = inputs[2].value;
    
        if (password == passwordConf){
    
          return _signUp(username, password).then(res => {
            console.log(res);
            alert(res.message)
          });
    
        }else{
          alert('your password and password confirmation have to match!')
        }
    
      }
    
      login = (event) => {
        event.preventDefault();
    
        let inputs = event.target.children;
    
        let username = inputs[0].value;
        let password = inputs[1].value;
    
        return _login(username, password).then(res => {
          if (res.token){
            this.setState({logged_in: true}, function(){
              localStorage.setItem('token', res.token);
            });
          }else{
    
            console.log(res);
            alert('you were not logged in')
          }
        });
      }
    
      logout = (event) => {
        event.preventDefault();
        
        this.setState({logged_in: false}, function(){
          localStorage.removeItem('token');
        });
      }
    


render(){ 
    return (
<div className="App">
        <header>
       
          <h1>{ this.state.name }</h1>

          {!this.state.logged_in && 
          
          <div>
            <h2>Sign Up</h2>

            <form id="signUpForm" onSubmit={this.signUp}>
              <input type="text" name="username" placeholder="put in a username" />
              <input type="password" name="password" placeholder="put in a password" />
              <input type="password" name="password" placeholder="confirm your password" />

              <button>Sign Up</button>
            </form>

            <h2>Log In</h2>

            <form id="logInForm" onSubmit={this.login}>
              <input type="text" name="username" placeholder="put in a username" />
              <input type="password" name="password" placeholder="put in a password" />

              <button>Log In</button>
            </form>

            <br /><br /><br />
          </div>}

          {this.state.logged_in && 
          
          <div>
            <h2>Sign Out</h2>

            <form id="logOutForm" onSubmit={this.logout}>
              <button>Log Out</button>
            </form>

            <br /><br /><br />
          </div>
        }

          
</header>
</div>
    )}

    }

    


export default Login;