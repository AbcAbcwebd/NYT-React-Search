import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Siteheader from './components/header';
import Search from './components/search';

class App extends Component {
  render() {
    return (
    	<div>
	    	<Siteheader />
	    	<Search />
    	</div>
    );
  }
}

export default App;
