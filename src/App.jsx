import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({})
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://api.github.com/users/${search}`)
      const data = await response.json()
      setUser(data)
    }

    if (search) {
      fetchUser()
    }
  }, [search])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (search) {
      setSearch(event.target.value)
    }
  }

  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }

  return (

    <div className="App">
      <div className='main'>

        <form action={handleSubmit}>

          <input
            type="text"
            placeholder='Pesquisar Usuario'
            value={search}
            onChange={handleInputChange}
          />

          <button type="submit">
            Pesquisar
          </button>
        </form>

        {user && (
          <div className='container'>

            <a href={user.html_url} target='_blank' > <img src={user.avatar_url} /></a>
            <h2>{user.login}</h2>

            <div className='infos'>
              <p>{user.name}</p>
              <p>{user.blog}</p>
              <p>{user.created_at}</p>
              <p>{user.location}</p>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default App
