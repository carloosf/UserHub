import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/carloosf")
      .then((res) => res.json())
      .then((json) => setUser(json))
  }, [])


  return (
    <div className="App">
      
        <input type="text"
            placeholder='Pesquisar Usuario'
            //onClick={}
            />

      {user && (
        <div className='container'>

        

          <a href={user.html_url} target='_blank' > <img src={user.avatar_url} /></a>
          <h2>{user.name}</h2>

          <div className='infos'>
            <p>{user.blog}</p>
            <p>{user.created_at}</p>
            <p>{user.name}</p>
            <p>{user.login}</p>
            <p>{user.location}</p>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default App
