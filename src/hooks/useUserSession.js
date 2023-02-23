import { supabase } from '@/lib/client'
import { useEffect, useState } from 'react'

function useUserSession() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getSession = async () => {
      setLoading(true)

      try {
        const { data } = await supabase.auth.getSession()
        setUser(data.session.user)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getSession()
  }, [])

  return { user, loading }
}

export default useUserSession
