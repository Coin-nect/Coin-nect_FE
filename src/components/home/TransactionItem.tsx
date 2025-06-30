import styled from 'styled-components';
import { COLORS } from '@constants/colors';

interface TransactionItemProps {
  time: string;
  category: string;
  title: string;
  amount: number;
  isIncome: boolean;
}

const TransactionItem = ({
  time,
  category,
  title,
  amount,
  isIncome,
}: TransactionItemProps) => {
  return (
    <ItemContainer>
      <LeftBox>
        <TimeText>{time}</TimeText>
        <CategoryText>{category}</CategoryText>
      </LeftBox>
      <TitleText>{title}</TitleText>
      <AmountText isIncome={isIncome}>
        {isIncome
          ? `+ ${amount.toLocaleString()}원`
          : `- ${amount.toLocaleString()}원`}
      </AmountText>
    </ItemContainer>
  );
};

export default TransactionItem;

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const TimeText = styled.div`
  width: 30px;
  background-color: ${COLORS.gray};
  color: #fff;
  padding: 0.1rem;
  border-radius: 0.2rem;
  font-size: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryText = styled.div`
  color: ${COLORS.dark_gray};
  font-size: 0.8rem;
  margin-top: 2px;
`;

const TitleText = styled.div`
  flex: 1;
  margin-left: 2rem;
  font-size: 0.9rem;
  color: ${COLORS.dark_blue};
  font-weight: 500;
`;

const AmountText = styled.div<{ isIncome: boolean }>`
  font-size: 0.9rem;
  color: ${({ isIncome }) => (isIncome ? COLORS.blue : COLORS.red)};
`;
