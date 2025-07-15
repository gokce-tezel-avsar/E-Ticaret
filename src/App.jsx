import React from 'react'
import HomePage from './pages/HomePage'
import { Route } from 'react-router-dom/cjs/react-router-dom'
import { Redirect, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'


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
                    <Route exact path='/contact'>
                      <ContactPage/>
                    </Route>
                    <Route exact path='/team'>
                      <TeamPage/>
                    </Route>
          </Switch>
    </>
    
  )
}

export default App
