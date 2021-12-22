import React from 'react';

import axios from 'axios';

export default class UsersList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh'}}>
      <table className="table table-bordered " style={{
          color: 'darkBlue', "borderWidth":"1px", 'borderColor':"darkBlue", 'borderStyle':'solid'
      }}>
          <thead className="thead-light">
              <tr><th><h3>Liste des utilisateurs: </h3></th>
                  <td>{ this.state.users.map(user => <ul>FirstName: {user.firstname}</ul>)}</td>
                  <td>{ this.state.users.map(user => <ul>Lastname: {user.lastname}</ul>)}</td>
                  <td>{ this.state.users.map(user => <ul>Address: {user.address}</ul>)}</td>
              </tr>
          </thead>
      </table>
  </div>
    )
  }
}