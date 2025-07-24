import { COLORS, COMMON_COLORS } from '@constants/colors';
import styled from 'styled-components';

interface DateSummaryProps {
  date: number; // 8
  yearMonth: string; // 2024.01
  dayOfWeek: string; // 수요일
  income: number; // 30000
  expense: number; // 78000
  showAmount?: boolean;
}

const DateSummary = ({
  date,
  yearMonth,
  dayOfWeek,
  income,
  expense,
  showAmount = true,
}: DateSummaryProps) => {
  return (
    <SummaryContainer>
      <DateLeft>
        <DateCircle>{date}</DateCircle>
        <DateTextWrapper>
          <YearMonthText>{yearMonth}</YearMonthText>
          <DayText>{dayOfWeek}</DayText>
        </DateTextWrapper>
      </DateLeft>
      {showAmount && (
        <AmountContainer>
          <IncomeText>+ {income.toLocaleString()}</IncomeText>
          <ExpenseText>- {expense.toLocaleString()}</ExpenseText>
        </AmountContainer>
      )}
    </SummaryContainer>
  );
};

export default DateSummary;

const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
`;

const DateLeft = styled.div`
  display: flex;
  align-items: center;
`;

const DateCircle = styled.div`
  background-color: ${COMMON_COLORS.main};
  color: white;
  border-radius: 0.5rem;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1;
`;

const DateTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const YearMonthText = styled.div`
  font-size: 0.8rem;
  color: ${COMMON_COLORS.dark_blue};
  font-weight: bold;
`;

const DayText = styled.div`
  font-size: 0.8rem;
  color: ${COMMON_COLORS.dark_blue};
`;

const AmountContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  font-weight: bold;
  font-size: 1rem;
`;

const IncomeText = styled.div`
  color: ${COLORS.blue};
`;

const ExpenseText = styled.div`
  color: ${COLORS.red};
`;
