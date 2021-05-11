import React from 'react';
import NavBar from './components/Navbar'
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart"
import Home from "./components/Home"
import './App.css'


function App() {
  return (
    <CartProvider>
    <BrowserRouter >
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
         <Home />
        </Route>
        <Route path='/category/:categoryId'>
         <ItemListContainer />
        </Route>
        <Route path='/item/:itemId'>
          <ItemDetailContainer showMsg={true} />  
        </Route>
        <Route path="/cart">
           <h2>Estoy en el Cart</h2>
           <Cart />
        </Route>
      </Switch>
    </div> 
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;