import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class Googleauth extends Component {
  
    responseGoogle = (response)=> {
        console.log(response)
        console.log(response.profileObj)
    }


  render() {
    return (
      <div>
        <GoogleLogin
        clientId='675926532422-bsaf7oob5h9tqld8pld8a413ji1a7aqo.apps.googleusercontent.com'
        buttonText='Sign in with Google'
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}


        />
      </div>
    );
  }
}

export default Googleauth;
