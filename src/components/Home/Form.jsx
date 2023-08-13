import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='RegisterForm'>
        <h1 id='title'>Super app</h1>
        <p>Create your new account</p>
        <input class='data' type='text' placeholder='Name'/>
        <input class='data' type='text' placeholder='UserName'/>
        <input class='data' type='email' placeholder='Email'/>
        <input class='data' type='text' placeholder='Number'/>
        <div id='checkboxx'><input type='checkbox' id='checkbox'></input>
        <label for='checkbox'>Share my Registration Data with Superapp</label></div>
        <button id='btn'>SIGN UP</button>
        <p>By clicking on Sign up. you agree to Superapp <span class='green'>Terms and Conditions of Use</span>.</p>
        <p id="last">To learn more about how Superapp collects, uses, shares and protects your <br/> personal data please head Superapp<span class='green'> Privacy Policy</span>.</p>
    </div>
  )
}

export default Form;