import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./container/Header"
import './App.css';
import ProductListing from './container/ProductListing';
import ProductDetails from './container/ProductDetails';

const App=()=>{
  
  return(
  <div className='App'>
    <Router>
    <Header/>
    <Routes>
    <Route exact path="/"  element={<ProductListing/>}/>
    <Route path="/product/:id" exact element={<ProductDetails/>}/>
    <Route >404 Not Found</Route>
    </Routes>
    </Router>
 
  </div>
   
  )
}
export default App;