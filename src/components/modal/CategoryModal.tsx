import styled from 'styled-components';
import Modal from '@components/common/Modal';
import { COLORS, COMMON_COLORS } from '@constants/colors';
import { categories } from '@constants/categories';

interface CategoryModalProps {
  isVisible: boolean;
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onSelect: (category: string) => void;
}

const CategoryModal = ({
  isVisible,
  onClose,
  onSelect,
}: CategoryModalProps) => {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <ModalContent>
        <Title>분류</Title>
        <CategoryList>
          {categories.map((cat, idx) => (
            <CategoryItem key={idx} onClick={() => onSelect(cat.label)}>
              <IconCircle>{cat.icon('white', 18)}</IconCircle>
              <Label>{cat.label}</Label>
            </CategoryItem>
          ))}
        </CategoryList>
      </ModalContent>
    </Modal>
  );
};

export default CategoryModal;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const IconCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${COMMON_COLORS.main};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
`;

const Label = styled.div`
  margin-top: 0.3rem;
  font-size: 0.7rem;
  text-align: center;
  color: ${COLORS.dark_blue};
`;
