import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Inquiry from ${formData.name}${formData.company ? ` at ${formData.company}` : ''}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:jason@satinsiders.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl lg:text-6xl font-semibold text-nebula-white mb-6">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ion-violet via-stellar-lavender to-arc-teal mx-auto mb-6"></div>
          <p className="text-xl text-soft-graphite max-w-2xl mx-auto leading-relaxed">
            Ready to discuss the future of AI education? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-stellar-lavender/10 to-arc-teal/5 border border-stellar-lavender/30 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-nebula-white font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input-background border-stellar-lavender/20 text-nebula-white placeholder:text-soft-graphite focus:border-ion-violet"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-nebula-white font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input-background border-stellar-lavender/20 text-nebula-white placeholder:text-soft-graphite focus:border-ion-violet"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-nebula-white font-medium">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-input-background border-stellar-lavender/20 text-nebula-white placeholder:text-soft-graphite focus:border-ion-violet"
                    placeholder="Your organization"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-nebula-white font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-input-background border-stellar-lavender/20 text-nebula-white placeholder:text-soft-graphite focus:border-ion-violet resize-none"
                    placeholder="Tell us about your interest in AI education, partnership opportunities, or any questions you have..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-ion-violet hover:bg-ion-violet/90 text-deep-space-navy font-medium"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Direct Contact */}
            <Card className="bg-gradient-to-br from-ion-violet/10 to-ion-violet/5 border border-ion-violet/30 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-ion-violet/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-ion-violet" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-nebula-white mb-2">Direct Email</h3>
                  <p className="text-soft-graphite mb-3">
                    Reach out directly for partnerships, investment inquiries, or technical discussions.
                  </p>
                  <a 
                    href="mailto:jason@satinsiders.com" 
                    className="text-ion-violet hover:text-stellar-lavender transition-colors font-medium"
                  >
                    jason@satinsiders.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Investment & Partnerships */}
            <Card className="bg-gradient-to-br from-arc-teal/10 to-arc-teal/5 border border-arc-teal/30 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-arc-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-arc-teal" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-nebula-white mb-2">Schedule a Call</h3>
                  <p className="text-soft-graphite mb-3">
                    For investors, potential partners, and institutions interested in deeper collaboration.
                  </p>
                  <p className="text-arc-teal font-medium">
                    Contact us to schedule a demo and discussion
                  </p>
                </div>
              </div>
            </Card>

            {/* Company Info */}
            <Card className="bg-gradient-to-br from-stellar-lavender/10 to-stellar-lavender/5 border border-stellar-lavender/30 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-stellar-lavender/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-stellar-lavender" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-nebula-white mb-2">Company</h3>
                  <p className="text-soft-graphite mb-2">
                    Argonaut Education Inc.
                  </p>
                  <p className="text-stellar-lavender font-medium">
                    Building the future of personalized AI education
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}