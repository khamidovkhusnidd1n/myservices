'use client';
import { useState } from 'react';

export default function OrderForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('API Error');
      
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-card border border-border">
         <h3 className="text-3xl font-bold mb-4">THANK YOU.</h3>
         <p className="text-muted mb-8">Your project request has been received. We'll review the details and get back to you soon.</p>
         <button onClick={() => setSuccess(false)} className="px-6 py-3 rounded-full border border-border hover:bg-border transition-colors font-semibold">
           Back to website →
         </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 p-8 md:p-12 rounded-2xl bg-card border border-border">
      <div>
        <h3 className="text-3xl font-bold mb-2">START A PROJECT</h3>
        <p className="text-muted text-sm">Tell us a little about what you're building.</p>
      </div>
      
      <div className="space-y-5">
        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-muted mb-2">Name / Company *</label>
          <input required type="text" name="name" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-muted mb-2">Email *</label>
          <input required type="email" name="contact" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
        </div>
        
        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-muted mb-2">Service *</label>
          <select required name="service" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors">
            <option value="Web Development">Web Development</option>
            <option value="Telegram Bot">Telegram Bot</option>
            <option value="CRM System">CRM System</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Custom Solution">Custom Solution</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-muted mb-2">Budget</label>
            <select name="budget" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors">
              <option value="Under $100">Under $100</option>
              <option value="$100–$300">$100–$300</option>
              <option value="$300–$500">$300–$500</option>
              <option value="$500–$1,000">$500–$1,000</option>
              <option value="$1,000+">$1,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider font-bold text-muted mb-2">Desired Timeline</label>
            <select name="deadline" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors">
              <option value="ASAP">ASAP</option>
              <option value="1–2 weeks">1–2 weeks</option>
              <option value="2–4 weeks">2–4 weeks</option>
              <option value="1–2 months">1–2 months</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-bold text-muted mb-2">Project Description *</label>
          <textarea required name="description" rows={5} placeholder="Tell us about your business, idea, required features and goals..." className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors placeholder:text-neutral-600"></textarea>
        </div>
      </div>

      {error && <div className="text-sm text-red-400">An error occurred. Please try again.</div>}

      <button disabled={loading} type="submit" className="w-full py-4 rounded-xl bg-foreground text-background font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 mt-4">
        {loading ? 'Sending...' : 'SEND PROJECT REQUEST →'}
      </button>
    </form>
  );
}
