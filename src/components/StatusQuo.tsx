import { Card } from "./ui/card";
import { TeacherShortageChart } from "./visualizations/TeacherShortageChart";
import { EducationGapChart } from "./visualizations/EducationGapChart";
import { TrendingDown, Users, GraduationCap } from "lucide-react";

export function StatusQuo() {
  return (
    <section id="status-quo" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-stellar-lavender/50"></div>
              <div className="w-4 h-4 bg-stellar-lavender rounded-full"></div>
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-stellar-lavender/50"></div>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-semibold text-nebula-white mb-6">
              The Status Quo
            </h2>
            <p className="text-xl text-soft-graphite max-w-2xl mx-auto">
              Education faces unprecedented challenges that traditional solutions cannot address
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <TeacherShortageChart />
          <EducationGapChart />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-red-500/5 to-red-600/5 border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-display text-2xl text-red-400">Teacher Crisis</h3>
            </div>
            <p className="text-soft-graphite leading-relaxed text-lg">
              U.S. shortages approaching <span className="text-nebula-white font-semibold">~368,000</span> by 2025, 
              hitting <span className="text-red-400">low income communities</span> hardest.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-orange-500/5 to-orange-600/5 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-display text-2xl text-orange-400">Declining Interest</h3>
            </div>
            <p className="text-soft-graphite leading-relaxed text-lg">
              Teaching prestige at <span className="text-orange-400 font-semibold">50 year lows</span>. 
              Fewer qualified candidates entering the profession each year.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-display text-2xl text-yellow-400">Inequality Amplifies</h3>
            </div>
            <p className="text-soft-graphite leading-relaxed text-lg">
              Private tutoring grows where resources concentrate, 
              <span className="text-yellow-400 font-semibold"> widening achievement gaps</span>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}