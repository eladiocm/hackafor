import { supabase } from '@/lib/client'
import { useEffect, useState } from 'react'

function useUserSession() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getSession = async () => {
      try {
        const { data } = await supabase.auth.getSession()
        setUser(data.session.user)
      } catch (error) {
        console.error(error)
      }
    }

    getSession()
  }, [])

  return { user }
}

export default useUserSession
