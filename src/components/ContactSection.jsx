import React, { useState } from 'react';
import { LOCATIONS } from '../data/companyData';
import { MapPin, Phone, Mail, User, Send, CheckCircle2, Globe } from 'lucide-react';

export default function ContactSection({ theme, isModal, onClose }) {
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'AMC Maintenance',
    location: 'India',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-20 border-t transition-colors duration-300 ${
      isModal ? 'py-2 border-none' : isDark ? 'bg-redpex-dark border-slate-800/60' : 'bg-white border-slate-200/60'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!isModal && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-redpex-red uppercase tracking-widest block mb-2">Headquarters</span>
            <h2 className={`font-outfit font-black text-3xl sm:text-4xl uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Contact <span className="text-redpex-red">Us</span>
            </h2>
          </div>
        )}

        {/* Office Location Card */}
        {!isModal && (
          <div className="max-w-2xl mx-auto mb-12">
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between ${
                isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div>
                  <div className="text-xs font-bold text-redpex-red uppercase tracking-wider mb-1">{loc.country}</div>
                  <h3 className={`font-outfit font-bold text-xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{loc.city}</h3>
                  <p className={`text-xs leading-relaxed mb-4 flex items-start gap-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <MapPin className="w-4 h-4 text-redpex-red shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </p>
                </div>

                <div className={`pt-3 border-t text-xs space-y-2.5 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 font-semibold text-redpex-red hover:underline">
                    <Phone className="w-4 h-4 text-redpex-red" />
                    <strong className="text-base">{loc.phone}</strong>
                  </a>
                  <div className={`flex items-center gap-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <Mail className="w-3.5 h-3.5 text-redpex-red" />
                    <span>{loc.email}</span>
                  </div>
                  {loc.contactPerson && (
                    <div className={`flex items-center gap-2 pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      <User className="w-3.5 h-3.5 text-amber-500" />
                      <span>{loc.contactPerson}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Minimal Form */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <h3 className={`font-outfit font-bold text-xl uppercase mb-1 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Request Proposal
          </h3>
          <p className={`text-xs text-center mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Get in touch for AMC estimates, equipment supply, or Kerala Fire & Rescue Services NOC compliance.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
              <h4 className="font-outfit font-bold text-lg">Inquiry Received</h4>
              <p className="text-xs text-slate-400">Our engineering team will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="px-4 py-1.5 rounded-lg bg-redpex-red text-white text-xs">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-redpex-red ${
                    isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}
                />
                <input
                  type="text"
                  required
                  placeholder="Company / Property *"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-redpex-red ${
                    isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-redpex-red ${
                    isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-redpex-red ${
                    isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-redpex-red ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                }`}
              >
                <option value="AMC Maintenance">AMC Servicing & Maintenance</option>
                <option value="Fire NOC">Kerala Fire NOC New / Renewal Liaisoning</option>
                <option value="Water Sprinklers">Water Based Sprinklers & Hydrants</option>
                <option value="Gas Suppression">Clean Agent Gas Suppression (FM200/NOVEC)</option>
                <option value="Kitchen Hood">Wet Chemical Kitchen Hood System</option>
                <option value="RETROTEC Test">RETROTEC Door Fan Integrity Test</option>
                <option value="Fire Training">Staff Fire & Safety Hands-On Training</option>
              </select>

              <textarea
                rows="3"
                placeholder="Project Scope Details..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-redpex-red resize-none ${
                  isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
                }`}
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-redpex-red hover:bg-redpex-red-dark text-white font-outfit font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
