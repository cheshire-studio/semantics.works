
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Future: Integrate with backend or email service
        alert('Thank you for reaching out. We will be in touch soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="w-full max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                        <label className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-100 transition-opacity">Name</label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors font-light text-sm"
                            placeholder="Your full name"
                        />
                    </div>
                    <div className="space-y-2 group">
                        <label className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-100 transition-opacity">Email</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors font-light text-sm"
                            placeholder="hello@company.com"
                        />
                    </div>
                </div>

                <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-[0.3em] opacity-30 group-focus-within:opacity-100 transition-opacity">Message</label>
                    <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b border-black/10 py-3 focus:outline-none focus:border-black transition-colors font-light text-sm resize-none"
                        placeholder="Tell us about your architectural challenge..."
                    />
                </div>

                <button
                    type="submit"
                    className="group relative inline-flex items-center gap-4 text-[10px] tracking-[0.5em] uppercase font-medium pt-4"
                >
                    <span>Submit Request</span>
                    <div className="w-8 h-[1px] bg-black/20 group-hover:w-12 group-hover:bg-black transition-all duration-500"></div>
                </button>
            </form>
        </div>
    );
};
