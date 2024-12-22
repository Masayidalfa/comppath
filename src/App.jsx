// import './App.css'
import Layout from './layout/admin/index'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard'
import Category from './pages/admin/categories/Category'
import User from './pages/admin/users/User'
import DetailUser from './pages/admin/detail_user/DetailUser'
import Competition from './pages/admin/competitions/Competition'
import Registration from './pages/admin/registrations/Registration'
import AddCategory from './pages/admin/categories/addCategory'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/detail-user" element={<DetailUser/>}></Route>
        <Route path="/competition" element={<Competition/>}></Route>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/addCategory" element={<AddCategory/>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </Layout>
  )
}

export default App;
