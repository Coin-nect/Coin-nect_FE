import { useState } from 'react';
import styled from 'styled-components';
import { getFormattedDate } from '@utils/Date';
import { COLORS, COMMON_COLORS, FONT_COLORS } from '@constants/colors';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaList } from 'react-icons/fa6';
import { IoCalendarNumber, IoSearch } from 'react-icons/io5';
import { BsBarChartFill } from 'react-icons/bs';

interface HeaderProps {
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  onClick?: () => void;
}

const CalendarHeader = ({
  showLeftIcon = true,
  showRightIcon = true,
  onClick,
}: HeaderProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isListIcon, setIsListIcon] = useState(true);

  const handlePrevMonth = () => {
    setCurrentDate(
      prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const toggleLeftIcon = () => {
    setIsListIcon(prev => !prev);
  };

  return (
    <HeaderContainer>
      <IconWrapper>
        {showLeftIcon && (
          <IconWrapper onClick={toggleLeftIcon}>
            {isListIcon ? (
              <FaList color={COLORS.white} size={24} />
            ) : (
              <IoCalendarNumber color={COLORS.white} size={24} />
            )}
          </IconWrapper>
        )}
      </IconWrapper>
      <DateContainer>
        <IoIosArrowBack
          color={COLORS.white}
          size={24}
          onClick={handlePrevMonth}
        />
        <DateText>{getFormattedDate(currentDate)}</DateText>
        <IoIosArrowForward
          color={COLORS.white}
          size={24}
          onClick={handleNextMonth}
        />
      </DateContainer>
      <IconWrapper onClick={onClick}>
        {showRightIcon && <IoSearch color={COLORS.white} size={24} />}
        {!showRightIcon && <BsBarChartFill color={COLORS.white} size={24} />}
      </IconWrapper>
    </HeaderContainer>
  );
};

export default CalendarHeader;

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: ${COMMON_COLORS.main};
  border: none;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateText = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${FONT_COLORS.white};
  text-align: center;
  margin: 0 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 24px;
  margin: 0 1rem;
`;
