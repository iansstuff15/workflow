'use client'
import { WrapperProps } from '@/lib/data/interface/layout/layout'

import { Session, User, createClient } from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useState } from 'react'
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const client = {
  auth: supabase.auth,
}

const SupabaseContext = createContext<{
  session: Session | null | undefined
  user: User | null | undefined
  signOut: () => void
}>({ session: null, user: null, signOut: () => {} })

export const SupabaseProvider = ({ children }: WrapperProps) => {
  const [user, setUser] = useState<User>()
  const [session, setSession] = useState<Session | null>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      if (error) throw error
      setSession(session)
      setUser(session?.user)
      setLoading(false)
    }

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setUser(session?.user)
        setLoading(false)
      },
    )

    setData()

    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user,
    loading,
    signOut: () => supabase.auth.signOut(),
  }

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  )
}

export const useSupabase = () => {
  return useContext(SupabaseContext)
}
