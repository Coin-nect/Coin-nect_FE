import styled from 'styled-components';
import { COLORS, COMMON_COLORS, FONT_COLORS } from '@constants/colors';
import { IoMdSettings } from 'react-icons/io';

interface HeaderProps {
  title: string;
  showIcon?: boolean;
  onSetting?: () => void;
}

const DefaultHeader = ({ title, showIcon = true, onSetting }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      {showIcon && (
        <IconWrapper onClick={onSetting}>
          <IoMdSettings size={24} color={COLORS.white} />
        </IconWrapper>
      )}
    </HeaderContainer>
  );
};

export default DefaultHeader;

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
  justify-content: center;
  padding: 1rem 0;
  background-color: ${COMMON_COLORS.main};
  border: none;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: ${FONT_COLORS.white};
  flex-grow: 1;
  text-align: center;
  font-family: 'NanumHuman-ExtraBold';
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;
`;
