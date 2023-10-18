import Home from './pages/home/Home'
import Login from './pages/login/Login'
import './App.css'

import * as kanba from './apis/kanba';

function App() {
  const testApi = async () => {

    const userApi = kanba.UsersApiFactory({
      basePath:'http://192.168.2.15:8000',
      isJsonMime:()=>true,
    })
    const authApi = kanba.AuthApiFactory({
      basePath:'http://192.168.2.15:8000',
      isJsonMime:()=>true,
    })
    authApi.authControllerLogin({username:"", password:""})

  }

  return (
    <>
      <Login />
      <button className="btn btn-primary h-screen" onClick={()=>testApi()}>Click me</button>
      <Home />
    </>
  )
}

export default App
