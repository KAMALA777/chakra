import React, { useState } from 'react'

const Portfile = () => {

  const[users, setUsers] = useState([])

  const getData =() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((res) =>console.log(res),
    fetch('https://jsonplaceholder.typicode.com/todos')
     .then((data) =>data.json())
     .then((data) =>(data))

    )
  
  }
  getData()
  return (
    <div>Portfile</div>
  )
}

export default Portfile