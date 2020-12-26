import React from 'react';
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';
import {auth ,signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      })
    } catch (error) {
      console.log(error);
    }

    this.setState({
      email: "",
      password:""
    });
  }

  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({[name]: value});
  }

  handleClick = (event) => {
    event.preventDefault();
    signInWithGoogle();
  }

  render() {

    return(
      <div class="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} required
          label="Email"
          handleChange={this.handleChange}
          />
          <FormInput type="password" name="password" value={this.state.password} required
          label="Password"
          handleChange ={this.handleChange}           
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={this.handleClick} isGoogleSignIn>{" "}Sign in with Google{" "}</CustomButton>
          </div>
        </form>
        

      </div>
    );
  }
}

export {SignIn};