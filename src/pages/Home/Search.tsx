import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SearchHeader, DateSummary, TransactionItem } from '@components/index';
import { transactionData, DayData } from '@constants/dummy';
import { COLORS } from '@constants/colors';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [resultList, setResultList] = useState<DayData[]>([]);

  const handleSearch = () => {
    if (!searchText.trim()) return;

    const filtered = transactionData
      .map(day => {
        const matchedTransactions = day.transactions.filter(t =>
          t.title.includes(searchText),
        );
        if (matchedTransactions.length > 0) {
          return {
            ...day,
            transactions: matchedTransactions,
            income: matchedTransactions
              .filter(t => t.isIncome)
              .reduce((sum, t) => sum + t.amount, 0),
            expense: matchedTransactions
              .filter(t => !t.isIncome)
              .reduce((sum, t) => sum + t.amount, 0),
          };
        }
        return null;
      })
      .filter(Boolean) as DayData[];

    setResultList(filtered);
  };

  return (
    <Container>
      <SearchHeader
        text={searchText}
        onSearch={handleSearch}
        onTextChange={setSearchText}
      />
      {resultList.length > 0 ? (
        resultList.map((day, idx) => (
          <DayContainer key={idx}>
            <DateSummary
              date={day.date}
              yearMonth={day.yearMonth}
              dayOfWeek={day.dayOfWeek}
              income={day.income}
              expense={day.expense}
            />
            {day.transactions.map(item => (
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
          </DayContainer>
        ))
      ) : (
        <EmptyText>검색 결과가 없습니다.</EmptyText>
      )}
    </Container>
  );
};

export default SearchPage;

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
