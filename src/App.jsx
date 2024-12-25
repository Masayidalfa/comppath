import { Routes, Route } from 'react-router-dom'

//Admin
import Dashboard from './pages/admin/Dashboard'
import User from './pages/admin/user/User'
import AddUser from './pages/admin/user/AddUser'
import DetailUser from './pages/admin/detail_user/DetailUser'
import AddDetailUser from './pages/admin/detail_user/AddDetailUser'
import Category from './pages/admin/categories/Category'
import AddCategory from './pages/admin/categories/AddCategory'
import EditCategory from './pages/admin/categories/editCategory'
import Competition from './pages/admin/competitions/Competition'
import AddCompetition from './pages/admin/competitions/AddCompetition'
import Registration from './pages/admin/registrations/Registration'
import AddRegistration from './pages/admin/registrations/AddRegistration'

// Frontend Pages
import Landing from './pages/frontend/Landing'
import DaftarKategori from './pages/frontend/DaftarKategori'
import DaftarLomba from './pages/frontend/DaftarLomba'
import DetailLomba from './pages/frontend/DetailLomba'
import FormPendaftaran from './pages/frontend/FormPendaftaran'
//profile
import Profil from './pages/frontend/profile/profil'
import Kegiatan from './pages/frontend/profile/kegiatan'
import DaftarPeserta from './pages/frontend/profile/DaftarPeserta'
import DaftarLombaKontributor from './pages/frontend/profile/DaftarLombaKontributor'
import CreateLomba from './pages/frontend/profile/CreateLomba'

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

export default App
