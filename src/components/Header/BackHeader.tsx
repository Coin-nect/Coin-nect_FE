import styled from 'styled-components';
import { COLORS, COMMON_COLORS } from '@constants/colors';
import { IoArrowBackOutline } from 'react-icons/io5';
import { SlOptionsVertical } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showIcon?: boolean;
}

const BackHeader = ({ title, showIcon = true }: HeaderProps) => {
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
      />
      <Title>{title}</Title>
      <IconWrapper>
        {showIcon ? <SlOptionsVertical color={COMMON_COLORS.main} /> : null}
      </IconWrapper>
    </HeaderContainer>
  );
};

export default BackHeader;

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: ${COLORS.white};
  border-bottom: 1.5px solid ${COMMON_COLORS.main};
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
