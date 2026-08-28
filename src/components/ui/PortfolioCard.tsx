'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PortfolioCard({ imageSrc, title, category }: { imageSrc: string, title: string, category: string }) {
  return (
    <motion.div 
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card border border-border h-full min-h-[300px]"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-400 mb-2 block uppercase">{category}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <span className="inline-flex items-center gap-2 text-sm font-bold bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
               View Case Study <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
             </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
