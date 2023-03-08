import React, {useState, useEffect} from 'react'

const FetchAPI = () => {
    const [usersData, setUserData]= useState()

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  .then(res => setUserData(res) )
}, );


  return (
    <div>
      
    </div>
  )
}

export default FetchAPI
