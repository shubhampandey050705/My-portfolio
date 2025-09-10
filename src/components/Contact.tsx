import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("YOUR_PUBLIC_KEY"); // replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "shubhampandey050705@gmail.com"
      };

      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);

      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact me directly.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full shadow-lg mb-6"></div>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/10 dark:bg-gray-900/40 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Let's Connect</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.div className="flex items-center space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg">Email</p>
                    <a href="mailto:shubhampandey050705@gmail.com" className="text-yellow-500 dark:text-yellow-400 hover:underline text-lg">
                      shubhampandey050705@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div className="flex items-center space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg">Phone</p>
                    <a href="tel:+917752884451" className="text-yellow-500 dark:text-yellow-400 hover:underline text-lg">
                      +91 7752894451
                    </a>
                  </div>
                </motion.div>

                {/* Github */}
                <motion.div className="flex items-center space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg">GitHub</p>
                    <a href="#" className="text-yellow-500 dark:text-yellow-400 hover:underline text-lg">
                      github.com/shubhampandey050705
                    </a>
                  </div>
                </motion.div>

                {/* LinkedIn */}
                <motion.div className="flex items-center space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg">LinkedIn</p>
                    <a href="#" className="text-yellow-500 dark:text-yellow-400 hover:underline text-lg">
                      linkedin.com/in/https://www.linkedin.com/in/shubham-pandey-0b183a265/
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Quick Response Guarantee</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  I typically respond to all inquiries within 24 hours. For urgent matters, feel free to call me directly.
                </p>
              </div>
            </div>
          </motion.div>

         {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-black/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-800"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-3">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 text-black placeholder-black font-medium bg-white/90"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-3">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 text-black placeholder-black font-medium bg-white/90"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-white mb-3">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 text-black placeholder-black font-medium bg-white/90"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-white mb-3">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-4 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 resize-none text-black placeholder-black font-medium bg-white/90"
                placeholder="Tell me about your project, collaboration ideas, or just say hello!"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black py-4 px-8 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-black/50 rounded-xl flex items-center space-x-2">
            <CheckCircle className="text-yellow-400" size={20} />
            <p className="text-white text-sm">
              Your message will be sent directly to my email. I'll respond as soon as possible!
            </p>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
