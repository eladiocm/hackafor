import { supabase } from '@/lib/client'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export const useGetUser = () => {
  const [user, setUser] = useState(null)
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
  return { user }
}
