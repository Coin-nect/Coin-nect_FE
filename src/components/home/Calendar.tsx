import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '@constants/colors';
import DayCell from './DayCell';

interface DayData {
  date: number;
  income?: number;
  expense?: number;
  isNextMonth?: boolean;
  isPrevMonth?: boolean;
}

interface CalendarProps {
  data?: DayData[];
  currentDate: Date;
  // eslint-disable-next-line no-unused-vars
  onSelectDate?: (selectedDay: DayData) => void;
}

const Calendar = ({ data = [], currentDate, onSelectDate }: CalendarProps) => {
  const today = new Date();
  const todayDate = today.getDate();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  const startWeekDay = firstDay.getDay();
  const daysInMonth = lastDay.getDate();

  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const daysInPrevMonth = prevLastDay.getDate();

  const dayDataMap = useMemo(() => {
    const map: { [key: number]: DayData } = {};
    data.forEach(item => {
      map[item.date] = item;
    });
    return map;
  }, [data]);

  const cells: DayData[] = [];

  for (let i = startWeekDay - 1; i >= 0; i--) {
    cells.push({
      date: daysInPrevMonth - i,
      isPrevMonth: true,
    });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({
      date: d,
      income: dayDataMap[d]?.income,
      expense: dayDataMap[d]?.expense,
    });
  }

  const remaining = cells.length % 7;
  if (remaining !== 0) {
    const nextMonthDays = 7 - remaining;
    for (let i = 1; i <= nextMonthDays; i++) {
      cells.push({
        date: i,
        isNextMonth: true,
      });
    }
  }

  const rows: DayData[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }

  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  const handleSelect = (cell: DayData) => {
    setSelectedDay(cell.date);
    if (onSelectDate) onSelectDate(cell);
  };

  return (
    <CalendarContainer>
      <WeekRow>
        {weekDays.map(day => (
          <WeekDay key={day} $day={day}>
            {day}
          </WeekDay>
        ))}
      </WeekRow>
      {rows.map((week, i) => (
        <WeekRow key={i}>
          {week.map((cell, idx) => (
            <DayCell
              key={idx}
              day={cell.date}
              income={cell.income}
              expense={cell.expense}
              isNextMonth={cell.isNextMonth}
              isPrevMonth={cell.isPrevMonth}
              isToday={
                cell.date === todayDate &&
                !cell.isNextMonth &&
                !cell.isPrevMonth
              }
              isSelected={
                selectedDay === null
                  ? cell.date === todayDate &&
                    !cell.isNextMonth &&
                    !cell.isPrevMonth
                  : selectedDay === cell.date &&
                    !cell.isNextMonth &&
                    !cell.isPrevMonth
              }
              isTodayAndNotSelected={
                selectedDay !== null &&
                cell.date === todayDate &&
                selectedDay !== cell.date &&
                !cell.isNextMonth &&
                !cell.isPrevMonth
              }
              weekIndex={idx}
              onClick={() =>
                !cell.isNextMonth && !cell.isPrevMonth && handleSelect(cell)
              }
            />
          ))}
        </WeekRow>
      ))}
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

const WeekRow = styled.div`
  display: flex;
`;

const WeekDay = styled.div<{ $day: string }>`
  flex: 1;
  text-align: center;
  padding: 6px 0;
  color: ${({ $day }) =>
    $day === '일'
      ? COLORS.red
      : $day === '토'
        ? COLORS.blue
        : COLORS.dark_gray};
  font-size: 0.8rem;
`;
