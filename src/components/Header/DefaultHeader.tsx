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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding: 1rem 0;
  background-color: ${COMMON_COLORS.main};
  border: none;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${FONT_COLORS.white};
  flex-grow: 1;
  text-align: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 1rem;
`;
