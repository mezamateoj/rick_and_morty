import { useState } from "react";
import validation from '../components/validation';


const initialState = {
    email: '',
    password: ''
}



function Form({login}) {
    const [userData, setUserData] = useState(initialState)
    const [errors, setErrors] = useState( {
        email: '',
        password: ''
    })

    function handleChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    // let errors = {}
    function handleBlur(e) {
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        login(userData)    
    }

    return (
        <div className="form-parent" onSubmit={handleSubmit}>
            <form action="" className="form-container">
                <p className="form-title">Sign in to your Account</p>
                <div className="input-container">
                    <input type="text" name="email" id="" placeholder="Enter Email..." value={userData.email} 
                                    onChange={handleChange} onBlur={handleBlur}/>
                    <span>{errors.email}</span>
                </div>

                <div className="input-container">
                    <input type="text" name="password" id="" placeholder="Enter Password..." value={userData.password} 
                                        onChange={handleChange} onBlur={handleBlur} />
                    <span>{errors.password}</span>
                </div>    
                <button type="submit" onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
    )

}

export default Form;