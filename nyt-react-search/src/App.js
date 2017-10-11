import React, { Component } from 'react';
import Siteheader from './components/header';
import Search from './components/search';
import Main from './components/main';

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
        <Main />
    	</div>
    );
  }
}

export default App;
