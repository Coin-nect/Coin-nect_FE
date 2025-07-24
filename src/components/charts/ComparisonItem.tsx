import styled, { keyframes } from 'styled-components';
import { COLORS } from '@constants/colors';
import { useNavigate } from 'react-router-dom';

type ComparisonItemProps = {
  date: string;
  amount: number;
  details: number[];
  colors: string[];
  total: number;
};

const ComparisonItem = ({
  date,
  amount,
  details,
  colors,
  total,
}: ComparisonItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/analysis-detail/${date}`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <Label>{date}</Label>
      <RightBox>
        <Amount>{amount.toLocaleString()}원</Amount>
        <ColorBar>
          {details.map((val, i) => (
            <ColorSegment key={i} color={colors[i]} $flex={val / total} />
          ))}
        </ColorBar>
      </RightBox>
    </Wrapper>
  );
};

export default ComparisonItem;

const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;

const Label = styled.div`
  font-size: 0.9rem;
  color: ${COLORS.black};
  font-weight: 500;
  flex-shrink: 0;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1rem;
`;

const Amount = styled.div`
  font-size: 0.9rem;
  color: ${COLORS.dark_blue};
  font-weight: 500;
  margin-bottom: 4px;
`;

const ColorBar = styled.div`
  display: flex;
  height: 0.8rem;
  width: 100%;
  overflow: hidden;
  border-radius: 0.8rem;
  animation: ${grow} 1s ease-in-out;
`;

const ColorSegment = styled.div<{ color: string; $flex: number }>`
  background-color: ${({ color }) => color};
  width: ${({ $flex }) => $flex * 100}%;
`;
