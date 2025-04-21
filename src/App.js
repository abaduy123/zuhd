import React from "react";
import Nav from "./components/Nav.jsx"


const products = [
  { id: 1, name: "تحليل تصرفات عملائك لمدة اسبوع ", img:"week.png", p:"200 ريال" , l:"https://wa.me/966578932055/?text=شكرا لك لختيارك لنا اخترت الباقة الاسبوعية سيتم التواصل معك قريبا" },
  { id: 3, name: "تحليل تصرفات عملائك لمدة شهر" , img:"month.png", p:"800 ريال", l:"https://wa.me/966578932055/?text=شكرا لك لختيارك لنا اخترت الباقة الشهرية سيتم التواصل معك قريبا"},
  { id: 4, name: "تحليل تصرفات عملائك لمدة 3 اشهر",img:"3 months.png", p:"2400 ريال", l:"https://wa.me/966578932055/?text=شكرا لك لختيارك لنا اخترت باقة ال 3 اشهر سيتم التواصل معك قريبا" },
];
 
export default function HomePage() { 
  return (
    <div>
      <Nav></Nav>
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-2xl font-semibold text-[#5E17EB] mb-4">ZUHD</h1>
        <p className="text-3xl font-bold text-gray-700 max-w-2xl mx-auto mb-6">
         لاتخمن راقب
        </p>
        <p className="text-3xl font-bold text-gray-700 max-w-2xl mx-auto mb-6">
        
         افهم كيف يفكر عملاؤك أثناء تصفح متجرك
        </p>
        <a className=" text-center bg-[#5E17EB] hover:bg-[#4d14c4] text-white px-8 py-2 text-lg rounded-full" href="https://wa.me/966578932055">
          تواصل معنا
        </a>
      </section>

      {/* Product Cards */}
      <section className="bg-[#F5F6FA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 py-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-4">
            <img className=" bg-gray-300 rounded mb-4 w-full" src={product.img}></img>
            <h2 className="text-xl mb-4 font-semibold text-[#5E17EB] text-right">{product.name}</h2>
            <p className="text-black font-semibold text-right text-lg">{product.p}</p>
            <a className="block text-center mt-4 bg-[#5E17EB] hover:bg-[#4d14c4] text-white w-full py-2 rounded " href={product.l}>
              اطلب الآن
            </a>
          </div>
        ))}
      </section>

     

      {/* Footer */}
      <footer className="bg-[#5E17EB] text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} ZUHD. جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
