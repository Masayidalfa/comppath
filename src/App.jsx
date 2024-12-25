import { Routes, Route } from 'react-router-dom'

// Admin Layout
import AdminLayout from './layout/admin/index'
// Frontend Layout
import FrontendLayout from './layout/frontend/index'

// Admin Pages
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
    <Routes>
      {/* Admin Routes */}
      <Route path="/" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/user" element={<AdminLayout><User /></AdminLayout>} />
      <Route path="/user/create" element={<AdminLayout><AddUser /></AdminLayout>} />
      <Route path="/detail-user" element={<AdminLayout><DetailUser /></AdminLayout>} />
      <Route path="/detail-user/create" element={<AdminLayout><AddDetailUser /></AdminLayout>} />
      <Route path="/category" element={<AdminLayout><Category /></AdminLayout>} />
      <Route path="/category/create" element={<AdminLayout><AddCategory /></AdminLayout>} />
      <Route path="/category/edit/:id" element={<AdminLayout><EditCategory /></AdminLayout>} />
      <Route path="/competition" element={<AdminLayout><Competition /></AdminLayout>} />
      <Route path="/competition/create" element={<AdminLayout><AddCompetition /></AdminLayout>} />
      <Route path="/registration" element={<AdminLayout><Registration /></AdminLayout>} />
      <Route path="/registration/create" element={<AdminLayout><AddRegistration /></AdminLayout>} />

      {/* Frontend Routes */}
      <Route path="/frontend/" element={<FrontendLayout><Landing /></FrontendLayout>} />
      <Route path="/frontend/daftar-kategori" element={<FrontendLayout><DaftarKategori /></FrontendLayout>} />
      <Route path="/frontend/daftar-lomba" element={<FrontendLayout><DaftarLomba /></FrontendLayout>} />
      <Route path="/frontend/detail-lomba" element={<FrontendLayout><DetailLomba /></FrontendLayout>} />
      <Route path="/frontend/form-pendaftaran" element={<FrontendLayout><FormPendaftaran /></FrontendLayout>} />
      {/* Profiles */}
      <Route path="/frontend/profile" element={<FrontendLayout><Profil /></FrontendLayout>} />
      <Route path="/frontend/profile/kegiatan" element={<FrontendLayout><Kegiatan /></FrontendLayout>} />
      <Route path="/frontend/profile/daftar-peserta" element={<FrontendLayout><DaftarPeserta /></FrontendLayout>} />
      <Route path="/frontend/profile/daftar-lomba-kontributor" element={<FrontendLayout><DaftarLombaKontributor /></FrontendLayout>} />
      <Route path="/frontend/profile/create-lomba" element={<FrontendLayout><CreateLomba /></FrontendLayout>} />

      {/* 404 Not Found */}
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  )
}

export default App
