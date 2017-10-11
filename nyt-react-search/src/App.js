import React, { Component } from 'react';
import Siteheader from './components/header';
import Search from './components/search';
import Main from './components/main';
import { subscribeToTimer } from './api';

class App extends Component {
   state = {
   	 activeSearch: "",
     timestamp: 'no timestamp yet'
   }

  setActiveSearch = searchObj => {
    console.log(searchObj)
    this.setState({
      activeSearch: searchObj
    });
    console.log(this.state.activeSearch);
  };

  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
}

  render() {
    return (
    	<div>
	    	<Siteheader />
	    	<Search 
          setActiveSearch={this.setActiveSearch}
        />
        <Main />
        <p className="App-intro">
          This is the timer value: {this.state.timestamp}
        </p>
    	</div>
    );
  }
}

export default App;
