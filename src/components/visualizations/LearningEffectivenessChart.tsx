import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { method: 'Pre score', effectiveness: 2.7, color: '#4A7A7A' },
  { method: 'Post score, active lecture', effectiveness: 3.6, color: '#4A7A7A' },
  { method: 'Post score, AI', effectiveness: 4.3, color: '#7E84FF' }
];

export function LearningEffectivenessChart() {
  return (
    <div className="bg-gradient-to-br from-stellar-lavender/5 to-ion-violet/10 border border-stellar-lavender/20 rounded-2xl p-6">
      <h4 className="font-display text-2xl text-stellar-lavender mb-2">Learning Effectiveness</h4>
      <p className="text-soft-graphite mb-6">Score improvement by teaching method</p>
      
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
            <XAxis 
              dataKey="method"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#C9D0DB', fontSize: 11 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#C9D0DB', fontSize: 12 }}
              domain={[0, 5]}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0A1220', 
                border: '1px solid #A8B0FF', 
                borderRadius: '8px',
                color: '#E9ECF4'
              }}
              formatter={(value: number) => [value.toFixed(1), 'Score']}
              labelStyle={{ color: '#E9ECF4' }}
              itemStyle={{ color: '#E9ECF4' }}
              cursor={{ fill: 'transparent' }}
            />
            <Bar dataKey="effectiveness" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 flex justify-between text-sm text-soft-graphite">
        <span>(Harvard, 2024)</span>
        <span className="text-ion-violet font-medium">+59% improvement with AI</span>
      </div>
      
      <div className="mt-2 text-center">
        <div className="inline-block bg-soft-graphite/10 px-3 py-1 rounded-full">
          <span className="text-xs text-soft-graphite">Baseline knowledge: 2.7</span>
        </div>
      </div>
    </div>
  );
}