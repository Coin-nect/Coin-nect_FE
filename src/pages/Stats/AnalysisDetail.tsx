import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  BackHeader,
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

const AnalysisDetail = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { date } = useParams();
  const selectedData = sortedPieData.find(cat => cat.name === selectedCategory);

  const getCategoryIcon = (label: string, color: string, size = 24) => {
    const cat = categoryIcons.find(c => c.label === label);
    return cat ? cat.icon(color, size) : null;
  };

  const filteredData = useMemo(() => {
    return transactionData.filter(day => day.yearMonth === date);
  }, [date]);

  return (
    <Container>
      <BackHeader title={date ?? '분석 상세'} showIcon={false} />
      <StatsSummary income={1000000} expense={1000000} variant="white" />

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
                onClick={category =>
                  setSelectedCategory(prev =>
                    prev === category ? null : category,
                  )
                }
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
                onClick={category =>
                  setSelectedCategory(prev =>
                    prev === category ? null : category,
                  )
                }
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
    </Container>
  );
};

export default AnalysisDetail;

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
