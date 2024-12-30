function Landing(){
    return(
        <div>
            {/* content 1 */}
            <div className="flex flex-row m-10 border-b border-gray-500">
                <div className=" ">
                    <h2 className="text-blue-600 mb-4 text-4xl">Temukan Lomba Impianmu dengan Satu Klik</h2>
                        <p>“Lomba yang Pas, Untuk Kamu yang Unik. Jelajahi Ribuan Lomba di Comppath.”</p>
                        <input type="text" className="border border-blue-300 px-20 py-1" placeholder="Cari Lomba"/>
                        <button className="bg-blue-600 text-white px-10 py-1 " >Cari</button>
                 </div>
                 <div className="flex justify-end">
                        <img 
                        src="/image/photo2.png" 
                        alt="" 
                        className="object-cover sm:w-1/2"
                        />
                </div>
                </div>
            {/* content 2 */}
            <div className="flex flex-row gap-x-4 m-10 bg-blue-100">
                <div className="m-4">
                    <img 
                    src="./image/photo3.png"
                    alt=""
                    className="object-cover sm:max-w-96" 
                    />
                </div>
            <div className="bg-blue-200 text-gray-800 p-4">
                <h1 className="text-3xl font-bold text-center">Tentang CompPath!!!</h1>
                <p className="text-lg mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

            {/* contetn 3 */}
            <div className="flex flex-col items-center m-10">
                <h2 className="text-blue-600 mb-4 text-2xl">Pilih Jenjang Perlombaan</h2>
                <p>Hai Comppathitor, temukan berbagai perlombaan yang menarik sesuai jenjang mu </p>
            </div>
            <div className="flex flex-row justify-center gap-x-9 bg-blue-100">
                <a href="">  <img src="/image/photo5.jpg" alt="" className="sm:w-56"/></a>       
                <a href=""> <img src="/image/photo4.jpg" alt="" className="sm:w-56"/> </a>   
                <a href=""> <img src="/image/photo6.jpg" alt="" className="sm:w-56"/></a>        
            </div>

        {/* contetn 4 */}
             <div className="bg-blue-300 flex flex-row gap-x-4 m-10">
                <div className="m-12">
                    <h2 className="text-blue-600 text-2xl font-bold">Kategori Lomba Populer </h2>
                    <p>Hai Comppathitor, Berikut 6 kategori lomba populer saat ini </p>
                    <img 
                    src="/image/photo7.png" 
                    alt="" 
                    className="md:w-10/12 m-4"
                    />
                </div>  
                <div className="container mx-auto px-4 py-8 ">
                        <div className="text-right mb-4 ">
                            <a href="/daftar-kategori" className="text-blue-600 hover:underline font-bold">Selengkapnya </a>
                        </div>
                        <div className="grid md:grid-cols-2 gap-2 m-16 ">
                            <a className=" bg-gray-100 hover:bg-blue-700 text-sky-800 font-bold py-8 px-4 text-center rounded">Olahraga</a>
                            <a className=" bg-gray-100 hover:bg-blue-700 text-sky-800 font-bold py-8 px-4 text-center rounded">Akademik</a>
                            <a className=" bg-gray-100 hover:bg-blue-700 text-sky-800 font-bold py-8 px-4 text-center rounded">Seni dan Kreativitas</a>
                            <a className=" bg-gray-100 hover:bg-blue-700 text-sky-800 font-bold py-8 px-4 text-center rounded">Teknologi</a>
                            <a className=" bg-gray-100 hover:bg-blue-700 text-sky-800 font-bold py-8 px-4 text-center rounded">Kewirausahaan</a>
                            <a className=" bg-gray-100 hover:bg-blue-700 text-sky-800 font-bold py-8 px-4 text-center rounded">Keterampilan Khusus</a>
                        </div>
                </div>
            </div>

             {/* content 5 */}
             <div className="container mx-auto px-4 border-b border-gray-500 m-5">
                <h2 className="text-3xl font-bold">Lomba</h2>
                <a href="/daftar_lomba" className="text-sm text-blue-500 float-right">Tampilkan Semua </a>
            </div>
            <div className="flex flex-row gap-x-4 m-10 shadow-md ">
                <div className="m-4">
                    <img 
                    src="./image/photo8.jpg"
                    alt=""
                    className="object-cover sm:max-w-56 rounded-2xl" 
                    />
                </div>
                <div className="container mx-auto shadow-md rounded px-4 py-2 ">
                        <div className="flex gap-4">
                            <a href="" className="bg-teal-500 text-white px-6 py-1 rounded  shadow">Status</a>
                            <a href="" className="bg-teal-500  text-white px-6 py-1 rounded shadow">Jenjang Lomba</a>
                        </div>
                    <div className="flex justify-between">
                        <div>
                        <h2 className="text-xl font-bold">Mobail Legend </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem pariatur 
                            magnam voluptate! Earum, pariatur. Nostrum assumenda dolor quod illo deserunt quos 
                            cumque optio eum? Enim, consequatur quisquam. Quis, similique ea!</p>
                        </div>
                    </div>
                    <a href="/DetailLomba" className="bg-blue-700 text-white hover:underline px-6 py-1 rounded">Lihat Detail</a>
            </div>
        </div>
        
        <div className="flex flex-row gap-x-4 m-10 shadow-md ">
                <div className="m-4">
                    <img 
                    src="./image/photo9.jpg"
                    alt=""
                    className="object-cover sm:max-w-56  rounded-2xl " 
                    />
                </div>
                <div className="container mx-auto shadow-md rounded px-4 py-2 ">
                        <div className="flex gap-4">
                        <a href="" className="bg-teal-500 text-white px-6 py-1 rounded  shadow">Status</a>
                        <a href="" className="bg-teal-500  text-white px-6 py-1 rounded shadow">Jenjang Lomba</a>
                        </div>
                    <div className="flex justify-between">
                        <div>
                        <h2 className="text-xl font-bold">PUBG Mobile</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem pariatur 
                            magnam voluptate! Earum, pariatur. Nostrum assumenda dolor quod illo deserunt quos 
                            cumque optio eum? Enim, consequatur quisquam. Quis, similique ea!</p>
                        </div>
                    </div>
                    <a href="/DetailLomba" className="bg-blue-700 text-white hover:underline px-6 py-1 rounded">Lihat Detail</a>
            </div>
        </div>

        <div className="flex flex-row gap-x-4 m-10 shadow-md ">
                <div className="m-4">
                    <img 
                    src="./image/photo10.jpeg"
                    alt=""
                    className="object-cover sm:max-w-56  rounded-2xl" 
                    />
                </div>
                <div className="container mx-auto shadow-md rounded px-4 py-2 ">
                        <div className="flex gap-4">
                        <a href="" className="bg-teal-500 text-white px-6 py-1 rounded  shadow">Status</a>
                        <a href="" className="bg-teal-500  text-white px-6 py-1 rounded shadow">Jenjang Lomba</a>
                        </div>
                    <div className="flex justify-between">
                        <div>
                        <h2 className="text-xl font-bold">Sepak Bola</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem pariatur 
                            magnam voluptate! Earum, pariatur. Nostrum assumenda dolor quod illo deserunt quos 
                            cumque optio eum? Enim, consequatur quisquam. Quis, similique ea!</p>
                        </div>
                    </div>
                    <a href="/DetailLomba" className="bg-blue-700 text-white hover:underline px-6 py-1 rounded">Lihat Detail</a>
            </div>
        </div>

    
</div>
    )
}
export default Landing;