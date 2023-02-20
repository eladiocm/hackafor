import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/client'

function App() {
  const [user, setUser] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getSession() {
      const {
        data: { user }
      } = await supabase.auth.getUser()

      setUser(user)
    }

    getSession()
  }, [navigate])

  const handleLogOut = async () => {
    // Handle errors later. The SignOut function return a error
    await supabase.auth.signOut()
    navigate('/auth')
  }

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <>
          <button onClick={handleLogOut}>Log Out</button>
          <div>
            <p>Logged User Info</p>
            <p>Username: {user?.user_metadata.user_name}</p>
            <img
              src={user?.user_metadata.avatar_url}
              alt={user?.user_metadata.user_name + ' ' + 'Avatar'}
            />
          </div>
        </>
      ) : (
        <Link to='/auth'>Sign In</Link>
      )}
    </div>
  )
}

export default App
