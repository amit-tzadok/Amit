import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4 border border-purple-500/30">
            Let's Connect
          </span>
          <h2 className="mb-4 text-white">Get In Touch</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Have an exciting project or opportunity? I'd love to hear about it. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                Let's Talk
              </h3>
              <p className="text-slate-300 leading-relaxed">
                I'm always excited to collaborate on innovative projects and explore new opportunities. 
                Whether you have a question, a project idea, or just want to connect, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'your.email@example.com',
                  href: 'mailto:your.email@example.com',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+1 (234) 567-890',
                  href: 'tel:+1234567890',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'San Francisco, CA',
                  href: '#',
                  color: 'from-orange-500 to-red-500'
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.div
                    key={index}
                    className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">{contact.label}</div>
                      <a
                        href={contact.href}
                        className="text-white hover:text-purple-300 transition-colors"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
            >
              <h4 className="mb-2 text-white">Available for Freelance</h4>
              <p className="text-sm text-slate-300">
                Currently accepting select freelance projects. Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-white placeholder-slate-500 transition-all"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-4 h-4 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
              </form>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 -z-10"></div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-slate-400">
            © 2026 Your Name. Crafted with passion and ❤️ using React & Tailwind CSS.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Let's build the future together, one line of code at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}