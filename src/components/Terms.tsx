import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen bg-deep-space-navy text-nebula-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            variant="outline" 
            className="border-stellar-lavender/30 text-stellar-lavender hover:bg-stellar-lavender/10 mb-8"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="font-display text-4xl lg:text-5xl font-semibold text-nebula-white mb-4">
            Terms of Service
          </h1>
          <p className="text-soft-graphite text-lg">
            Last updated: December 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8 text-soft-graphite leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Argonaut Education Inc.'s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the terms of this agreement, you are not authorized to use or access our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">2. Description of Service</h2>
              <p className="mb-4">
                Argonaut Education provides AI-powered educational technology solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SuperfastSAT test preparation platform</li>
                <li>AI tutoring and educational assistance tools</li>
                <li>Educational content and curriculum generation</li>
                <li>Learning analytics and progress tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">3. User Responsibilities</h2>
              <p className="mb-4">
                Users agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use services for lawful purposes only</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to reverse engineer or hack our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by Argonaut Education Inc. and are protected by copyright, trademark, and other intellectual property laws. Users may not reproduce, distribute, or create derivative works without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">5. Limitation of Liability</h2>
              <p>
                Argonaut Education Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the services in the preceding twelve months.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">6. Service Availability</h2>
              <p>
                We strive to maintain service availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue services at any time with or without notice.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@argonauteducation.com" className="text-ion-violet hover:text-stellar-lavender">
                  legal@argonauteducation.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}