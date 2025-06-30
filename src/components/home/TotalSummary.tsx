import styled from 'styled-components';
import { COLORS } from '@constants/colors';

interface TotalSummaryProps {
  total: number;
  income: number;
  spending: number;
}

const TotalSummary = ({ total, income, spending }: TotalSummaryProps) => {
  return (
    <SummaryContainer>
      <TotalText>Total : ₩ {total.toLocaleString()}</TotalText>
      <Row>
        <IncomeText>Income : ₩ {income.toLocaleString()}</IncomeText>
        <SpendingText>Spending : ₩ {spending.toLocaleString()}</SpendingText>
      </Row>
    </SummaryContainer>
  );
};

export default TotalSummary;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1.4rem;
  box-sizing: border-box;
`;

const TotalText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${COLORS.dark_blue};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

const IncomeText = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${COLORS.blue};
`;

const SpendingText = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${COLORS.red};
`;
