import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

export default function HomePage({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale);
  const t = useTranslations('HomePage');
  
  return (
    <main className="min-h-screen bg-black text-white relative selection:bg-red-600 selection:text-white font-mono overflow-x-hidden">
      
      {/* NOISE & GRID */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* MARQUEE */}
      <div className="w-full bg-red-600 text-black py-2 font-black tracking-widest uppercase overflow-hidden whitespace-nowrap text-xl border-b-4 border-white z-20 relative">
        <div className="inline-block animate-[marquee_10s_linear_infinite]">
          {t('marquee')} {t('marquee')}
        </div>
      </div>

      {/* HERO SECTION - BRUTAL */}
      <section className="relative z-10 min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 border-b-8 border-white">
        <div className="uppercase">
          <h1 className="text-[10vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter mix-blend-difference mb-8">
            {t('hero_title_1')} <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>{t('hero_title_2')}</span> <br/>
            {t('hero_title_3')}
          </h1>
          <p className="text-2xl md:text-4xl font-bold max-w-4xl border-l-8 border-red-600 pl-6 mb-12 uppercase leading-tight">
            {t('hero_subtitle')}
          </p>
        </div>
        
        {/* CSS 3D Cube illusion */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-64 h-64 border-4 border-white rotate-45 transform hover:rotate-90 transition-transform duration-1000 grid grid-cols-2 grid-rows-2 gap-2 p-2">
            <div className="bg-white"></div>
            <div className="border-2 border-white"></div>
            <div className="border-2 border-white"></div>
            <div className="bg-red-600"></div>
          </div>
        </div>
      </section>

      {/* TECH RADAR SECTION */}
      <section className="relative z-10 py-20 px-6 lg:px-12 border-b-8 border-white bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{t('tech_radar_title')}</h2>
             <p className="text-xl font-bold uppercase">{t('tech_radar_subtitle')}</p>
          </div>
          <div className="flex-1 w-full relative h-[300px]">
             {/* Abstract Radar/Tech visualization */}
             <div className="absolute inset-0 border-4 border-black rounded-full border-dashed animate-[spin_20s_linear_infinite] opacity-20 scale-150"></div>
             <div className="absolute inset-0 border-4 border-red-600 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-40 scale-110"></div>
             <div className="absolute inset-0 flex items-center justify-center gap-4 flex-wrap z-10">
                <span className="bg-black text-white px-4 py-2 font-black text-2xl">NEXT.JS 15</span>
                <span className="bg-red-600 text-white px-4 py-2 font-black text-2xl">POSTGRESQL</span>
                <span className="bg-black text-white px-4 py-2 font-black text-2xl">TYPESCRIPT</span>
                <span className="bg-white text-black border-4 border-black px-4 py-2 font-black text-2xl">DOCKER</span>
             </div>
          </div>
        </div>
      </section>

      {/* REAL SERVICES */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-8 border-white">
        
        <div className="p-12 border-r-4 border-b-4 border-white hover:bg-white hover:text-black transition-colors group">
          <div className="text-8xl font-black mb-8 group-hover:text-red-600">01</div>
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">{t('service_1_title')}</h2>
          <p className="text-xl font-bold mb-8">{t('service_1_desc')}</p>
          <div className="text-2xl font-black border-t-4 border-current pt-4 text-red-600 uppercase">{t('contact_btn')} →</div>
        </div>

        <div className="p-12 border-r-4 border-b-4 border-white hover:bg-red-600 transition-colors group">
          <div className="text-8xl font-black mb-8 text-white">02</div>
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter text-white">{t('service_2_title')}</h2>
          <p className="text-xl font-bold mb-8 text-white">{t('service_2_desc')}</p>
          <div className="text-2xl font-black border-t-4 border-white pt-4 text-white uppercase">{t('contact_btn')} →</div>
        </div>

        <div className="p-12 border-b-4 border-white hover:bg-white hover:text-black transition-colors group">
          <div className="text-8xl font-black mb-8 group-hover:text-red-600">03</div>
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">{t('service_3_title')}</h2>
          <p className="text-xl font-bold mb-8">{t('service_3_desc')}</p>
          <div className="text-2xl font-black border-t-4 border-current pt-4 text-red-600 uppercase">{t('contact_btn')} →</div>
        </div>

      </section>

      {/* PROJECTS SHOWCASE */}
      <section className="relative z-10 py-32 px-6 lg:px-12 max-w-7xl mx-auto border-b-8 border-white">
        <div className="mb-16">
          <h2 className="text-5xl md:text-8xl font-black mb-4 uppercase tracking-tighter">{t('projects_title')}</h2>
          <p className="text-2xl font-bold uppercase border-l-8 border-red-600 pl-6">{t('projects_subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* SERGAK */}
           <a href="https://sergak.netlify.app/" target="_blank" rel="noreferrer" className="block border-4 border-white bg-black group hover:border-red-600 transition-colors p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 font-black uppercase text-sm">SECURITY</div>
              <h3 className="text-3xl font-black text-white group-hover:text-red-600 mb-4">{t('proj_1_title')}</h3>
              <p className="text-xl font-bold text-gray-400">{t('proj_1_desc')}</p>
           </a>

           {/* INFINITY LOFT */}
           <a href="https://infinityloft.uz/" target="_blank" rel="noreferrer" className="block border-4 border-white bg-black group hover:border-red-600 transition-colors p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white text-black px-3 py-1 font-black uppercase text-sm">E-COMMERCE</div>
              <h3 className="text-3xl font-black text-white group-hover:text-red-600 mb-4">{t('proj_2_title')}</h3>
              <p className="text-xl font-bold text-gray-400">{t('proj_2_desc')}</p>
           </a>

           {/* UZBAMALAKA FORM */}
           <a href="https://form.uzbamalaka.uz/" target="_blank" rel="noreferrer" className="block border-4 border-white bg-black group hover:border-red-600 transition-colors p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white text-black px-3 py-1 font-black uppercase text-sm">SYSTEMS</div>
              <h3 className="text-3xl font-black text-white group-hover:text-red-600 mb-4">{t('proj_3_title')}</h3>
              <p className="text-xl font-bold text-gray-400">{t('proj_3_desc')}</p>
           </a>

           {/* UZBAMALAKA MAIN */}
           <a href="https://uzbamalaka.uz/" target="_blank" rel="noreferrer" className="block border-4 border-white bg-black group hover:border-red-600 transition-colors p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white text-black px-3 py-1 font-black uppercase text-sm">PLATFORM</div>
              <h3 className="text-3xl font-black text-white group-hover:text-red-600 mb-4">{t('proj_4_title')}</h3>
              <p className="text-xl font-bold text-gray-400">{t('proj_4_desc')}</p>
           </a>

           {/* DAVOMAT */}
           <a href="https://davomat-s4d0.onrender.com/" target="_blank" rel="noreferrer" className="block border-4 border-white bg-black group hover:border-red-600 transition-colors p-8 relative overflow-hidden md:col-span-2">
              <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 font-black uppercase text-sm">CORE TRACKING</div>
              <h3 className="text-3xl font-black text-white group-hover:text-red-600 mb-4">{t('proj_5_title')}</h3>
              <p className="text-xl font-bold text-gray-400">{t('proj_5_desc')}</p>
           </a>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative z-10 py-32 px-6 lg:px-12 max-w-7xl mx-auto border-b-8 border-white text-center">
        <h2 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter">{t('manifesto_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-2xl font-bold uppercase">
          <div className="p-8 border-4 border-white">{t('manifesto_1')}</div>
          <div className="p-8 border-4 border-white bg-white text-black">{t('manifesto_2')}</div>
          <div className="p-8 border-4 border-white bg-red-600 text-white">{t('manifesto_3')}</div>
          <div className="p-8 border-4 border-white">{t('manifesto_4')}</div>
        </div>
      </section>

      {/* FINAL CONTACT - DIRECT LINE (BRUTAL) */}
      <section id="contact" className="relative z-10 py-32 px-6 lg:px-12 max-w-7xl mx-auto">
         <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <h2 className="text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                {t('footer_title_1')} <br/><span className="text-red-600">{t('footer_title_2')}</span>
              </h2>
              <p className="text-2xl font-bold mb-12 uppercase max-w-2xl">
                {t('footer_subtitle')}
              </p>
            </div>
            
            <div className="flex-1 w-full flex flex-col gap-6">
               <a href="tel:+998870871604" className="block w-full p-8 border-8 border-white bg-black hover:bg-white hover:text-black transition-colors group">
                 <div className="text-xl font-bold text-red-600 mb-2">{t('contact_direct')}</div>
                 <div className="text-4xl md:text-6xl font-black tracking-tighter">+998 87 087 16 04</div>
               </a>
               
               <a href="https://t.me/khusniddinkhamidov" target="_blank" rel="noreferrer" className="block w-full p-8 border-8 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600 transition-colors group">
                 <div className="text-xl font-bold text-black group-hover:text-red-600 mb-2">{t('contact_tg')}</div>
                 <div className="text-4xl md:text-6xl font-black tracking-tighter">@khusniddinkhamidov</div>
               </a>
            </div>
         </div>
      </section>
      
      {/* CUSTOM STYLE FOR MARQUEE */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </main>
  );
}
