import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const data = [
  {
    name: 'Jan',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Feb',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Mar',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Apr',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'May',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jun',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Jul',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Aug',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Sep',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Oct',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Nov',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: 'Dec',
    "Google AdSense": Math.floor(Math.random() * 5000) + 1000,
    "Facebook Ads": Math.floor(Math.random() * 5000) + 1000,
    "Google Ad Manager": Math.floor(Math.random() * 5000) + 1000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey='Google AdSense' fill='#3B82F6' radius={[4,4,0,0]}/>
        <Bar dataKey='Facebook Ads' fill='#34D399' radius={[4,4,0,0]}/>
        <Bar dataKey='Google Ad Manager' fill='#F87171' radius={[4,4,0,0]}/>
      </BarChart>
    </ResponsiveContainer>
  )
}
