import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, COMMON_COLORS } from '@constants/colors';
import {
  Button,
  ContentContainer,
  BackHeader,
  CategoryModal,
} from '@components/index';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';
import 'react-datepicker/dist/react-datepicker.css';

const IncomeExpenseForm = () => {
  const navigate = useNavigate();
  const [isIncome, setIsIncome] = useState(true);
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<Date | null>(new Date());
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    setModalOpen(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setAmount(`₩ ${formattedValue}`);
  };

  const handleSubmit = () => {
    if (
      date &&
      time &&
      category.trim() &&
      amount.trim() &&
      title.trim() &&
      memo.trim()
    ) {
      const combinedDateTime = `${dayjs(date).format('YYYY-MM-DD')}T${dayjs(time).format('HH:mm')}:00`;
      const numericAmount = amount.replace(/[^0-9]/g, '');
      console.log({
        type: isIncome ? '수입' : '지출',
        date: combinedDateTime,
        category,
        amount: numericAmount,
        title,
        memo,
      });
      navigate('/home', { replace: true, state: { showMessage: true } });
    } else {
      alert('모든 항목을 입력해주세요.');
    }
  };

  return (
    <Container>
      <BackHeader title="수입/지출" showIcon={false} />
      <ContentContainer>
        <ButtonGroup>
          <TypeButton
            $active={isIncome}
            $colorType="blue"
            onClick={() => setIsIncome(true)}
          >
            수입
          </TypeButton>
          <TypeButton
            $active={!isIncome}
            $colorType="red"
            onClick={() => setIsIncome(false)}
          >
            지출
          </TypeButton>
        </ButtonGroup>
        <Form>
          <Label>날짜</Label>
          <DateInputWrapper>
            <DatePicker
              selected={date}
              onChange={newDate => setDate(newDate)}
              dateFormat="yyyy-MM-dd"
              locale={ko}
              customInput={<Input />}
              maxDate={new Date()}
            />
          </DateInputWrapper>
        </Form>
        <Form>
          <Label>시간</Label>
          <DateInputWrapper>
            <DatePicker
              selected={time}
              onChange={(val: Date | null) => val && setTime(val)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={1}
              dateFormat="HH:mm"
              customInput={<Input />}
              locale={ko}
            />
          </DateInputWrapper>
        </Form>
        <Form>
          <Label>분류</Label>
          <Input
            value={category}
            onClick={() => setModalOpen(true)}
            placeholder="카테고리를 선택하세요"
            readOnly
            style={{ cursor: 'pointer' }}
          />
        </Form>
        <Form>
          <Label>금액</Label>
          <Input
            type="text"
            value={amount}
            onChange={handleInputChange}
            placeholder="금액을 입력하세요"
          />
        </Form>
        <Form>
          <Label>내용</Label>
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="내용을 입력하세요"
          />
        </Form>
        <Memo>
          <Label>메모</Label>
          <Textarea
            value={memo}
            onChange={e => setMemo(e.target.value)}
            placeholder="메모를 입력하세요"
          />
        </Memo>
        <Button
          buttonText="저장하기"
          type="saveBtn"
          style={{ marginTop: '2rem' }}
          bgColor={COMMON_COLORS.main}
          txtColor={COLORS.white}
          onClick={handleSubmit}
        />
      </ContentContainer>
      <CategoryModal
        isVisible={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleCategorySelect}
      />
    </Container>
  );
};

export default IncomeExpenseForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
  gap: 1rem;
`;

const TypeButton = styled.button<{
  $active: boolean;
  $colorType: 'blue' | 'red';
}>`
  flex: 1;
  padding: 1rem;
  border: 2px solid
    ${({ $active, $colorType }) =>
      $active
        ? $colorType === 'blue'
          ? COLORS.blue
          : COLORS.red
        : COLORS.gray};
  background-color: #fff;
  color: ${({ $active, $colorType }) =>
    $active ? ($colorType === 'blue' ? COLORS.blue : COLORS.red) : COLORS.gray};
  border-radius: 0.8rem;
  font-family: 'NanumHuman-ExtraBold';
  font-size: 1rem;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${COLORS.dark_blue};
  width: 80px;
  font-family: 'NanumHuman-Regular';
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 0.9rem;
  background-color: transparent;
  font-family: 'NanumHuman-Light';
  box-sizing: border-box;
`;

const DateInputWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  margin-left: -1.2rem;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    width: 100%;
  }
`;

const Memo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

const Textarea = styled.textarea.attrs({ spellCheck: false })`
  padding: 1rem;
  border: none;
  background-color: ${COLORS.input_box};
  color: ${COLORS.black};
  border-radius: 0.8rem;
  resize: none;
  min-height: 100px;
  font-size: 0.9rem;
  outline: none;
  font-family: 'NanumHuman-Light';
`;
