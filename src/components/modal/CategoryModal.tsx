import styled from 'styled-components';
import Modal from '@components/common/Modal';
import {
  FaUtensils,
  FaShoppingBag,
  FaHeartbeat,
  FaBus,
  FaGift,
  FaEllipsisH,
  FaStore,
  FaGlassCheers,
  FaHome,
  FaMusic,
  FaPlane,
  FaPen,
  FaUsers,
  FaDollarSign,
  FaUserCog,
  FaMoneyCheckAlt,
  FaWallet,
  FaPiggyBank,
  FaMedal,
  FaExchangeAlt,
  FaChartLine,
} from 'react-icons/fa';
import { COLORS, COMMON_COLORS } from '@constants/colors';

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
  const categories = [
    { icon: <FaUtensils />, label: '식비' },
    { icon: <FaStore />, label: '마트/편의점' },
    { icon: <FaHeartbeat />, label: '의료/건강' },
    { icon: <FaGlassCheers />, label: '술/유흥' },
    { icon: <FaShoppingBag />, label: '미용/쇼핑' },
    { icon: <FaBus />, label: '교통' },
    { icon: <FaHome />, label: '주거/통신' },
    { icon: <FaShoppingBag />, label: '생활품' },
    { icon: <FaMusic />, label: '문화/여가' },
    { icon: <FaPlane />, label: '여행/숙박' },
    { icon: <FaPen />, label: '교육' },
    { icon: <FaUsers />, label: '경조사' },
    { icon: <FaDollarSign />, label: '금융' },
    { icon: <FaUserCog />, label: '자기계발' },
    { icon: <FaGift />, label: '선물' },
    { icon: <FaMoneyCheckAlt />, label: '월급' },
    { icon: <FaWallet />, label: '용돈' },
    { icon: <FaPiggyBank />, label: '이자/배당금' },
    { icon: <FaMedal />, label: '상여금' },
    { icon: <FaExchangeAlt />, label: '이월' },
    { icon: <FaChartLine />, label: '투자' },
    { icon: <FaEllipsisH />, label: '기타' },
  ];

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <ModalContent>
        <Title>분류</Title>
        <CategoryList>
          {categories.map((cat, idx) => (
            <CategoryItem key={idx} onClick={() => onSelect(cat.label)}>
              <IconCircle>{cat.icon}</IconCircle>
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
