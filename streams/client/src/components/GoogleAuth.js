import React, { Component } from 'react'

export default class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '904509376371-ubrcc1idmfvj6934bqo3semoitsbtjfn.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return (
      <div>
        GoogleAuth
      </div>
    )
  }
}
