'use client';
import { motion } from 'framer-motion';

export default function ServiceCard({ number, title, price, description }: { number: string, title: string, price: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="group relative p-8 rounded-2xl bg-card border border-border hover:border-white/30 transition-all overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-5xl font-extrabold text-border group-hover:text-white/20 transition-colors mb-4">{number}</div>
        <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{title}</h3>
        <p className="text-sm text-muted mb-8 flex-1">{description}</p>
        <div className="flex justify-between items-center border-t border-border/50 pt-4 mt-auto">
          <span className="text-lg font-semibold text-foreground">{price}</span>
          <span className="text-blue-400 font-bold group-hover:translate-x-2 transition-transform">Explore &rarr;</span>
        </div>
      </div>
    </motion.div>
  );
}
