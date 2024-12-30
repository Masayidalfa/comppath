import React, { useEffect, useState } from "react";
import axios from "axios";


const DaftarKategori = () => {
    const token = localStorage.getItem("token");
  const [category, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/category",{
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        console.log("Respons API:", response.data);
        setCategories(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };
  
    fetchCategories();
  }, []);
  
  
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;



  return (
    <div>
      <h1>Categories</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {category.map((category) => (
          <div key={category.id} style={{ margin: "10px", textAlign: "center" }}>
            <img
             src={`http://127.0.0.1:8000/storage/${category.gambar}`}
              alt={category.name}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarKategori;



// function DaftarKategori() {

//     return(
// <div className="container mx-auto px-4 py-8 ">
//         <h2>Kategori</h2>
//     <div className="grid md:grid-cols-3 gap-4  ">
//             <div className="hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
//                 <div className="flex justify-center">
//                     <img src="/image/kategori/gamesonline.jpg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
//                 </div>
//                     <h2>Games Online</h2>
//             </div>
//             <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
//             <div className="flex justify-center">
//                     <img src="/image/kategori/LombaKewirausahaan.jpg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
//                 </div>
               
//                 <h2>Lomba Kewirausahaan</h2>
//             </div>
//             <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
//             <div className="flex justify-center">
//                     <img src="/image/kategori/kesenian.jpg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
//                 </div>
//                 <h2>Lomba Kesenia</h2>
//             </div>
//             <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
//             <div className="flex justify-center">
//                     <img src="/image/kategori/LombaKhusus.jpeg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
//                 </div>
//                 <h2>Lomba Khusus</h2>
                
//             </div>
//             <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
//             <div className="flex justify-center">
//                     <img src="/image/kategori/sepakbola.jpg" alt="" className=" h-32 w-32 rounded-t-2xl"/>
//                 </div>
//                 <h2>Olah Raga</h2>
                
                
//             </div>
//             <div className=" hover:bg-blue-400 text-stone-950 border-2 border-stone-950 font-bold py-2 text-center rounded">
//             <div className="flex justify-center">
//                     <img src="/image/kategori/LombaKreativitas.png" alt="" className=" h-32 w-32 rounded-t-2xl"/>
//                 </div>
//                 <h2>Lomba krativitas</h2>
                
//             </div>
//     </div>
// </div> 
//     )
// }
// export default DaftarKategori;