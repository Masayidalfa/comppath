// import './App.css'
// import Layout from './layout/admin/index'
import { Routes, Route } from 'react-router-dom'
import LayoutUser from './layout/user/IndexUser';
import Registration from './pages/user/FormPendaftaran';
// import Dashboard from './pages/admin/Dashboard'
// import Kategori from './pages/admin/kategori/Kategori'
// import User from './pages/admin/user/User'
// import DetailUser from './pages/admin/detail_user/DetailUser'
// import Lomba from './pages/admin/lomba/Lomba'
// import Pendaftaran from './pages/admin/pendaftaran/Pendaftaran'
// import KelolaLomba from './pages/admin/kelola_lomba/KelolaLomba'
// import AddKategori from './pages/admin/kategori/addKategori'
function App() {
  return (
    <LayoutUser>
      <Routes>
        <Route path='/' element={<Registration/>}></Route>
        {/* <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/kategori" element={<Kategori/>}></Route>
        <Route path="/user" element={<User/>}></Route>
        <Route path="/detail-user" element={<DetailUser/>}></Route>
        <Route path="/lomba" element={<Lomba/>}></Route>
        <Route path="/pendaftaran" element={<Pendaftaran/>}></Route>
        <Route path="/kelola-lomba" element={<KelolaLomba/>}></Route>
        <Route path="/addKategori" element={<AddKategori/>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route> */}
      </Routes>
      </LayoutUser>
  )
}

export default App;
