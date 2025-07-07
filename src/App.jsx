import React from 'react'
import HomePage from './pages/HomePage'
import { Route } from 'react-router-dom/cjs/react-router-dom'
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import ShopPage from './pages/ShopPage'


function App() {

  return (
    <>
    <Switch>
     <Route path="/home">
      <HomePage/>
     </Route>
     <Route path='/shop'>
         <ShopPage/>
      </Route>
    </Switch>
    </>
    
  )
}

export default App
