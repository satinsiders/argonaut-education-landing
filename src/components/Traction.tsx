import { motion } from "motion/react";
import { TrendingUp, DollarSign, BarChart3, Target } from "lucide-react";

export function Traction() {
  const revenueData = [
    { quarter: "Sep '24", amount: 3, label: "$3K" },
    { quarter: "Q4 '24", amount: 44, label: "$44K" },
    { quarter: "Q1 '25", amount: 110, label: "$110K" },
    { quarter: "Q2 '25", amount: 194, label: "$194K" }
  ];

  return (
    <section id="traction" className="py-24 relative bg-gradient-to-b from-deep-space-navy to-deep-space-navy/95">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-semibold text-nebula-white mb-6">
            Proven Traction
          </h2>
          <p className="text-xl text-soft-graphite max-w-3xl mx-auto leading-relaxed">
            Starting with SuperfastSAT, we're demonstrating rapid growth and market validation as we build toward our comprehensive AI education platform.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-ion-violet to-arc-teal mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Revenue Growth Visualization */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-stellar-lavender/10 to-arc-teal/5 rounded-2xl p-8 border border-stellar-lavender/20">
                <h3 className="text-2xl font-display font-semibold text-nebula-white mb-8 text-center">
                  Quarterly Revenue Growth
                </h3>
                
                {/* Revenue Bars */}
                <div className="space-y-6">
                  {revenueData.map((item, index) => (
                    <motion.div 
                      key={item.quarter}
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-soft-graphite font-medium">{item.quarter}</span>
                        <span className="text-nebula-white font-semibold text-lg">{item.label}</span>
                      </div>
                      <div className="relative h-8 bg-deep-space-navy/50 rounded-lg overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-ion-violet to-arc-teal rounded-lg"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.amount / 200) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Growth Rate Highlight */}
                <motion.div 
                  className="mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center space-x-2 bg-deep-space-navy/70 rounded-full px-6 py-3 border border-arc-teal/30">
                    <TrendingUp className="text-arc-teal" size={20} />
                    <span className="text-arc-teal font-semibold">6,366% Growth</span>
                    <span className="text-soft-graphite">in 9 months</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Traction Metrics */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-ion-violet/10 to-stellar-lavender/5 rounded-xl p-6 border border-ion-violet/20">
                <div className="flex items-start space-x-4">
                  <DollarSign className="text-ion-violet mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-nebula-white mb-2">Revenue Acceleration</h4>
                    <p className="text-soft-graphite leading-relaxed">
                      Quarterly revenues are compounding fast, demonstrating strong product-market fit and scalable business model validation through our initial SuperfastSAT offering.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-arc-teal/10 to-stellar-lavender/5 rounded-xl p-6 border border-arc-teal/20">
                <div className="flex items-start space-x-4">
                  <BarChart3 className="text-arc-teal mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-nebula-white mb-2">Market Validation</h4>
                    <p className="text-soft-graphite leading-relaxed">
                      Our rapid growth trajectory proves demand for AI-powered education solutions, providing the foundation for expanding into our comprehensive multi-agent teaching platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-stellar-lavender/10 to-ion-violet/5 rounded-xl p-6 border border-stellar-lavender/20">
                <div className="flex items-start space-x-4">
                  <Target className="text-stellar-lavender mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-nebula-white mb-2">Strategic Foundation</h4>
                    <p className="text-soft-graphite leading-relaxed">
                      SuperfastSAT serves as our proof of concept and revenue base, funding the development of our broader AI education ecosystem while establishing key partnerships and user insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* SuperfastSAT Reference */}
              <motion.div 
                className="bg-deep-space-navy/50 rounded-xl p-6 border border-soft-graphite/20 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-soft-graphite text-center">
                  <span className="text-nebula-white font-semibold">Where we're starting:</span> Learn more about our current success at{" "}
                  <a 
                    href="https://www.superfastsat.com/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-arc-teal hover:text-stellar-lavender transition-colors duration-300 underline"
                  >
                    SuperfastSAT.com
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}