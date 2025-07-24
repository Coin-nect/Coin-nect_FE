import { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { ko } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { COLORS, COMMON_COLORS } from '@constants/colors';

type Mode = 'year' | 'month' | 'range';
type PickerType = 'home' | 'stats';

interface DatePickerProps {
  type: PickerType;
  // eslint-disable-next-line no-unused-vars
  onSearch: (data: {
    mode: Mode;
    value: string | { start: string; end: string };
  }) => void;
  onClose: () => void;
}

const CustomDatePicker = ({ type, onSearch, onClose }: DatePickerProps) => {
  const [mode, setMode] = useState<Mode>(type === 'home' ? 'month' : 'year');
  const [year, setYear] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);

  const handleSearch = () => {
    if (mode === 'year') {
      onSearch({ mode, value: dayjs(year).format('YYYY') });
    } else if (mode === 'month') {
      onSearch({ mode, value: dayjs(month).format('YYYY-MM') });
    } else if (mode === 'range' && range[0] && range[1]) {
      onSearch({
        mode,
        value: {
          start: dayjs(range[0]).format('YYYY-MM-DD'),
          end: dayjs(range[1]).format('YYYY-MM-DD'),
        },
      });
    }
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Wrapper>
          {type === 'stats' && (
            <TabContainer>
              <Tab active={mode === 'year'} onClick={() => setMode('year')}>
                연간
              </Tab>
              <Tab active={mode === 'month'} onClick={() => setMode('month')}>
                월간
              </Tab>
              <Tab active={mode === 'range'} onClick={() => setMode('range')}>
                기간
              </Tab>
            </TabContainer>
          )}

          <PickerArea>
            {mode === 'year' && (
              <DatePicker
                selected={year}
                onChange={date => date && setYear(date)}
                showYearPicker
                dateFormat="yyyy"
                locale={ko}
                customInput={<StyledInput />}
              />
            )}

            {mode === 'month' && (
              <DatePicker
                selected={month}
                onChange={date => date && setMonth(date)}
                showMonthYearPicker
                dateFormat="yyyy-MM"
                locale={ko}
                customInput={<StyledInput />}
              />
            )}

            {mode === 'range' && (
              <DatePicker
                selectsRange
                startDate={range[0]}
                endDate={range[1]}
                onChange={(update: [Date | null, Date | null]) =>
                  setRange(update)
                }
                dateFormat="yyyy-MM-dd"
                locale={ko}
                customInput={<StyledInput />}
              />
            )}
          </PickerArea>

          <Button onClick={handleSearch}>조회</Button>
        </Wrapper>
      </ModalContent>
    </Overlay>
  );
};

export default CustomDatePicker;

const Overlay = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 5;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 425px;
  min-width: 320px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-height: 400px;
  background: white;
  border: 1px solid ${COLORS.gray};
  padding: 1rem;
  text-align: center;
  z-index: 100;
  box-sizing: border-box;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  border: none;
  background-color: ${({ active }) => (active ? COMMON_COLORS.main : '#fff')};
  color: ${({ active }) => (active ? 'white' : COLORS.dark_gray)};
  border-radius: 0.8rem;
  cursor: pointer;
`;

const StyledInput = styled.input`
  max-width: 240px;
  font-size: 1rem;
  border: 1px solid ${COLORS.gray};
  border-radius: 0.8rem;
  text-align: center;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  font-weight: bold;
  outline: none;
`;

const PickerArea = styled.div`
  margin-bottom: 1rem;

  .react-datepicker-wrapper {
    display: inline-block;
    width: auto;
  }

  .react-datepicker {
    font-size: 0.9rem;
  }

  // 선택된 연도 색상 변경
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: ${COMMON_COLORS.main} !important;
    color: white !important;
  }

  // 선택된 월 색상 변경
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--keyboard-selected {
    background-color: ${COMMON_COLORS.main} !important;
    color: white !important;
    border-radius: 0.3rem;
  }

  // 선택된 기간 색상 변경
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__day--keyboard-selected {
    background-color: ${COMMON_COLORS.main} !important;
    color: white !important;
  }
`;

const Button = styled.button`
  background-color: ${COMMON_COLORS.main};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-weight: bold;
  margin: 1rem 0;
`;
