import styled from 'styled-components';
import { COLORS, COMMON_COLORS } from '@constants/colors';
import { IoArrowBackOutline } from 'react-icons/io5';
import { SlOptionsVertical } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showIcon?: boolean;
  onClick?: () => void;
}

const BackHeader = ({ title, showIcon = true, onClick }: HeaderProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer>
      <IoArrowBackOutline
        color={COMMON_COLORS.main}
        size={24}
        onClick={handleBack}
        style={{ cursor: 'pointer', marginLeft: '1rem' }}
      />
      <Title>{title}</Title>
      <IconWrapper onClick={onClick}>
        {showIcon ? (
          <SlOptionsVertical
            color={COMMON_COLORS.main}
            style={{ cursor: 'pointer' }}
          />
        ) : null}
      </IconWrapper>
    </HeaderContainer>
  );
};

export default BackHeader;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 425px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: ${COLORS.white};
  border-bottom: 1.5px solid ${COMMON_COLORS.main};
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${COMMON_COLORS.main};
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
`;
