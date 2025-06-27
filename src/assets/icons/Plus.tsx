import styled from 'styled-components';
import { COLORS, COMMON_COLORS } from '@constants/colors';
import { FaPlus } from 'react-icons/fa6';

interface PlusProps {
  size?: number;
  onClick?: () => void;
}

const Plus = ({ size = 32, onClick }: PlusProps) => (
  <PlusWrapper size={size} onClick={onClick}>
    <Circle size={size}>
      <FaPlus size={20} color={COLORS.white} />
    </Circle>
  </PlusWrapper>
);

export default Plus;

const PlusWrapper = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  cursor: pointer;
`;

const Circle = styled.div<{ size: number }>`
  width: 100%;
  height: 100%;
  background-color: ${COMMON_COLORS.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
