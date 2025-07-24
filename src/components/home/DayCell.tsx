import styled from 'styled-components';
import { COLORS, COMMON_COLORS } from '@constants/colors';

interface DayCellProps {
  day: number;
  income?: number;
  expense?: number;
  isNextMonth?: boolean;
  isPrevMonth?: boolean;
  isToday: boolean;
  isSelected: boolean;
  isTodayAndNotSelected: boolean;
  weekIndex: number;
  onClick: () => void;
}

const DayCell = ({
  day,
  income,
  expense,
  isNextMonth,
  isPrevMonth,
  isToday,
  isSelected,
  isTodayAndNotSelected,
  weekIndex,
  onClick,
}: DayCellProps) => {
  return (
    <CellContainer
      $isNextMonth={isNextMonth}
      $isPrevMonth={isPrevMonth}
      onClick={!isNextMonth && !isPrevMonth ? onClick : undefined}
    >
      <DayCircle
        $isToday={isToday}
        $isSelected={isSelected}
        $isTodayAndNotSelected={isTodayAndNotSelected}
        $weekIndex={weekIndex}
      >
        {day}
      </DayCircle>
      {(income || expense) && (
        <AmountWrapper>
          {income !== undefined && income !== 0 && (
            <IncomeText>+ {income.toLocaleString()}</IncomeText>
          )}
          {expense !== undefined && expense !== 0 && (
            <ExpenseText>- {expense.toLocaleString()}</ExpenseText>
          )}
        </AmountWrapper>
      )}
    </CellContainer>
  );
};

export default DayCell;

const CellContainer = styled.div<{
  $isNextMonth?: boolean;
  $isPrevMonth?: boolean;
}>`
  flex: 1;
  min-height: 60px;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  background-color: ${({ $isNextMonth, $isPrevMonth }) =>
    $isNextMonth || $isPrevMonth ? '#F8F8F8' : 'transparent'};
  position: relative;
  box-sizing: border-box;
  cursor: ${({ $isNextMonth, $isPrevMonth }) =>
    $isNextMonth || $isPrevMonth ? 'default' : 'pointer'};

  &:last-child {
    border-right: 1px solid #eee;
  }
`;

const DayCircle = styled.div<{
  $isToday?: boolean;
  $isSelected?: boolean;
  $isTodayAndNotSelected?: boolean;
  $weekIndex: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isSelected }) =>
    $isSelected ? COMMON_COLORS.main : 'transparent'};
  color: ${({ $isSelected, $weekIndex }) =>
    $isSelected
      ? 'white'
      : $weekIndex === 0
        ? COLORS.red
        : $weekIndex === 6
          ? COLORS.blue
          : COLORS.dark_blue};
  border: ${({ $isTodayAndNotSelected }) =>
    $isTodayAndNotSelected ? `1px solid ${COMMON_COLORS.main}` : 'none'};
  border-radius: 0.2rem;
  width: 22px;
  height: 20px;
  line-height: 22px;
  font-size: 0.8rem;
  margin-top: 2px;
  margin-left: 2px;
  box-sizing: border-box;
`;

const AmountWrapper = styled.div`
  width: 100%;
  max-width: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0.3rem;
`;

const IncomeText = styled.div`
  font-size: 0.6rem;
  color: ${COLORS.blue};
`;

const ExpenseText = styled.div`
  font-size: 0.6rem;
  color: ${COLORS.red};
`;
