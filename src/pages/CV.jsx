import React from 'react';
import { Link } from 'react-router-dom';

const CV = () => {
  return (
    <div className="bg-white text-black font-sans leading-relaxed p-10 max-w-[800px] mx-auto min-h-screen">
      <Link to="/" className="inline-block mb-5 text-black no-underline font-bold hover:underline">chiqish</Link>

      <h1 className="text-2xl font-bold mb-[5px] border-b-2 border-black pb-2.5">Toshkanov Ulug'bek</h1>
      <div className="mb-5 text-sm">
        Frontend Dasturchi | Toshkent, O'zbekiston<br />
        <a href="mailto:toshkanov.4321@icloud.com" className="text-black underline">Email</a> |{' '}
        <a href="https://t.me/mufizm" target="_blank" rel="noreferrer" className="text-black underline">Telegram</a> |{' '}
        <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer" className="text-black underline">Linkedin</a>
      </div>

      <div className="mb-5">
        <h2 className="text-lg font-bold mt-[25px] mb-2.5 uppercase border-b border-[#ccc]">Men Haqimda</h2>
        <p>Men 19 yoshli frontend dasturchiman. Najot Ta'lim o'quv markazida zamonaviy veb texnologiyalarni chuqur o'rgandim
          va amaliy loyihalar orqali kuchli ko'nikmalarga ega bo'ldim. Toza, samarali va foydalanuvchiga qulay interfeyslar
          yaratishga ixtisoslashganman.</p>
      </div>

      <div className="mb-5">
        <h2 className="text-lg font-bold mt-[25px] mb-2.5 uppercase border-b border-[#ccc]">Ko'nikmalar</h2>
        <p><strong>Texnologiyalar:</strong> HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Redux Toolkit, Tailwind
          CSS, SCSS, Git</p>
        <p><strong>Tillar:</strong> O'zbek (Mukammal)</p>
      </div>

      <div className="mb-5">
        <h2 className="text-lg font-bold mt-[25px] mb-2.5 uppercase border-b border-[#ccc]">Ta'lim</h2>
        <div className="mb-[15px]">
          <div className="flex justify-between font-bold">
            <span>Najot Ta'lim</span>
            <span>2025 – 2026</span>
          </div>
          <div className="italic text-[#555]">Frontend Bootcamp (React & Next.js)</div>
          <p>Intensiv kurs davomida zamonaviy veb texnologiyalarni chuqur o'rgandim. Amaliy loyihalar orqali real tajriba
            ortirdim.</p>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="text-lg font-bold mt-[25px] mb-2.5 uppercase border-b border-[#ccc]">Loyihalar</h2>
        <div className="mb-[15px]">
          <div className="flex justify-between font-bold">
            <span>Foodzy</span>
            <span>2025</span>
          </div>
          <div className="italic text-[#555]">Onlayn taom yetkazib berish platformasi</div>
          <a href="https://exam-7-delta.vercel.app/" target="_blank" rel="noreferrer" className="font-bold no-underline text-[#0066cc] text-[1.1rem] transition-colors hover:underline hover:text-[#004499]">foodzy</a>
          <ul className="mt-[5px] pl-5 list-disc">
            <li>React va Tailwind CSS yordamida yaratilgan.</li>
            <li>Savat (Cart) va mahsulotlarni filtrlash funksiyalari mavjud.</li>
            <li>Responsive dizayn (Mobile & Desktop).</li>
          </ul>
        </div>

        <div className="mb-[15px]">
          <div className="flex justify-between font-bold">
            <span>Zoo Market</span>
            <span>2025</span>
          </div>
          <div className="italic text-[#555]">Hayvonot do'koni veb-sayti</div>
          <a href="https://zoo-market-livid.vercel.app/" target="_blank" rel="noreferrer" className="font-bold no-underline text-[#0066cc] text-[1.1rem] transition-colors hover:underline hover:text-[#004499]">zoomarket</a>
          <ul className="mt-[5px] pl-5 list-disc">
            <li>Next.js yordamida ishlab chiqilgan.</li>
            <li>Katalog va mahsulotlar qidiruvi.</li>
          </ul>
        </div>

        <div className="mb-[15px]">
          <div className="flex justify-between font-bold">
            <span>Sport News</span>
            <span>2025</span>
          </div>
          <div className="italic text-[#555]">Sport yangiliklari portali</div>
          <a href="https://figmamext1.vercel.app/" target="_blank" rel="noreferrer" className="font-bold no-underline text-[#0066cc] text-[1.1rem] transition-colors hover:underline hover:text-[#004499]">sportnews</a>
          <ul className="mt-[5px] pl-5 list-disc">
            <li>Next.js va Tailwind CSS ishlatilgan.</li>
            <li>Figma dizaynidan pixel-perfect ko'chirilgan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CV;
