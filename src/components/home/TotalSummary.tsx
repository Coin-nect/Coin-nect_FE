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
      <TotalText>₩ {total.toLocaleString()}</TotalText>
      <Row>
        <IncomeText>수입 : ₩ {income.toLocaleString()}</IncomeText>
        <SpendingText>지출 : ₩ {spending.toLocaleString()}</SpendingText>
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
  font-family: 'NanumHuman-Heavy';
  color: ${COLORS.dark_blue};
`;

const Row = styled.div`
  display: flex;
  gap: 5em;
  margin-top: 0.5rem;
`;

const IncomeText = styled.div`
  font-size: 0.9rem;
  font-family: 'NanumHuman-ExtraBold';
  color: ${COLORS.blue};
`;

const SpendingText = styled.div`
  font-size: 0.9rem;
  font-family: 'NanumHuman-ExtraBold';
  color: ${COLORS.red};
`;
