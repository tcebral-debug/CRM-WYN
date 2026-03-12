import { AuthProvider, useAuth } from './lib/AuthContext'
import LoginPage from './pages/LoginPage'
import CRMApp from './pages/CRMApp'

function AppContent() {
  const { user, loading } = useAuth()
  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#080C12', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif', color: '#64748B', fontSize: 14 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 44, height: 44, background: 'linear-gradient(135deg,#10B981,#059669)', borderRadius: 12, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 800, color: 'white', marginBottom: 16 }}>W</div>
        <div>Cargando...</div>
      </div>
    </div>
  )
  return user ? <CRMApp /> : <LoginPage />
}

export default function App() {
  return <AuthProvider><AppContent /></AuthProvider>
}
