import Home from './pages/home/Home'
import Login from './pages/login/Login'
import './App.css'

import * as kanba from './apis/kanba';

function App() {
  const testApi = async () => {

    const userApi = kanba.UsersApiFactory({
      basePath:'http://localhost:8000',
      isJsonMime:()=>true,
    })
    const authApi = kanba.AuthApiFactory({
      basePath:'http://localhost:8000',
      isJsonMime:()=>true,
    })

  }

  return (
    <>
      {/* <Login /> */}
      <Home />
    </>
  )
}

export default App
