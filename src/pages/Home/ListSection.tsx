import styled from 'styled-components';
import DateSummary from '@components/home/DateSummary';
import TransactionItem from '@components/home/TransactionItem';
import { transactionData } from '@constants/dummy';
import { COLORS } from '@constants/colors';

interface Dates {
  currentDate: Date;
}

const ListSection = ({ currentDate }: Dates) => {
  const currentYearMonth = `${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
  const filteredData = transactionData.filter(
    day => day.yearMonth === currentYearMonth,
  );

  return (
    <Container>
      {filteredData.length > 0 ? (
        filteredData.map((dayData, idx) => (
          <DayContainer key={idx}>
            <DateSummary
              date={dayData.date}
              yearMonth={dayData.yearMonth}
              dayOfWeek={dayData.dayOfWeek}
              income={dayData.income}
              expense={dayData.expense}
            />
            {dayData.transactions.map((item, i) => (
              <TransactionItem
                key={i}
                time={item.time}
                category={item.category}
                title={item.title}
                amount={item.amount}
                isIncome={item.isIncome}
              />
            ))}
          </DayContainer>
        ))
      ) : (
        <EmptyText>해당 월의 데이터가 없습니다.</EmptyText>
      )}
    </Container>
  );
};

export default ListSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const EmptyText = styled.div`
  text-align: center;
  color: ${COLORS.gray};
  padding: 1rem;
  font-size: 0.9rem;
`;
