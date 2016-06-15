import React, { Component } from 'react';

//this is a higher order component
//the argument to the function is the component you wanna wrap w the higher order component
export default function(ComposedComponent){
  
  class Authentication extends Component{
    render(){
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentication; 
}
