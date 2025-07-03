import styled from 'styled-components';
import { getFormattedDate } from '@utils/Date';
import { COLORS, COMMON_COLORS, FONT_COLORS } from '@constants/colors';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaList } from 'react-icons/fa6';
import { IoCalendarNumber, IoSearch } from 'react-icons/io5';
import { BsBarChartFill } from 'react-icons/bs';

interface HeaderProps {
  currentDate: Date;
  // eslint-disable-next-line no-unused-vars
  setCurrentDate: (date: Date) => void;
  toggleList?: () => void;
  isList?: boolean;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  onClick?: () => void;
}

const CalendarHeader = ({
  currentDate,
  setCurrentDate,
  isList,
  toggleList,
  showLeftIcon = true,
  showRightIcon = true,
  onClick,
}: HeaderProps) => {
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  return (
    <HeaderContainer>
      <IconWrapper>
        {showLeftIcon && (
          <IconWrapper onClick={toggleList}>
            {isList ? (
              <IoCalendarNumber color={COLORS.white} size={24} />
            ) : (
              <FaList color={COLORS.white} size={24} />
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
        {showRightIcon ? (
          <IoSearch color={COLORS.white} size={24} />
        ) : (
          <BsBarChartFill color={COLORS.white} size={24} />
        )}
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
  cursor: pointer;
`;
