import {
   Bar,
   BarChart,
   CartesianGrid,
   Legend,
   Rectangle,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from 'recharts';

import { BarChartProps } from './interfaces';
import { CHART_COLOR } from './constants';

const MovieScore = ({ barChartValues }: BarChartProps) => {
   const dataKey = barChartValues[0] ? Object.keys(barChartValues[0])[1] : '';
   return (
      <ResponsiveContainer
         width="95%"
         height={350}
      >
         <BarChart
            width={200}
            height={350}
            data={barChartValues}
            maxBarSize={50}
            style={{ width: '100%' }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
               dataKey="name"
               padding={{ left: 0, right: 30 }} // Adjust padding to align bars to the left
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
               dataKey={dataKey}
               fill={CHART_COLOR}
               activeBar={<Rectangle />}
            />
         </BarChart>
      </ResponsiveContainer>
   );
};

export default MovieScore;
