import { Routes, Route } from 'react-router-dom'

//layout
import AdminLayout from './layout/admin/index'
import FrontendLayout from './layout/frontend/index'
import ProfileLayout from './layout/profile/index'

//Admin
import Dashboard from './pages/admin/Dashboard'
import User from './pages/admin/user/User'
import AddUser from './pages/admin/user/AddUser'
import EditUser from './pages/admin/user/EditUser'
import DetailUser from './pages/admin/detail_user/DetailUser'
import AddDetailUser from './pages/admin/detail_user/AddDetailUser'
import EditDetailUser from './pages/admin/detail_user/EditDetailUser'
import Category from './pages/admin/categories/Category'
import AddCategory from './pages/admin/categories/AddCategory'
import EditCategory from './pages/admin/categories/editCategory'
import Competition from './pages/admin/competitions/Competition'
import AddCompetition from './pages/admin/competitions/AddCompetition'
import EditCompetition from './pages/admin/competitions/EditCompetition'
import Registration from './pages/admin/registrations/Registration'
import AddRegistration from './pages/admin/registrations/AddRegistration'
import EditRegistration from './pages/admin/registrations/EditRegistration'

// Frontend Pages
import Landing from './pages/frontend/Landing'
import DaftarKategori from './pages/frontend/DaftarKategori'
import DaftarLomba from './pages/frontend/DaftarLomba'
import DetailLomba from './pages/frontend/DetailLomba'
import FormPendaftaran from './pages/frontend/FormPendaftaran'

//profile
import Profile from './pages/frontend/profile/Profile'
import Kegiatan from './pages/frontend/profile/kegiatan'
import DaftarPeserta from './pages/frontend/profile/DaftarPeserta'
import DaftarLombaKontributor from './pages/frontend/profile/DaftarLombaKontributor'
import CreateLomba from './pages/frontend/profile/CreateLomba'
import About from "./pages/frontend/About";

// Auth
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/user" element={<AdminLayout><User /></AdminLayout>} />
      <Route path="/user/create" element={<AdminLayout><AddUser /></AdminLayout>} />
      <Route path="/user/edit/:id" element={<AdminLayout><EditUser /></AdminLayout>} />
      <Route path="/detail-user" element={<AdminLayout><DetailUser /></AdminLayout>} />
      <Route path="/detail-user/create" element={<AdminLayout><AddDetailUser /></AdminLayout>} />
      <Route path="/detail-user/edit/:id" element={<AdminLayout><EditDetailUser /></AdminLayout>} />
      <Route path="/category" element={<AdminLayout><Category /></AdminLayout>} />
      <Route path="/category/create" element={<AdminLayout><AddCategory /></AdminLayout>} />
      <Route path="/category/edit/:id" element={<AdminLayout><EditCategory /></AdminLayout>} />
      <Route path="/competition" element={<AdminLayout><Competition /></AdminLayout>} />
      <Route path="/competition/create" element={<AdminLayout><AddCompetition /></AdminLayout>} />
      <Route path="/competition/edit/:id" element={<AdminLayout><EditCompetition /></AdminLayout>} />
      <Route path="/registration" element={<AdminLayout><Registration /></AdminLayout>} />
      <Route path="/registration/create" element={<AdminLayout><AddRegistration /></AdminLayout>} />
      <Route path="/registration/edit/:id" element={<AdminLayout><EditRegistration /></AdminLayout>} />

      {/* Frontend Routes */}
      <Route path="/" element={<FrontendLayout><Landing /></FrontendLayout>} />
      <Route path="/daftar-kategori" element={<FrontendLayout><DaftarKategori /></FrontendLayout>} />
      <Route path="/daftar_lomba" element={<FrontendLayout><DaftarLomba /></FrontendLayout>} />
      <Route path="/detail_lomba/:id" element={<FrontendLayout><DetailLomba /></FrontendLayout>} />
      <Route path="/pendaftaran/:id" element={<FrontendLayout><FormPendaftaran /></FrontendLayout>} />
      <Route path="/about" element={<FrontendLayout><About /></FrontendLayout>} />

      {/* Profile Routes */}
      <Route path="/profile" element={<ProfileLayout><Profile /></ProfileLayout>} />
      <Route path="/kegiatan" element={<ProfileLayout><Kegiatan /></ProfileLayout>} />
      <Route path="/daftar-peserta" element={<ProfileLayout><DaftarPeserta /></ProfileLayout>} />
      <Route path="/daftar-lomba-kontributor" element={<ProfileLayout><DaftarLombaKontributor /></ProfileLayout>} />
      <Route path="/create-lomba" element={<ProfileLayout><CreateLomba /></ProfileLayout>} />






      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 404 Not Found */}
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  )
}

export default App;
