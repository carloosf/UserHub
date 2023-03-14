import { useState, useEffect } from 'react'
import './App.css'

import Button from './components/Button'
import Input from './components/Input'
import UserInfo from './components/UserInfo'


function App() {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState('')

  const handleButtonClick = async () => {
    const response = await fetch(`https://api.github.com/users/${search}`)
    const data = await response.json()
    setUser(data)
  }


  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  return (

    <div className="App">

      <Input onChange={handleInputChange} />
      <Button onClick={handleButtonClick} />
      {user && <UserInfo user={user} />}
    </div>
  )
}

export default App
