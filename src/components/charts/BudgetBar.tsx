import { COLORS } from '@constants/colors';
import styled from 'styled-components';

interface BudgetBarProps {
  total: number;
  used: number;
}

const BudgetBar = ({ total, used }: BudgetBarProps) => {
  const usedPercent = (used / total) * 100;

  return (
    <BarGraphContainer>
      <BarWrapper>
        <BarBackground>
          <BarUsed style={{ width: `${usedPercent}%` }} />
        </BarBackground>
      </BarWrapper>
    </BarGraphContainer>
  );
};

export default BudgetBar;

const BarGraphContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const BarBackground = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ecebeb;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const BarUsed = styled.div`
  height: 100%;
  background-color: ${COLORS.dark_blue};
  border-radius: 20px;
  transition: width 0.3s ease-in-out;
`;
