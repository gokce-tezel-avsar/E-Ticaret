import React from 'react'
import HomePage from './pages/HomePage'
import { Route } from 'react-router-dom/cjs/react-router-dom'
import { Redirect, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'


function App() {

  return (
    <>
          <Switch>
            <Route exact path="/">
                <Redirect to="/home"/>
             </Route>
                    <Route exact path='/home'
                     >
                      <HomePage/>
                    </Route>
                   <Route exact path='/shop'>
                      <ShopPage/>
                    </Route>
                    <Route exact path='/productDetail'>
                      <ProductDetailPage/>
                    </Route>
          </Switch>
    </>
    
  )
}

export default App
