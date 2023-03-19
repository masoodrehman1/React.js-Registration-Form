import React from 'react'

const Myapi = () => {
const [usersData, setUsersData] = useState([])

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  .then(res => setUsersData(res))
}, [])



  return (
    <div>Myapi</div>
  )
}

export default Myapi