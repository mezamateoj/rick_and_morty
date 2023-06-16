const emailCheck = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export default function validation(inputs) {
    let errors = {}
    let hasNumber = /\d/  // https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
    
    if (!inputs.email) {
      errors.email = 'Required'
    } else if (inputs.email.length > 35) {
        errors.email = 'Email is to long!'
    } else if (!emailCheck.test(inputs.email)) {
      errors.email = 'Must be a valid Email'
    } 
    if (!inputs.password) {
        errors.password = 'Required'
    } else if (!hasNumber.test(inputs.password)) {
        errors.password = 'Must contain a number'
    } else if (inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password = 'Must be between 6 and 10'
    }

    return errors
}