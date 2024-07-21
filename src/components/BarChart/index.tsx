import {
   Bar,
   BarChart,
   CartesianGrid,
   Legend,
   Rectangle,
   Tooltip,
   XAxis,
   YAxis,
} from 'recharts';

import { BarChartProps } from './interfaces';
import { CHART_COLOR } from './constants';

const MovieScore = ({ barChartValues }: BarChartProps) => {
   const dataKey = barChartValues[0] ? Object.keys(barChartValues[0])[1] : '';
   return (
      <BarChart
         width={1600}
         height={350}
         data={barChartValues}
         maxBarSize={75}
      >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar
            dataKey={dataKey}
            fill={CHART_COLOR}
            activeBar={
               <Rectangle
                  fill="gold"
                  stroke="purple"
               />
            }
         />
      </BarChart>
   );
};

export default MovieScore;
