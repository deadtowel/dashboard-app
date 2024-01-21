'use client';

import styles from './chart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Sun',
    Visits: 4000,
    Clicks: 2400,
  },
  {
    name: 'Mon',
    Visits: 3000,
    Clicks: 1398,
  },
  {
    name: 'Tue',
    Visits: 2000,
    Clicks: 3800,
  },
  {
    name: 'Wed',
    Visits: 2780,
    Clicks: 3908,
  },
  {
    name: 'Thu',
    Visits: 1890,
    Clicks: 4800,
  },
  {
    name: 'Fri',
    Visits: 2390,
    Clicks: 3800,
  },
  {
    name: 'Sat',
    Visits: 3490,
    Clicks: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width='100%' height='90%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
          <Legend />
          <Line
            type='monotone'
            dataKey='Visits'
            stroke='#8884d8'
            strokeDasharray='5 5'
          />
          <Line
            type='monotone'
            dataKey='Clicks'
            stroke='#82ca9d'
            strokeDasharray='3 4 5 2'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
