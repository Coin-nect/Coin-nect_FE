import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '@constants/colors';
import { BackHeader } from '@components/Header';
import { ContentContainer } from '@components/index';
import MenuModal from '@components/modal/MenuModal';
import CheckModal from '@components/modal/CheckModal';
import { getDayOfWeek } from '@utils/dayofweek';

const ViewIncomeExpense = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkModalOpen, setCheckModalOpen] = useState(false);

  const data = {
    id: '1',
    type: '지출',
    date: '2025/01/08',
    time: '19:55',
    category: '쇼핑',
    amount: '₩ 50,000',
    title: '모자 구매',
    memo: '무신사 MLB 모자 구매\n물렁\n어쩌구 저쩌구',
  };

  const isIncome = data.type === '수입';

  const handleEdit = () => {
    navigate('/form', { state: { id: data.id } });
  };

  const handleDelete = () => {
    setCheckModalOpen(true);
  };

  const confirmDelete = () => {
    navigate('/home', { replace: true, state: { showMessage: true } });
    setCheckModalOpen(false);
  };

  return (
    <Container>
      <BackHeader
        title="수입/지출"
        showIcon={true}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && <MenuModal onEdit={handleEdit} onDelete={handleDelete} />}
      <CheckModal
        isVisible={checkModalOpen}
        closeModal={() => setCheckModalOpen(false)}
        onSubmit={confirmDelete}
        type="delete"
      />
      <ContentContainer>
        <ButtonGroup>
          <TypeButton active={isIncome} colorType="blue" disabled>
            수입
          </TypeButton>
          <TypeButton active={!isIncome} colorType="red" disabled>
            지출
          </TypeButton>
        </ButtonGroup>
        <Form>
          <Label>날짜</Label>
          <InfoText>
            {data.date} ({getDayOfWeek(data.date)}) {data.time}
          </InfoText>
        </Form>
        <Form>
          <Label>분류</Label>
          <InfoText>{data.category}</InfoText>
        </Form>
        <Form>
          <Label>금액</Label>
          <InfoText>{data.amount}</InfoText>
        </Form>
        <Form>
          <Label>내용</Label>
          <InfoText>{data.title}</InfoText>
        </Form>
        <Memo>
          <Label>메모</Label>
          <MemoBox>{data.memo}</MemoBox>
        </Memo>
      </ContentContainer>
    </Container>
  );
};

export default ViewIncomeExpense;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
  gap: 1rem;
`;

const TypeButton = styled.button<{
  active: boolean;
  colorType: 'blue' | 'red';
}>`
  flex: 1;
  padding: 1rem;
  border: 2px solid
    ${({ active, colorType }) =>
      active ? (colorType === 'blue' ? COLORS.blue : COLORS.red) : COLORS.gray};
  background-color: #fff;
  color: ${({ active, colorType }) =>
    active ? (colorType === 'blue' ? COLORS.blue : COLORS.red) : COLORS.gray};
  border-radius: 0.8rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: default;
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: ${COLORS.dark_blue};
  width: 80px;
`;

const InfoText = styled.div`
  width: 100%;
  padding: 0.7rem 0;
  font-size: 0.9rem;
  border-bottom: 1px solid #ccc;
`;

const Memo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const MemoBox = styled.div`
  padding: 1rem;
  border: none;
  background-color: ${COLORS.input_box};
  color: ${COLORS.dark_blue};
  border-radius: 0.8rem;
  min-height: 100px;
  font-size: 0.9rem;
  white-space: pre-wrap;
`;
