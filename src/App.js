import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import './App.css';


class App extends Component {

     state={
       total:0,
      items:[
      {
        "name":"items",
        "quantity":0,
        "price":0
      }
    ]
    }

    remove = (item) => {
   this.setState((state) => ({
     items: state.items.filter((i) => i.name !== item.name)
   }))
 }

 add = (item) => {
   let a = this.state.items.concat(item);
   let total = this.state.total + item.price*item.quantity;
   this.setState({ items: a,
   total:total
   })
   }
render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Cart</h1>
        </header>
        <ShoppingCart add={this.add}
        remove={this.remove}
        items={this.state.items}
        total={this.state.total}/>
     </div>
    )
  }
}

export default App;
