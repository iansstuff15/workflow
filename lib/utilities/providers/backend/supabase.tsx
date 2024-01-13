'use client'
import { showError } from '@/lib/config/message/message.config'
import { WrapperProps } from '@/lib/data/interface/layout/layout'
import { EmployeeResponse } from '@/lib/data/response/employee/employee.response'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import {
  AuthUser,
  Session,
  User,
  UserResponse,
  createClient,
} from '@supabase/supabase-js'
import { createContext, useContext, useEffect, useState } from 'react'
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClientComponentClient({
  supabaseKey: supabaseAnonKey,
  supabaseUrl: supabaseUrl,
})
export const client = {
  auth: supabase.auth,
}

const SupabaseContext = createContext<{
  session: Session | null | undefined
  user: AuthUser | null | undefined
  userInfo: EmployeeResponse | null | undefined
  userID: string | null | undefined
  signOut: () => void
}>({
  session: null,
  user: null,
  userInfo: null,
  userID: null,
  signOut: () => {},
})

export const SupabaseProvider = ({ children }: WrapperProps) => {
  const [user, setUser] = useState<AuthUser>()
  const [userInfo, setUserInfo] = useState<EmployeeResponse>()
  const [session, setSession] = useState<Session | null>()
  const [loading, setLoading] = useState(true)
  const [userID, setUserID] = useState<string | null>()
  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      if (error) {
        showError({ message: error.message })
      }
      setSession(session)
      setUser(session?.user)
      setUserID(session?.user.id)
      if (session) {
        let { data, error } = await supabase
          .from('employee')
          .select('*')
          .eq('id', session.user.id)
        setUserInfo(data![0])
        if (error) {
          showError({ message: error.message })
        }
      }
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
  }, [supabase])

  const value = {
    session,
    user,
    loading,
    userInfo,
    userID,
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
