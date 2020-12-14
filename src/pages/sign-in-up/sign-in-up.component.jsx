import React from 'react';
import {SignIn} from '../../components/sign-in/sign-in.component';
import './sign-in-up.styles.scss';

const SignInUpPage = function() {

  return(
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  );
}

export {SignInUpPage};