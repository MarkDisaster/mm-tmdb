import { Cell, Label, Pie, PieChart } from 'recharts';

import { MovieScoreProps } from './interfaces';

import { getMovieScoreValues } from '../../helpers/getMovieScoreChartValues';
import { getMovieScore } from '../../helpers/getMovieScore';

import { chart_colors } from './constants';

import styles from './style.module.css';

const MovieScore = ({ vote_average }: MovieScoreProps) => {
   const vote_average_value = getMovieScore(vote_average);
   const data_score = getMovieScoreValues(vote_average);

   return (
      <PieChart
         width={125}
         height={125}
      >
         <Pie
            data={data_score}
            cx={62.5} // Střed grafu na ose X
            cy={62.5} // Střed grafu na ose Y
            innerRadius={42} // Vnitřní poloměr
            outerRadius={55} // Vnější poloměr
            fill="#8884d8"
            paddingAngle={0}
            startAngle={90}
            endAngle={450}
            dataKey="value"
         >
            {data_score.map((entry, index) => (
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
                     x="62.5"
                     y="62.5"
                     text-anchor="middle"
                     fill="#808080"
                  >
                     <tspan
                        x="74"
                        dy="17"
                        className={styles.valueLabel}
                     >
                        {vote_average_value}
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
