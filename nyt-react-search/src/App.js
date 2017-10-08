import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Siteheader from './components/header';
import Search from './components/search';
import Results from './components/results';

class App extends Component {
   state = {
   	 activeSearch: ""
   }

  setActiveSearch = searchObj => {
    console.log(searchObj)
    this.setState({
      activeSearch: searchObj
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
        <Results 
          activeSearch={this.state.activeSearch}
        />
    	</div>
    );
  }
}

export default App;
