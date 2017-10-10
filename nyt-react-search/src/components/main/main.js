import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Search from '../search'
import Results from '../results'
//import SavedArticles from '../saved-articles'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' />
      <Route path='/results' component={Results}/>
    </Switch>
  </main>
)

export default Main