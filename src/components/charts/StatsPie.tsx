import { PieChart, Pie, Cell } from 'recharts';
import styled from 'styled-components';
import { COLORS } from '@constants/colors';

interface CategoryData {
  name: string;
  value: number;
  color: string;
}

interface StatsPieProps {
  data: CategoryData[];
  // eslint-disable-next-line no-unused-vars
  onSelect: (category: string | null) => void;
  activeCategory: string | null;
}

const StatsPie = ({ data, onSelect, activeCategory }: StatsPieProps) => {
  const handleClick = (entry: CategoryData) => {
    const newCategory = entry.name === activeCategory ? null : entry.name;
    onSelect(newCategory);
  };

  const activeItem = data.find(item => item.name === activeCategory);

  return (
    <ChartContainer>
      <PieChart width={260} height={260}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          dataKey="value"
          cornerRadius={20}
        >
          {data.map((entry, index) => {
            return (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                onClick={() => handleClick(entry)}
              />
            );
          })}
        </Pie>
      </PieChart>

      {activeItem && <CenterLabel>{activeItem.value}%</CenterLabel>}
    </ChartContainer>
  );
};

export default StatsPie;

const ChartContainer = styled.div`
  position: relative;
  width: 260px;
  height: 260px;
  box-sizing: border-box;
  svg {
    outline: none;
  }
`;

const CenterLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.dark_blue};
`;
