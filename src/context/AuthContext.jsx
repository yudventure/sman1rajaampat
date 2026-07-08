import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react'
import api from '../api'
import { school } from '../config/school'

const STORAGE_KEY = 'raja1_user'
const AuthContext = createContext(null)

export function AuthProvider({ children, onSessionTimeout }) {
  const [user, setUser] = useState(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      return s ? JSON.parse(s) : null
    } catch {
      return null
    }
  })
  const lastActivity = useRef(Date.now())
  const userRef = useRef(user)
  userRef.current = user

  const logout = useCallback((auto = false) => {
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
    setUser(null)
    if (auto && onSessionTimeout) onSessionTimeout()
  }, [onSessionTimeout])

  const login = useCallback(async (email, pw) => {
    const u = await api.login(email, pw) // throws on bad credentials
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(u)) } catch {}
    lastActivity.current = Date.now()
    setUser(u)
    return u
  }, [])

  // Session timeout: reset the timer on user activity, auto-logout when idle.
  useEffect(() => {
    const bump = () => { lastActivity.current = Date.now() }
    const events = ['click', 'keydown', 'mousemove']
    events.forEach((e) => window.addEventListener(e, bump))
    const iv = setInterval(() => {
      if (userRef.current && Date.now() - lastActivity.current > school.sessionTimeoutMs) {
        logout(true)
      }
    }, 30000)
    return () => {
      clearInterval(iv)
      events.forEach((e) => window.removeEventListener(e, bump))
    }
  }, [logout])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
