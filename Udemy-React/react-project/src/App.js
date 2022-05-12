import React, { useState } from 'react'
import './App.css';
import Input from './components/input/input';
import Button from './components/button/button';
import Form from './components/form/form';


function App() {

  const [userForm, setUserForm] = useState({
    userName: "",
    password: ""
  })


  const onValidation = () => {
    if (userForm.userName == "" || userForm.password == "") {
      alert("Melumatlari duzgun daxil edin")
    }
    else {
      alert("form gonderildi")
    }
  }


  return (
    <div className='custom-page'>

      <Form>

        <h2>Giris sehifesi</h2>

        <Input value={userForm.userName} placeholder={"Istifadeci adi"} onChange={(e) => {
          setUserForm({ userName: e.target.value, password: userForm.password })
        }} />

        <Input type='password' value={userForm.password} placeholder={"Parol"} onChange={(e) => {
          setUserForm({ userName: userForm.userName, password: e.target.value })
        }} />


        <Button text="Daxil ol" onClick={() => {
          console.log(userForm);
         onValidation()
        }} />
      </Form>
    </div>
  );
}

export default App;

