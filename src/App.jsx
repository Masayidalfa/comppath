// import './App.css'
import Layout from './layout/admin/index'
import { Routes, Route } from 'react-router-dom'

//Admin
import Dashboard from './pages/admin/Dashboard'
//Users
import User from './pages/admin/user/User'
import AddUser from './pages/admin/user/AddUser'
//Detail User
import DetailUser from './pages/admin/detail_user/DetailUser'
import AddDetailUser from './pages/admin/detail_user/AddDetailUser'
//Categories
import Category from './pages/admin/categories/Category'
import AddCategory from './pages/admin/categories/AddCategory'
//Competitions
import Competition from './pages/admin/competitions/Competition'
import AddCompetition from './pages/admin/competitions/AddCompetition'
//Registrations
import Registration from './pages/admin/registrations/Registration'
import AddRegistration from './pages/admin/registrations/AddRegistration'

function App() {
  return (
    <Layout>
      <Routes>

        {/* Admin Page */}
        <Route path="/" element={<Dashboard/>}></Route>
        {/* Users */}
        <Route path="/user" element={<User/>}></Route>
        <Route path="/user/create" element={<AddUser/>}></Route>
        {/* Detail User */}
        <Route path="/detail-user" element={<DetailUser/>}></Route>
        <Route path="/detail-user/create" element={<AddDetailUser/>}></Route>
        {/* Categories */}
        <Route path="/category" element={<Category/>}></Route>
        <Route path="/category/create" element={<AddCategory/>}></Route>
        {/* Competitions */}
        <Route path="/competition" element={<Competition/>}></Route>
        <Route path="/competition/create" element={<AddCompetition/>}></Route>
        {/* Registrations */}
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/registration/create" element={<AddRegistration/>}></Route>
        
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </Layout>
  )
}

export default App;
