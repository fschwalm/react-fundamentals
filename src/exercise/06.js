// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUserName] = React.useState('')

  const isValid = username === username.toLowerCase()
  function handleSubmit(e) {
    e.preventDefault()
    // onSubmitUsername(e.target.elements.username.value)
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={e => setUserName(e.target.value)}
          id="username"
          type="text"
        />
        {!isValid && (
          <p role="alert" style={{color: 'red', fontWeight: 'bold'}}>
            Username must be lower case
          </p>
        )}
      </div>
      <button disabled={!isValid} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
