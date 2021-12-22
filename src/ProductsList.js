import React from 'react';

import axios from 'axios';

export default class ProductsList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
      <table className="table table-bordered " style={{
          color: 'darkviolet', "borderWidth":"1px", 'borderColor':"darkviolet", 'borderStyle':'solid'
      }}>
          <thead className="thead-light">
              <tr><th><h3>Liste des Produits: </h3></th>
                  <td>{ this.state.products.map(product => <ul>Name: {product.name}</ul>)}</td>
                  <td>{ this.state.products.map(product => <ul>Quantity: {product.quantity}</ul>)}</td>
                  <td>{ this.state.products.map(product => <ul>Price: {product.price}</ul>)}</td>
              </tr>
          </thead>
      </table>
  </div>
      // <ul>
      //   { this.state.products.map(product => <li>{product.name}</li>)}
      // </ul>
    )
  }
}