import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Siteheader from './components/header';
import Search from './components/search';

class App extends Component {
   state = {
   	 activeSearch: ""
   }

  setActiveSearch = searchObj => {
    console.log(searchObj)
    this.setState({
      activeSearch: "Bob"
    });
    console.log(this.state.activeSearch);
  };

  render() {
    return (
    	<div>
	    	<Siteheader />
	    	<Search 
          setActiveSearch={this.setActiveSearch}
        />
    	</div>
    );
  }
}

export default App;
