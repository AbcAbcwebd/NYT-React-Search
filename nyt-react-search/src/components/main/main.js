import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Search from '../search'
import Results from '../results'
//import SavedArticles from '../saved-articles'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Search}/>
      <Route path='/results' component={Results}/>
//      <Route path='/saved_articles' component={SavedArticles}/>
    </Switch>
  </main>
)

export default Main