import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  CalendarHeader,
  BottomNav,
  ContentContainer,
  StatsPie,
  CategoryItem,
  DateSummary,
  TransactionItem,
  StatsSummary,
} from '@components/index';
import { categories as categoryIcons } from '@constants/categories';
import { transactionData } from '@constants/dummy';
import { CHART_COLORS } from '@constants/colors';

const rawPieData = [
  { name: '식비', value: 50, amount: 200000 },
  { name: '미용/쇼핑', value: 20, amount: 100000 },
  { name: '기타', value: 20, amount: 100000 },
  { name: '문화/여가', value: 10, amount: 20000 },
];

// value 기준 정렬 후 색상 자동 지정
const sortedPieData = [...rawPieData]
  .sort((a, b) => b.value - a.value)
  .map((item, index) => ({
    ...item,
    color: CHART_COLORS[index % CHART_COLORS.length],
  }));

const Stats = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const selectedData = sortedPieData.find(cat => cat.name === selectedCategory);

  const getCategoryIcon = (label: string, color: string, size = 24) => {
    const cat = categoryIcons.find(c => c.label === label);
    return cat ? cat.icon(color, size) : null;
  };

  // 현재 연월 기준 데이터 필터
  const currentYearMonth = `${currentDate.getFullYear()}.${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
  const filteredData = transactionData.filter(
    day => day.yearMonth === currentYearMonth,
  );

  return (
    <Container>
      <CalendarHeader
        showLeftIcon={false}
        showRightIcon={false}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        onClick={() => navigate('/analysis')}
      />
      <StatsSummary income={1000000} expense={1000000} variant="default" />
      <ContentContainer>
        <StatsPie
          data={sortedPieData}
          onSelect={setSelectedCategory}
          activeCategory={selectedCategory}
        />

        <ListContainer>
          {!selectedCategory ? (
            sortedPieData.map(cat => (
              <CategoryItem
                key={cat.name}
                icon={getCategoryIcon(cat.name, cat.color)}
                label={cat.name}
                percent={cat.value}
                amount={cat.amount}
                onClick={category => setSelectedCategory(category)}
              />
            ))
          ) : (
            <>
              <CategoryItem
                icon={getCategoryIcon(
                  selectedData?.name ?? '',
                  selectedData?.color ?? '#000',
                )}
                label={selectedData?.name ?? ''}
                percent={selectedData?.value ?? 0}
                amount={selectedData?.amount ?? 0}
                onClick={category => setSelectedCategory(category)}
              />

              <TimelineWrapper>
                {filteredData
                  .filter(day =>
                    day.transactions.some(
                      tx => tx.category === selectedData?.name,
                    ),
                  )
                  .map((dayData, idx) => (
                    <DayContainer key={idx}>
                      <DateSummary
                        date={dayData.date}
                        yearMonth={dayData.yearMonth}
                        dayOfWeek={dayData.dayOfWeek}
                        income={dayData.income}
                        expense={dayData.expense}
                        showAmount={false}
                      />
                      {dayData.transactions
                        .filter(item => item.category === selectedData?.name)
                        .map(item => (
                          <TransactionItem
                            key={item.id}
                            id={item.id}
                            time={item.time}
                            category={item.category}
                            title={item.title}
                            amount={item.amount}
                            isIncome={item.isIncome}
                            onClick={id =>
                              navigate(`/view/${id}`, { state: { id } })
                            }
                          />
                        ))}
                    </DayContainer>
                  ))}
              </TimelineWrapper>
            </>
          )}
        </ListContainer>
      </ContentContainer>
      <BottomNav />
    </Container>
  );
};

export default Stats;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 9px;
    width: 2px;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      #c4c4c4 30%,
      rgba(0, 0, 0, 0) 0%
    );
    background-size: 2px 8px;
    background-repeat: repeat-y;
  }
`;
