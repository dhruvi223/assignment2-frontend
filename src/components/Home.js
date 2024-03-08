import React from 'react'

function Home() {
   
  const loggedIn = localStorage.getItem('loggedIn')
  const loggedInuser = JSON.parse(loggedIn)
  console.log(loggedInuser);
  return (
    <div>
      
    </div>
  )
}

export default Home
