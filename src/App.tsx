import { useEffect, useState } from 'react'
import './App.css'
import { type User} from './types.d'
import { UsersLists } from './components/UserList'

function App() {
  const[users, setUsers] = useState<User[]>([])


  useEffect(()=>{
    fetch('https://randomuser.me/api?results=100')
     .then(res => res.json())
     .then(res =>{
      setUsers(res.results)
     })
     .catch(err => {
      console.error(err)
     })

  }, []) 
 

  return (
    
      <div className='App'>
        <h1>Prueba Técnica</h1>
        <UsersLists users={users} />
        
      </div>
      
  )
}

export default App
