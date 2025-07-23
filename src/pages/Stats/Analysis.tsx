import { useState } from 'react';
import styled from 'styled-components';
import {
  BackHeader,
  ContentContainer,
  AnalysisChart,
  ComparisonItem,
} from '@components/index';
import { CHART_COLORS, COLORS } from '@constants/colors';
import {
  monthlyData,
  yearlyData,
  monthlyComparisonData,
  yearlyComparisonData,
} from '@constants/dummy';

const AnalysisReport = () => {
  const [isYearly, setIsYearly] = useState(false);

  const chartData = isYearly ? yearlyData : monthlyData;
  const rawComparisonData = isYearly
    ? yearlyComparisonData
    : monthlyComparisonData;

  const sortedComparisonData = rawComparisonData.map(item => {
    const sortedDetails = [...item.details].sort((a, b) => b - a);
    const total = sortedDetails.reduce((sum, val) => sum + val, 0);
    const colors = sortedDetails.map(
      (_, index) => CHART_COLORS[index % CHART_COLORS.length],
    );
    return { ...item, sortedDetails, colors, total };
  });

  return (
    <Container>
      <BackHeader title="월간/연간 분석" showIcon={false} />
      <ContentContainer>
        <Section>
          <Title>{isYearly ? '연간' : '월간'} 분석 리포트</Title>
          <ToggleButton onClick={() => setIsYearly(prev => !prev)}>
            {isYearly ? '월간' : '연간'} 분석
          </ToggleButton>
        </Section>
        <AnalysisChart
          key={isYearly ? 'yearly' : 'monthly'}
          isYearly={isYearly}
          data={chartData}
        />
        <Section>
          <SectionTitle>지출 비교</SectionTitle>
        </Section>
        {sortedComparisonData.map((item, idx) => (
          <ComparisonItem
            key={`${isYearly}-${idx}`}
            label={item.label}
            amount={item.amount}
            details={item.sortedDetails}
            colors={item.colors}
            total={item.total}
          />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default AnalysisReport;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-weight: bold;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  margin: 2rem 0 0 0;
  font-size: 1rem;
`;

const ToggleButton = styled.button`
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${COLORS.gray};
  color: ${COLORS.white};
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
