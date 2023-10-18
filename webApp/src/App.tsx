import Home from './pages/home/Home'
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
      <button className="btn btn-primary" onClick={()=>testApi()}>Click me</button>
     <Home />
    </>
  )
}

export default App
