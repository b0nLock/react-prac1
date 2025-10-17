import { useEffect, useState } from "react"
import { AuthContext } from "./context/AuthContext"
import Elements from "./Elements"



function App() {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  })
  return (
    <AuthContext.Provider value={{
      isAuth, setIsAuth
    }}>
      <Elements />
    </AuthContext.Provider>
  )
}

export default App
