import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 group">
            <label className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-100 transition-opacity">
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors font-light text-sm"
              placeholder="Your full name"
              disabled={status === 'loading'}
            />
          </div>
          <div className="space-y-2 group">
            <label className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-100 transition-opacity">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors font-light text-sm"
              placeholder="hello@company.com"
              disabled={status === 'loading'}
            />
          </div>
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-100 transition-opacity">
            Message
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors font-light text-sm resize-none"
            placeholder="Tell us about your architectural challenge..."
            disabled={status === 'loading'}
          />
        </div>

        <div className="flex items-center gap-6">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="group relative inline-flex items-center gap-4 text-[10px] tracking-[0.5em] uppercase font-medium pt-4 disabled:opacity-50"
          >
            <span>{status === 'loading' ? 'Sending...' : 'Submit Request'}</span>
            <div className="w-8 h-[1px] bg-black/20 group-hover:w-12 group-hover:bg-black transition-all duration-500"></div>
          </button>

          {status === 'success' && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-green-600 animate-in fade-in pt-4">
              Message Sent Successfully
            </span>
          )}
          {status === 'error' && (
            <span className="text-[10px] uppercase tracking-[0.2em] text-red-600 animate-in fade-in pt-4">
              Error Sending Message
            </span>
          )}
        </div>
      </form>
    </div>
  );
};
