import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Calendar, DateSummary, TransactionItem } from '@components/index';
import { GrMoney } from 'react-icons/gr';
import { COLORS } from '@constants/colors';
import { transactionData, DayData } from '@constants/dummy';

interface Dates {
  currentDate: Date;
}

const CalendarSection = ({ currentDate }: Dates) => {
  const navigate = useNavigate();
  const today = new Date().getDate();
  const [selectedDay, setSelectedDay] = useState<number | null>(today);

  const selectedData: DayData | undefined = transactionData.find(
    d =>
      d.date === selectedDay &&
      d.yearMonth ===
        `${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}`,
  );

  const dateObj = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    selectedDay ?? 1,
  );
  const weekDayText = dateObj.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <Container>
      <Calendar
        data={transactionData}
        currentDate={currentDate}
        onSelectDate={day => setSelectedDay(day.date)}
      />
      <DateSummary
        date={selectedDay ?? 1}
        yearMonth={`${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}`}
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
          <GrMoney size={36} color={COLORS.gray} />
          <EmptyText>데이터가 없습니다</EmptyText>
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
  justify-content: center;
  height: 100px;
  position: relative;
`;

const EmptyText = styled.div`
  margin-top: 0.5rem;
  color: ${COLORS.gray};
  font-size: 1rem;
`;
