import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { BarChartProps } from './interfaces';
import { CHART_COLOR } from './constants';

import styles from './style.module.css';

const LastReviewsChart = ({ chartValues }: BarChartProps) => {
   if (chartValues.length < 1) return <div>Film zatím nikdo nehodnotil.</div>;
   return (
      <ResponsiveContainer
         width="100%"
         height={100}
         className={styles.responsiveContainer}
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
               stroke={CHART_COLOR}
               strokeWidth={3}
            />
         </LineChart>
      </ResponsiveContainer>
   );
};

export default LastReviewsChart;
