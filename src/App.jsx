import './App.css'
import { useState } from 'react'
import { UserClass, UserFunction, UserChildren } from './user'

function App() {

  const initialUsers = [
    { name: 'Ivan', age: 30 },
    { name: 'Marko', age: 35 },
    { name: 'Ana', age: 25 },
  ]

  const [users, setUsers] = useState(initialUsers)

  const tekst = "Proizvoljan tekst"


  const uvecajGodine = () => {
    setUsers(prevState => {
      const updatedUsers = prevState.map(user => {
        return { ...user, age: user.age + 1 }
      })
      return updatedUsers
    })
  }

  const changeName = (event) => {
    const newUsers = [...users]
    newUsers[1].name = event.target.value;
    setUsers(newUsers);
  }

  return (
    <>
      <h1>State</h1>
      <UserClass name={users[0].name} age={users[0].age} />
      <UserFunction name={users[1].name} age={users[1].age} changeName={changeName}/>
      <UserChildren name={users[2].name} age={users[2].age}>
        {tekst}
      </UserChildren>
      <button onClick={uvecajGodine}>Uvecaj godine</button>
    </>
  )
}

export default App
