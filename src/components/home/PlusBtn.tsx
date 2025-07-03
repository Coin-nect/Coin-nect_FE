import styled from 'styled-components';
import { COMMON_COLORS } from '@constants/colors';
import { IoMdAdd } from 'react-icons/io';

interface PlusButtonProps {
  onClick?: () => void;
}

const PlusBtn = ({ onClick }: PlusButtonProps) => {
  return (
    <Button onClick={onClick}>
      <IoMdAdd size={28} color="white" />
    </Button>
  );
};

export default PlusBtn;

const Button = styled.button`
  position: fixed;
  bottom: 5rem;
  right: calc(50% - 180px);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${COMMON_COLORS.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 50;
`;
