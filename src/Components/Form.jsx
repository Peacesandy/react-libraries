import React from 'react'
import '../Styles/Form.css'

function Form() {

   const handleSubmit = (event) => {
       event.preventDefault()
       
   }

  return (
    <div className='form-container'>
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input id='name' type='text'/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type="text" />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' type="password" />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Form