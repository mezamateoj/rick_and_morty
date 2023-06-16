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
        <div className="form" onSubmit={handleSubmit}>
            <form action="">
                <label htmlFor="">
                   Email <input type="text" name="email" id="" placeholder="Email..." value={userData.email} 
                                onChange={handleChange} onBlur={handleBlur}/>
                         <span>{errors.email}</span>
                </label>
                <hr />
                <label htmlFor="">
                   Password <input type="text" name="password" id="" placeholder="Password..." value={userData.password} 
                                    onChange={handleChange} onBlur={handleBlur} />
                            <span>{errors.password}</span>
                            
                </label>
            </form>
            <hr />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )

}

export default Form;