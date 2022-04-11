import React, { Component } from 'react'


class User extends Component {
  render() {

    //destructing

    const {name,surname,age} = this.props;
    return (
      <div>
          <ul>
              <li>Ad : {name}</li>
              <li>Soyad : {surname}</li>
              <li>Yas : {age}</li>
          </ul>
      </div>
    )
  }
}



export default User;