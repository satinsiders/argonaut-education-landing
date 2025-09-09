import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { year: '2018', shortage: 110000 },
  { year: '2022', shortage: 163000 },
  { year: '2023', shortage: 286000 },
  { year: '2025', shortage: 368000 },
];

export function TeacherShortageChart() {
  return (
    <div className="bg-gradient-to-br from-ion-violet/5 to-stellar-lavender/5 border border-ion-violet/20 rounded-2xl p-6">
      <h4 className="font-display text-2xl text-ion-violet mb-2">Teacher Shortage Crisis</h4>
      <p className="text-soft-graphite mb-6">Number of Unqualified Teachers (in thousands)</p>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="year" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#C9D0DB', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#C9D0DB', fontSize: 12 }}
              tickFormatter={(value) => `${value/1000}K`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0A1220', 
                border: '1px solid #A8B0FF', 
                borderRadius: '8px',
                color: '#E9ECF4'
              }}
              formatter={(value: number) => [`${(value/1000).toFixed(0)}K teachers`, 'Shortage']}
              labelStyle={{ color: '#E9ECF4' }}
              itemStyle={{ color: '#E9ECF4' }}
              cursor={{ fill: 'transparent' }}
            />
            <Bar dataKey="shortage" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#7E84FF' : '#A8B0FF'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-soft-graphite">(Learning Policy Institute)</p>
      </div>
    </div>
  );
}