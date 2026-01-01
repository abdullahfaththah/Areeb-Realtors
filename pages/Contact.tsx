import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, X, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ---------------------------------------------------------
  // TODO: Replace these with your actual EmailJS credentials
  // Get them from https://dashboard.emailjs.com/
  // ---------------------------------------------------------
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g., 'service_xyz'
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_abc'
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g., 'user_123456'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If keys are placeholders, we simulate success for demonstration purposes
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      console.warn("EmailJS keys are missing. Simulating success.");
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }, 1500);
      return;
    }

    // Actual Email Sending Logic
    if (formRef.current) {
      emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setIsSubmitting(false);
        alert("Something went wrong. Please try again later.");
      });
    }
  };

  return (
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Get in Touch</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Ready to find your dream property or sell your asset? Contact our team for a personalized consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-colors">
              <h3 className="text-2xl font-serif text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-500/10 rounded-lg text-gold-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wide">Phone</p>
                    <p className="text-white text-lg font-medium">+94 77 123 4567</p>
                    <p className="text-white text-lg font-medium">+94 11 222 3333</p>
                  </div>
                </div>

                {/* WhatsApp Highlight */}
                <a 
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-all group"
                >
                  <div className="p-3 bg-green-500 text-black rounded-lg">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-green-400 uppercase tracking-wide font-bold mb-1">Fastest Response</p>
                    <p className="text-white text-lg font-bold group-hover:text-green-400 transition-colors">
                      Instant WhatsApp Support
                    </p>
                    <p className="text-slate-400 text-sm">Fast Response Guaranteed</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-500/10 rounded-lg text-gold-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wide">Email</p>
                    <p className="text-white text-lg font-medium">creatigence@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-500/10 rounded-lg text-gold-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wide">Head Office</p>
                    <p className="text-white text-lg font-medium">
                      No. 123, Galle Road,<br />
                      Colombo 03, Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative">
            <h3 className="text-2xl font-serif text-white mb-6">Send us a Message</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-400 text-sm mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-400 transition-colors" 
                  placeholder="I am interested in..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-gold-500 text-black font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-gold-400'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={18} />}
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-slate-900 border border-gold-500/30 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center"
            >
              <button 
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-emerald-500" size={40} />
              </div>

              <h3 className="font-serif text-2xl text-white mb-3">Thank You!</h3>
              <p className="text-slate-300 leading-relaxed">
                Thank you for contacting us. <br/> We will contact you soon.
              </p>

              <button 
                onClick={() => setShowSuccess(false)}
                className="mt-8 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;