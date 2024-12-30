 


function DaftarKategori() {
    return(
<div className="container mx-auto px-4 py-8 ">
        <h2>Kategori</h2>
    <div className="grid md:grid-cols-3 gap-4  ">
            <div className="hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
                <div className="flex justify-center">
                    <img src="/image/kategori/gamesonline.jpg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
                </div>
                    <h2>Games Online</h2>
            </div>
            <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
            <div className="flex justify-center">
                    <img src="/image/kategori/LombaKewirausahaan.jpg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
                </div>
               
                <h2>Lomba Kewirausahaan</h2>
            </div>
            <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
            <div className="flex justify-center">
                    <img src="/image/kategori/kesenian.jpg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
                </div>
                <h2>Lomba Kesenia</h2>
            </div>
            <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
            <div className="flex justify-center">
                    <img src="/image/kategori/LombaKhusus.jpeg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
                </div>
                <h2>Lomba Khusus</h2>
                
            </div>
            <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
            <div className="flex justify-center">
                    <img src="/image/kategori/sepakbola.jpg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
                </div>
                <h2>Olah Raga</h2>
                
                
            </div>
            <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
            <div className="flex justify-center">
                    <img src="/image/kategori/LombaKreativitas.png" alt="" className=" h-32 w-32 rounded-t-2xl"/>
                </div>
                <h2>Lomba krativitas</h2>
                
            </div>
    </div>
</div> 
    )
}
export default DaftarKategori;