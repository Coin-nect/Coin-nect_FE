import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useMemo } from 'react';
import { Calendar, DateSummary, TransactionItem } from '@components/index';
import { COLORS } from '@constants/colors';
import { transactionData, DayData } from '@constants/dummy';

interface Dates {
  currentDate: Date;
  // eslint-disable-next-line no-unused-vars
  setCurrentDate: (date: Date) => void;
}

const CalendarSection = ({ currentDate, setCurrentDate }: Dates) => {
  const navigate = useNavigate();
  const today = new Date();

  const isSameMonthAsToday =
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  const [selectedDay, setSelectedDay] = useState<number>(
    isSameMonthAsToday ? today.getDate() : 1,
  );

  const yearMonthString = useMemo(() => {
    return `${currentDate.getFullYear()}.${String(
      currentDate.getMonth() + 1,
    ).padStart(2, '0')}`;
  }, [currentDate]);

  const selectedData: DayData | undefined = useMemo(() => {
    return transactionData.find(
      d => d.date === selectedDay && d.yearMonth === yearMonthString,
    );
  }, [selectedDay, yearMonthString]);

  const weekDayText = useMemo(() => {
    const dateObj = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      selectedDay,
    );
    return dateObj.toLocaleDateString('ko-KR', { weekday: 'long' });
  }, [currentDate, selectedDay]);

  const filteredTransactionData = useMemo(() => {
    return transactionData.filter(d => d.yearMonth === yearMonthString);
  }, [yearMonthString]);

  return (
    <Container>
      <Calendar
        data={filteredTransactionData}
        currentDate={currentDate}
        onSelectDate={day => setSelectedDay(day.date)}
        onChangeMonth={(newDate: Date) => {
          setCurrentDate(newDate);

          const isSameMonthAsToday =
            newDate.getMonth() === today.getMonth() &&
            newDate.getFullYear() === today.getFullYear();

          setSelectedDay(isSameMonthAsToday ? today.getDate() : 1);
        }}
      />
      <DateSummary
        date={selectedDay}
        yearMonth={yearMonthString}
        dayOfWeek={weekDayText}
        income={selectedData?.income ?? 0}
        expense={selectedData?.expense ?? 0}
      />
      {selectedData && selectedData.transactions.length > 0 ? (
        <div>
          {selectedData.transactions.map((item, idx) => (
            <TransactionItem
              key={idx}
              id={item.id}
              time={item.time}
              category={item.category}
              title={item.title}
              amount={item.amount}
              isIncome={item.isIncome}
              onClick={id =>
                navigate(`/view/${id}`, {
                  state: { id },
                })
              }
            />
          ))}
        </div>
      ) : (
        <EmptyContainer>
          <EmptyText>NO DATA</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
};

export default CalendarSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyText = styled.div`
  margin: 0.5rem;
  color: ${COLORS.gray};
  font-size: 1.2rem;
  font-family: 'NanumHuman-ExtraLight';
`;
