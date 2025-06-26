import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceArea } from 'recharts';
import { Info } from 'lucide-react';

const seagrassData = [
  { temp: 15, activity: 0 },
  { temp: 20, activity: 0.2 },
  { temp: 24, activity: 0.8 },
  { temp: 27, activity: 1 },
  { temp: 30, activity: 0.8 },
  { temp: 33, activity: 0.3 },
  { temp: 36, activity: 0.1 },
  { temp: 38, activity: 0 },
];

export default function ToleranzkurveSeegras() {
  return (
    <main className="min-h-screen bg-[#504F88] text-white p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-[#514F90] rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">🌿 Toleranzkurve – Seegras</h1>
        <p className="text-center text-white/80 mb-6 text-sm">Wachstumsverhalten in Abhängigkeit der Wassertemperatur</p>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={seagrassData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#777" />
            <XAxis dataKey="temp" stroke="#fff">
              <Label value="Temperatur (°C)" offset={-5} position="insideBottom" fill="#fff" />
            </XAxis>
            <YAxis stroke="#fff" domain={[0, 1]}>
              <Label value="Aktivität" angle={-90} position="insideLeft" fill="#fff" />
            </YAxis>
            <Tooltip contentStyle={{ backgroundColor: '#4a4a8f', borderColor: '#fff', color: '#fff' }} labelStyle={{ color: '#fff' }} />
            <ReferenceArea x1={24} x2={30} strokeOpacity={0.2} fill="#22c55e" fillOpacity={0.2} />
            <ReferenceArea x1={21} x2={24} strokeOpacity={0.2} fill="#facc15" fillOpacity={0.15} />
            <ReferenceArea x1={30} x2={33} strokeOpacity={0.2} fill="#facc15" fillOpacity={0.15} />
            <ReferenceArea x1={15} x2={21} strokeOpacity={0.2} fill="#ef4444" fillOpacity={0.1} />
            <ReferenceArea x1={33} x2={38} strokeOpacity={0.2} fill="#ef4444" fillOpacity={0.1} />
            <Line type="monotone" dataKey="activity" stroke="#fff" strokeWidth={3} dot={{ r: 5, stroke: '#fff', fill: '#22c55e' }} />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-6 text-sm text-white/90 bg-white/10 rounded-xl p-4 flex gap-2 items-start">
          <Info className="w-5 h-5 mt-0.5 text-white/70" />
          <p>
            Seegras wächst optimal bei Temperaturen zwischen <strong>24 °C und 30 °C</strong>. Unter 21 °C beginnt oxidativer Stress,
            über 33 °C drohen Hitzeschäden.
          </p>
        </div>
      </div>
    </main>
  );
}
