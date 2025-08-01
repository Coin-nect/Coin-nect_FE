import { useEffect, useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { COLORS, COMMON_COLORS, FONT_COLORS } from '@constants/colors';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaList } from 'react-icons/fa6';
import { IoCalendarNumber, IoSearch } from 'react-icons/io5';
import { BsBarChartFill } from 'react-icons/bs';
import { CustomDatePicker } from '@components/index';

type PickerMode = 'year' | 'month' | 'range';
type PickerType = 'home' | 'stats';

interface HeaderProps {
  currentDate: Date;
  // eslint-disable-next-line no-unused-vars
  setCurrentDate: (date: Date) => void;
  toggleList?: () => void;
  isList?: boolean;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  onClick?: () => void;
  type?: PickerType;
}

const CalendarHeader = ({
  currentDate,
  setCurrentDate,
  isList,
  toggleList,
  showLeftIcon = true,
  showRightIcon = true,
  onClick,
  type = 'home',
}: HeaderProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedMode, setSelectedMode] = useState<PickerMode>('month');
  const [displayDate, setDisplayDate] = useState<string>(
    dayjs(currentDate).format('YYYY년 MM월'),
  );

  useEffect(() => {
    if (selectedMode === 'year') {
      setDisplayDate(dayjs(currentDate).format('YYYY년'));
    } else if (selectedMode === 'month') {
      setDisplayDate(dayjs(currentDate).format('YYYY년 MM월'));
    }
  }, [currentDate, selectedMode]);

  const handlePrevMonth = () => {
    if (selectedMode === 'year') {
      setCurrentDate(
        new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1),
      );
    } else {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
      );
    }
  };

  const handleNextMonth = () => {
    if (selectedMode === 'year') {
      setCurrentDate(
        new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1),
      );
    } else {
      setCurrentDate(
        new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
      );
    }
  };

  const getFormattedDisplay = (
    mode: PickerMode,
    value: string | { start: string; end: string },
  ) => {
    if (mode === 'year' && typeof value === 'string') {
      return `${value}년`;
    }

    if (mode === 'month' && typeof value === 'string') {
      const [y, m] = value.split('-');
      return `${y}년 ${m}월`;
    }

    if (mode === 'range' && typeof value === 'object') {
      return `${value.start.replace(/-/g, '.')} ~ ${value.end.replace(/-/g, '.')}`;
    }

    return '';
  };

  return (
    <>
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
          {selectedMode !== 'range' && (
            <IoIosArrowBack
              color={COLORS.white}
              size={24}
              onClick={handlePrevMonth}
              style={{ cursor: 'pointer' }}
            />
          )}

          <DateText onClick={() => setShowPicker(prev => !prev)}>
            {displayDate}
          </DateText>

          {selectedMode !== 'range' && (
            <IoIosArrowForward
              color={COLORS.white}
              size={24}
              onClick={handleNextMonth}
              style={{ cursor: 'pointer' }}
            />
          )}
        </DateContainer>

        <IconWrapper onClick={onClick}>
          {showRightIcon ? (
            <IoSearch color={COLORS.white} size={24} />
          ) : (
            <BsBarChartFill color={COLORS.white} size={24} />
          )}
        </IconWrapper>
      </HeaderContainer>

      {showPicker && (
        <CustomDatePicker
          type={type}
          onSearch={({ mode, value }) => {
            setSelectedMode(mode);
            if (typeof value === 'string') {
              setCurrentDate(new Date(value));
            } else {
              setCurrentDate(new Date(value.start));
            }
            setDisplayDate(getFormattedDisplay(mode, value));
            setShowPicker(false);
          }}
          onClose={() => setShowPicker(false)}
        />
      )}
    </>
  );
};

export default CalendarHeader;

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
  background-color: ${COMMON_COLORS.main};
  box-sizing: border-box;
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
  cursor: pointer;
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
