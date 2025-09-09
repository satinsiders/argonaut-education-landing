import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { quintile: '1', sat1300: 4, ivyPlus: 4 },
  { quintile: '2', sat1300: 7, ivyPlus: 6 },
  { quintile: '3', sat1300: 13, ivyPlus: 9 },
  { quintile: '4', sat1300: 22, ivyPlus: 14 },
  { quintile: '5', sat1300: 54, ivyPlus: 67 }
];

export function EducationGapChart() {
  return (
    <div className="bg-gradient-to-br from-arc-teal/5 to-ion-violet/5 border border-arc-teal/20 rounded-2xl p-6">
      <h4 className="font-display text-2xl text-arc-teal mb-2">Elite Education Access Gap</h4>
      <p className="text-soft-graphite mb-6">Share of students by parent income quintile (%)</p>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="quintile" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#C9D0DB', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#C9D0DB', fontSize: 12 }}
              domain={[0, 70]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0A1220', 
                border: '1px solid #21C7C2', 
                borderRadius: '8px',
                color: '#E9ECF4'
              }}
              formatter={(value: number, name: string) => [
                `${value}%`, 
                name === 'sat1300' ? 'SAT 1300+ scorers' : 'Ivy-Plus actual'
              ]}
              labelFormatter={(label) => `Income Quintile ${label}`}
              labelStyle={{ color: '#C9D0DB' }}
              cursor={{ fill: 'transparent' }}
            />
            <Bar dataKey="sat1300" radius={[2, 2, 0, 0]} fill="#C9598B" />
            <Bar dataKey="ivyPlus" radius={[2, 2, 0, 0]} fill="#4A5C7A" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#C9598B] rounded-sm"></div>
          <span className="text-sm text-soft-graphite">Nationwide 1300+ SAT scorers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#4A5C7A] rounded-sm"></div>
          <span className="text-sm text-soft-graphite">Ivy-Plus actual</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-soft-graphite">Top quintile households represent 67% of Ivy-Plus students</p>
      </div>
    </div>
  );
}