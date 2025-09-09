import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export function Privacy() {
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
            Privacy Policy
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
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                Argonaut Education Inc. ("we," "our," or "us") collects information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact us through our website contact form</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Participate in surveys or provide feedback</li>
                <li>Use our SuperfastSAT platform or other services</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about our products and services</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-nebula-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@argonauteducation.com" className="text-ion-violet hover:text-stellar-lavender">
                  privacy@argonauteducation.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}