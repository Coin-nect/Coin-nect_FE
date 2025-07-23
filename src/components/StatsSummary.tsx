import styled from 'styled-components';
import { COLORS, COMMON_COLORS } from '@constants/colors';

interface StatsSummaryProps {
  income: number;
  expense: number;
  variant?: 'default' | 'white';
}

const StatsSummary = ({
  income,
  expense,
  variant = 'default',
}: StatsSummaryProps) => {
  const isWhite = variant === 'white';

  return (
    <Container isWhite={isWhite}>
      <Box>
        <Label color={isWhite ? COLORS.black : COLORS.black}>지출</Label>
        <Amount color={isWhite ? COLORS.black : COLORS.black}>
          {expense.toLocaleString()}원
        </Amount>
      </Box>
      <Box>
        <Label color={isWhite ? COMMON_COLORS.main : COLORS.white}>수입</Label>
        <Amount color={isWhite ? COMMON_COLORS.main : COLORS.white}>
          {income.toLocaleString()}원
        </Amount>
      </Box>
    </Container>
  );
};

export default StatsSummary;

const Container = styled.div<{ isWhite: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ isWhite }) =>
    isWhite ? COLORS.white : COMMON_COLORS.main};
  padding: 1rem;
  border-bottom: ${({ isWhite }) => (isWhite ? '1px solid #d9d9d9' : 'none')};
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Label = styled.div<{ color: string }>`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ color }) => color};
  margin-bottom: 0.5rem;
`;

const Amount = styled.div<{ color: string }>`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ color }) => color};
`;
