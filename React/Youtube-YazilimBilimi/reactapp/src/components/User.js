import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

    static defaultProps = {
        name: "melumat yoxdur",
    surname: "melumat yoxdur",
    age:"melumat yoxdur"
    }
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

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
}




export default User;