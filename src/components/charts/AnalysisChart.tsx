import { COLORS, COMMON_COLORS } from '@constants/colors';
import styled, { keyframes } from 'styled-components';

const MAX_BAR_HEIGHT = 150;

interface ChartData {
  date: string;
  income: number;
  expense: number;
}

interface Props {
  isYearly: boolean;
  data: ChartData[];
}

const AnalysisChart = ({ data }: Props) => {
  const maxIncome = Math.max(...data.map(d => d.income));
  const maxExpense = Math.max(...data.map(d => d.expense));
  const reversedData = data.slice().reverse();

  const yAxisTicks = [50, 100, 150];

  return (
    <Container>
      <LegendWrapper>
        <LegendItem color={COMMON_COLORS.yellow}>수입</LegendItem>
        <LegendItem color={COMMON_COLORS.main}>지출</LegendItem>
      </LegendWrapper>

      <BarChartWrapper>
        <BarsArea>
          <BarRow alignBottom>
            {reversedData.map((item, index) => (
              <BarWrapper key={index}>
                <Bar
                  height={(item.income / maxIncome) * MAX_BAR_HEIGHT}
                  color={COMMON_COLORS.yellow}
                  isTop
                />
              </BarWrapper>
            ))}
          </BarRow>

          <CenterLine />

          <BarRow alignBottom={false}>
            {reversedData.map((item, index) => (
              <BarWrapper key={index}>
                <Bar
                  height={(item.expense / maxExpense) * MAX_BAR_HEIGHT}
                  color={COMMON_COLORS.main}
                  isTop={false}
                />
              </BarWrapper>
            ))}
          </BarRow>

          <LabelRow>
            {reversedData.map((item, index) => (
              <Label key={index}>{item.date}</Label>
            ))}
          </LabelRow>
        </BarsArea>

        <YAxis>
          {[...yAxisTicks].reverse().map(value => (
            <YAxisLabel key={`income-${value}`}>{value}</YAxisLabel>
          ))}
          <YAxisSpacer />
          {[...yAxisTicks].map(value => (
            <YAxisLabel key={`expense-${value}`}>{value}</YAxisLabel>
          ))}
        </YAxis>
      </BarChartWrapper>
    </Container>
  );
};

export default AnalysisChart;

const Container = styled.div`
  width: 100%;
`;

const LegendWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 1.5rem;
`;

const LegendItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: ${COLORS.gray};

  &::before {
    content: '';
    width: 16px;
    height: 10px;
    background-color: ${({ color }) => color};
    border-radius: 1rem;
    display: inline-block;
  }
`;

const BarChartWrapper = styled.div`
  display: flex;
  position: relative;
`;

const YAxis = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(${MAX_BAR_HEIGHT}px * 2 + 2px);
  padding: 0.5rem 0.5rem 0.5rem 0;
`;

const YAxisLabel = styled.div`
  font-size: 0.75rem;
  color: ${COLORS.gray};
  text-align: left;
  height: ${MAX_BAR_HEIGHT / 3}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const YAxisSpacer = styled.div`
  height: 2px;
`;

const BarsArea = styled.div`
  flex: 1;
  padding-right: 0.5rem;
`;

const BarRow = styled.div<{ alignBottom: boolean }>`
  display: flex;
  justify-content: space-around;
  height: ${MAX_BAR_HEIGHT}px;
  align-items: ${({ alignBottom }) =>
    alignBottom ? 'flex-end' : 'flex-start'};
`;

const BarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const grow = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--final-height);
  }
`;

const Bar = styled.div<{ height: number; color: string; isTop: boolean }>`
  width: 2.4rem;
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => color};
  border-radius: ${({ isTop }) =>
    isTop ? '0.5rem 0.5rem 0 0' : '0 0 0.5rem 0.5rem'};
  animation: ${grow} 0.8s ease-out;
  --final-height: ${({ height }) => height}px;
`;

const CenterLine = styled.div`
  height: 2px;
  background-color: ${COLORS.gray};
  width: 100%;
  margin: 0.5rem 0;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Label = styled.div`
  font-size: 0.8rem;
  color: ${COLORS.black};
  text-align: center;
  margin-top: 0.5rem;
`;
