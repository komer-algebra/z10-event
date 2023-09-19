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

  const uvecajGodine = () => {
    setUsers(prevState => {
      const updatedUsers = prevState.map(user => {
        return { ...user, age: user.age + 1 }
      })
      return updatedUsers
    })
  }

  const changeName = [];
  for (let i = 0; i < initialUsers.length; i++) {
    changeName.push(
      (function (event) {
        const newUsers = [...users];
        newUsers[i].name = event.target.value;
        setUsers(newUsers);
      })
    );
  }

  const tekst = "Proizvoljan tekst"

  return (
    <>
      <h1>State</h1>

      <h2>1. User s input-om u sebi</h2>
      <UserFunction name={users[1].name} age={users[1].age} changeName={changeName[1]} />

      <h2>2. Ostaci prošlog zadatka</h2>
      <UserClass name={users[0].name} age={users[0].age} />
      <UserChildren name={users[2].name} age={users[2].age}>
        {tekst}
      </UserChildren>
      <button onClick={uvecajGodine}>Uvecaj godine</button>
    </>
  )
}

export default App
