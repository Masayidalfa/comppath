import "react";
import SideBar from "./SideBar";

const CreateLomba = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Buat Lomba</h2>
        <div className="bg-white p-6 shadow rounded-lg">
          <form className="space-y-4">
            {/* Nama Lomba */}
            <div>
              <label className="block text-gray-700 font-medium">
                Nama Lomba
              </label>
              <input
                type="text"
                placeholder="Masukkan Nama Lomba"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Kategori */}
            <div>
              <label className="block text-gray-700 font-medium">
                Kategori
              </label>
              <select className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Pilih Kategori Lomba</option>
                <option>Teknologi</option>
                <option>Seni</option>
                <option>Olahraga</option>
              </select>
            </div>

            {/* Jenjang */}
            <div>
              <label className="block text-gray-700 font-medium">Jenjang</label>
              <select className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Pilih Jenjang</option>
                <option>SD</option>
                <option>SMP</option>
                <option>SMA</option>
                <option>Umum</option>
              </select>
            </div>

            {/* Deskripsi */}
            <div>
              <label className="block text-gray-700 font-medium">
                Deskripsi
              </label>
              <textarea
                placeholder="Masukkan Deskripsi Lomba"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Kuota Peserta */}
            <div>
              <label className="block text-gray-700 font-medium">
                Kuota Peserta
              </label>
              <input
                type="number"
                placeholder="Masukkan Batas Peserta"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Tanggal Mulai */}
            <div>
              <label className="block text-gray-700 font-medium">
                Tanggal Mulai
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Tanggal Akhir */}
            <div>
              <label className="block text-gray-700 font-medium">
                Tanggal Akhir
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Upload Gambar */}
            <div>
              <label className="block text-gray-700 font-medium">Gambar</label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Biaya */}
            <div>
              <label className="block text-gray-700 font-medium">Biaya</label>
              <input
                type="number"
                placeholder="Masukkan Biaya Lomba"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Persyaratan */}
            <div>
              <label className="block text-gray-700 font-medium">
                Persyaratan
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Link Grup */}
            <div>
              <label className="block text-gray-700 font-medium">
                Link Grup
              </label>
              <input
                type="text"
                placeholder="Masukkan Link Grup WhatsApp/Discord"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Buat Lomba
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
export default CreateLomba;
