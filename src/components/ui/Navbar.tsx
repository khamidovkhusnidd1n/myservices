'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function Navbar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const currentPath = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-4 shadow-xl">
        <div className="text-xl font-bold tracking-widest text-white">
          KHAMIDOV
        </div>
        <div className="flex gap-4">
          <select 
            value={locale} 
            onChange={changeLocale}
            className="bg-transparent text-white text-sm outline-none border border-white/20 rounded-lg px-2 py-1 cursor-pointer focus:border-white/50 transition-colors"
          >
            <option value="uz" className="bg-neutral-900">UZ</option>
            <option value="ru" className="bg-neutral-900">RU</option>
            <option value="en" className="bg-neutral-900">EN</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
