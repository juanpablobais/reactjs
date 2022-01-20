import React, { useState } from 'react'

const Form = () => {

    const [values, setValues] = useState({
        name: '',
        lastName: ''
    })

    const { name, lastName } = values

    const handleInputs = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        alert(`Hello ${name} ${lastName}`)
    }

    return (
        <div>
            <h1>FORMULARIO</h1>
            <form onSubmit={handleSubmit} >
                <label>Name:</label>
                <input type="text" name='name' onChange={handleInputs} />
                <label>Last Name:</label>
                <input type="text" name='lastName' onChange={handleInputs} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form