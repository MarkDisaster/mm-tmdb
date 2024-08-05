import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { BarChartProps } from './interfaces';

const LastReviewsChart = ({ chartValues }: BarChartProps) => {
   if (chartValues.length < 1) return <div>Film zatím nikdo nehodnotil.</div>;
   return (
      <ResponsiveContainer
         width="100%"
         height={100}
         style={{ marginBottom: '-30px' }}
      >
         <LineChart
            width={300}
            height={150}
            data={chartValues}
         >
            <XAxis
               dataKey="name"
               tick={false}
            />
            <Tooltip />
            <Line
               type="monotone"
               dataKey="rating"
               stroke="#0d6efd"
               strokeWidth={3}
            />
         </LineChart>
      </ResponsiveContainer>
   );
};

export default LastReviewsChart;
