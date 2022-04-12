import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

  /*  state = {
     isVisibe : false
   } */

  static defaultProps = {
    name: "melumat yoxdur",
    surname: "melumat yoxdur",
    age: "melumat yoxdur"
  }

  /* kliklenende asagidaki funksiya islenir */
  onClickEvent = (number,e) => {
    console.log(number)
  }


  constructor(props) {
    super(props)

    this.state = {
      isVisibe: false
    }
  }
  render() {

    //destructing

    const { name, surname, age } = this.props;
    const { isVisibe } = this.state;

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent.bond(this,34)}>{name}</h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>

          {
            isVisibe ? <div className="card-body">
              <p className="card-text">Soyad : {surname}</p>
              <p className="card-text">Yas : {age}</p>
            </div> : null
          }
        </div>
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