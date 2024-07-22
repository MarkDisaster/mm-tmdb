import { Cell, Label, Pie, PieChart } from 'recharts';

import { MovieScoreProps } from './interfaces';

import { getMovieScoreChartValues } from '../../helpers/getMovieScoreChartValues';
import { getMovieScore } from '../../helpers/getMovieScore';

import { chart_colors } from './constants';

import styles from './style.module.css';

const MovieScore = ({ vote_average }: MovieScoreProps) => {
   const voteAverageValues = getMovieScore(vote_average);
   const dataScore = getMovieScoreChartValues(vote_average);

   return (
      <PieChart
         width={80}
         height={80}
      >
         <Pie
            data={dataScore}
            cx={35} // Střed grafu na ose X
            cy={40} // Střed grafu na ose Y
            innerRadius={33} // Vnitřní poloměr
            outerRadius={40} // Vnější poloměr
            fill="#8884d8"
            paddingAngle={0}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            animationEasing="ease"
         >
            {dataScore.map((_, index) => (
               <Cell
                  key={`cell-${index}`}
                  fill={chart_colors[index % chart_colors.length]}
                  stroke="none"
               />
            ))}
            <Label
               value="a"
               position="center"
               content={
                  <text
                     offset="5"
                     x="40"
                     y="40"
                     textAnchor="middle"
                     fill="#808080"
                  >
                     <tspan
                        x="45"
                        dy="17"
                        className={styles.valueLabel}
                     >
                        {voteAverageValues}
                     </tspan>
                     <tspan
                        dx="0"
                        dy="0"
                        className={styles.valueLabelPercentage}
                     >
                        %
                     </tspan>
                  </text>
               }
            />
         </Pie>
      </PieChart>
   );
};

export default MovieScore;
