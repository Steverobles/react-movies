import { useState } from "react"

export default function SignupPage(props) {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (evt) => {
    setInputValue(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.setUser(inputValue)
  }

  return (
  <div className="full-screen-container">
    <div className="login-container">
      <h3 className="login-title">Please enter your desired username below</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input type="text" onChange={handleChange} />
        </div>
        <button type="submit" className="login-button">Sign In</button>
      </form>
    </div>
  </div>
  )
}