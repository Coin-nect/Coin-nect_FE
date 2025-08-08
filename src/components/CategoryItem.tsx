import { COLORS } from '@constants/colors';
import styled from 'styled-components';

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  percent: number;
  amount: number;
  // eslint-disable-next-line no-unused-vars
  onClick: (category: string) => void;
}

const CategoryItem = ({
  icon,
  label,
  percent,
  amount,
  onClick,
}: CategoryItemProps) => {
  return (
    <ItemContainer onClick={() => onClick(label)}>
      <LeftSection>
        <IconWrapper>{icon}</IconWrapper>
        <LabelText>
          {label} <span>({percent}%)</span>
        </LabelText>
      </LeftSection>
      <AmountText>{amount.toLocaleString()}원</AmountText>
    </ItemContainer>
  );
};

export default CategoryItem;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelText = styled.div`
  font-size: 0.9rem;
  color: ${COLORS.black};
  margin-left: 1.2rem;
  font-family: 'NanumHuman-Regular';
`;

const AmountText = styled.div`
  font-size: 0.9rem;
  font-family: 'NanumHuman-Regular';
  color: ${COLORS.dark_blue};
`;
