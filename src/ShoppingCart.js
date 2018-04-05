import React, { Component } from 'react';

class ShoppingCart extends Component {
     state = {

      obj : {
        "name":"",
        "quantity":"",
        "price":""
      }
    }
    Update=(value,field) => {
      let prop;
      if(field === 'n'){
          prop = 'name'
      }else if(field === 'q'){
          prop='quantity'
      }else if(field === 'up'){
          prop = 'price'
      }
      this.setState({
        obj:{
          ...this.state.obj,
          [prop]:value
        }
    })
  }
render() {
    return (
      <div className="Shopping">
      <p className="ele">  Item :  </p> <input className="Form-Element" value={this.state.obj.name} onChange={(event) => {this.Update(event.target.value,'n')}} type="text" placeholder="Item" /><br/>
      <p className="ele"> Quantity :   </p><input type="text" value={this.state.obj.quantity} onChange={(event) => {this.Update(event.target.value,'q')}} className="Form-Element" placeholder="Quantity" /><br/>
      <p className="ele"> Price :  </p><input type="text" value={this.state.obj.price} onChange={(event) => {this.Update(event.target.value,'up')}} className="Form-Element" placeholder="Price" /><br/>
        <button  onClick={() => this.props.add(this.state.obj)} className='add-item'> Add Item</button>&nbsp;

      <div className='Cart'>
          <ul>
            {
              this.props.items.map((item) => (
            <li key={item.name.value}>
            <p>{item.quantity} {item.name} for Rs.{item.price*item.quantity}/-    <button onClick={() => this.props.remove(item)}>-</button>
            </p>
            </li>
          ))
        }
          </ul>
          <p className="ele">TOTAL PRICE:</p>{this.props.total}
          </div>
          </div>

    );
  }
}

export default ShoppingCart;
