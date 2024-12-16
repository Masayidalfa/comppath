// import './App.css'
import Layout from './layout/admin/index'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import Kategori from './pages/admin/kategori/Kategori'
import User from './pages/admin/user/User'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/kategori" element={<Kategori/>}></Route>
        <Route path="/user" element={<User/>}></Route>
      </Routes>
    </Layout>
  )
}

export default App;
