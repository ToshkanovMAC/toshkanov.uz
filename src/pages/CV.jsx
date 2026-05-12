import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const CV = () => {
  const cvRef = useRef();

  const handleDownload = () => {
    const element = cvRef.current;
    const opt = {
      margin: 10,
      filename: 'Toshkanov_Ulugbek_CV.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Saqlash tugmasini va chiqish tugmasini PDF ga kirmasligi uchun yashirmaymiz, 
    // chunki biz faqat cvRef dagi elementni olamiz.
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="bg-white text-black font-sans leading-relaxed min-h-screen">
      {/* Navigatsiya qismi - PDF ga kirmaydi */}
      <div className="max-w-[800px] mx-auto p-5 no-print flex justify-between items-center border-b border-gray-100 mb-4">
        <Link to="/" className="text-black no-underline font-bold hover:underline flex items-center gap-2">
          ← chiqish
        </Link>
        <button 
          onClick={handleDownload}
          className="bg-black text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
        >
          PDF sifatida saqlash
        </button>
      </div>

      {/* CV tarkibi - Faqat shu qism PDF bo'ladi */}
      <div ref={cvRef} className="bg-white text-black p-8 max-w-[800px] mx-auto" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
        <h1 className="text-3xl font-bold mb-1 border-b-2 border-black pb-2 text-black">Toshkanov Ulug'bek</h1>
        
        <div className="mb-4 text-[13px] text-black">
          <p className="font-bold text-base mb-1">Frontend Dasturchi | Toshkent, O'zbekiston</p>
          <div className="flex gap-3 flex-wrap">
            <a href="mailto:toshkanov.4321@icloud.com" className="text-black underline font-medium">Email</a> |
            <a href="https://t.me/mufizm" target="_blank" rel="noreferrer" className="text-black underline font-medium">Telegram</a> |
            <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer" className="text-black underline font-medium">LinkedIn</a>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-1 uppercase border-b border-black pb-0.5 text-black">Men Haqimda</h2>
          <p className="text-[14px] leading-snug text-black">
            Men 19 yoshli frontend dasturchiman. Najot Ta'lim o'quv markazida zamonaviy veb texnologiyalarni chuqur o'rgandim
            va amaliy loyihalar orqali kuchli ko'nikmalarga ega bo'ldim. Toza, samarali va foydalanuvchiga qulay interfeyslar
            yaratishga ixtisoslashganman.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-1 uppercase border-b border-black pb-0.5 text-black">Ko'nikmalar</h2>
          <div className="text-[13px] text-black space-y-1">
            <p><span className="font-bold">Texnologiyalar:</span> HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Redux Toolkit, Tailwind CSS, SCSS, Git</p>
            <p><span className="font-bold">Tillar:</span> O'zbek (Mukammal), Ingliz (B1)</p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-1 uppercase border-b border-black pb-0.5 text-black">Ta'lim</h2>
          <div className="text-black">
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[15px]">Najot Ta'lim</span>
              <span className="font-semibold text-[13px]">2025 – 2026</span>
            </div>
            <div className="italic text-gray-700 text-[13px]">Frontend Bootcamp (React & Next.js)</div>
            <p className="text-[13px] leading-snug mt-1">
              Intensiv kurs davomida zamonaviy veb texnologiyalarni chuqur o'rgandim. Amaliy loyihalar orqali real tajriba ortirdim.
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-1 uppercase border-b border-black pb-0.5 text-black">Loyihalar</h2>
          
          <div className="space-y-3 text-black">
            <div>
              <div className="flex justify-between items-baseline">
                <a href="https://exam-7-delta.vercel.app/" target="_blank" rel="noreferrer" className="font-bold text-[15px] text-black underline">Foodzy</a>
                <span className="font-semibold text-[13px]">2025</span>
              </div>
              <div className="italic text-gray-700 text-[13px]">Onlayn taom yetkazib berish platformasi</div>
              <ul className="list-disc pl-4 text-[13px] space-y-0.5">
                <li>React va Tailwind CSS yordamida yaratilgan mukammal interfeys.</li>
                <li>Savat va mahsulotlarni real-vaqtda filtrlash funksiyalari.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <a href="https://zoo-market-livid.vercel.app/" target="_blank" rel="noreferrer" className="font-bold text-[15px] text-black underline">Zoo Market</a>
                <span className="font-semibold text-[13px]">2025</span>
              </div>
              <div className="italic text-gray-700 text-[13px]">Hayvonot do'koni veb-sayti</div>
              <ul className="list-disc pl-4 text-[13px] space-y-0.5">
                <li>Next.js yordamida yuqori tezlikda ishlovchi platforma va aqlli qidiruv.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <a href="https://figmamext1.vercel.app/" target="_blank" rel="noreferrer" className="font-bold text-[15px] text-black underline">Sport News</a>
                <span className="font-semibold text-[13px]">2025</span>
              </div>
              <div className="italic text-gray-700 text-[13px]">Sport yangiliklari portali</div>
              <ul className="list-disc pl-4 text-[13px] space-y-0.5">
                <li>Figma dizayni asosida pixel-perfect ko'chirilgan frontend.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CV;
