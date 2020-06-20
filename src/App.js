import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Page404 from './pages/page404/Page404';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import Favourites from './pages/favourites/Favourites';
import Product from './pages/product/Product';
import TermsAndConditions from './pages/termsandconditions/TermsAndConditions';
import './utils/utility-classes.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    
    return(
      <div className="app">
        <Switch>
          <Route path='/login' component={Login}/>
          <Route
            exact path='/'
            render={(props) => <Home
              {...props}
            />}
          />
          <Route path='/about' component={About}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='/cart' component = {Cart}/>
          <Route path='/favourites' component = {Favourites}/>
          <Route path='/product/:productId' component = {Product}/>
          <Route path='/terms-and-conditions' component = {TermsAndConditions}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    );
  }
}


export default App;
