import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase';
import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  return (
    <div className="container-fluid d-flex justify-content-center">
            <div className="card bg-info text-center" style={{width: '25rem', marginTop: '10rem'}}>
                <div className="card-content">
                    <div className="card-header">
                        <h3>Login</h3>
                    </div>
                    <div className="card-body">
                        <form id="loginForm">
                            <div className="row">
                                <div className="col-12">
                                    <input type="text" name="userName" className="form-control" placeholder="Username" required/>
                                </div>
                                <div className="col-12 mt-3">
                                    <input type="password" name="userPassword" className="form-control" placeholder="Password" required/>
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <button type="submit" className="btn btn-primary login-btn">Login</button>
                                    <GoogleButton style ={{width:'250px', marginRight: '1rem', background:'danger'}} onClick={signIn}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login