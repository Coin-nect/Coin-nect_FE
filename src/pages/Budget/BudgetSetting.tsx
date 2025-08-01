import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  BackHeader,
  Button,
  ContentContainer,
  CheckModal,
} from '@components/index';
import { COLORS, COMMON_COLORS } from '@constants/colors';

const BudgetSetting = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [amount, setAmount] = useState('₩ 1,500,000');
  const [showRemoveBudgetModal, setShowRemoveBudgetModal] = useState(false);

  const handleRemoveBudget = () => {
    console.log('기존 예산 삭제');
    setAmount('₩ 0');
    setShowRemoveBudgetModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setInputValue(`₩ ${formattedValue}`);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      navigate('/budget', { replace: true, state: { showMessage: true } });
    }
  };

  return (
    <Container>
      <BackHeader
        title="예산 설정"
        showIcon={true}
        onClick={() => setShowRemoveBudgetModal(true)}
      />
      <ContentContainer>
        <Section>
          <Title>00월 예산을 재설정하시겠어요?</Title>
        </Section>
        <BudgetBox $bgColor={COLORS.input_box} $textColor="#000">
          <Label>기존 예산</Label>
          <Amount>{amount}</Amount>
        </BudgetBox>

        <BudgetBox $bgColor="#343A40" $textColor="#fff">
          <Label>변경 예정 예산</Label>
          <AmountInput
            type="text"
            placeholder="₩ 2,000,000"
            value={inputValue}
            onChange={handleInputChange}
          />
        </BudgetBox>

        <Section>
          <CheckboxLabel>
            <input type="checkbox" /> 주 단위 설정을 원합니다. (업데이트 예정)
          </CheckboxLabel>
        </Section>

        <Button
          buttonText="저장하기"
          type="saveBtn"
          style={{ marginTop: '5rem' }}
          bgColor={COMMON_COLORS.yellow}
          txtColor={COLORS.black}
          onClick={handleSubmit}
        />
      </ContentContainer>
      <CheckModal
        isVisible={showRemoveBudgetModal}
        closeModal={() => setShowRemoveBudgetModal(false)}
        onSubmit={handleRemoveBudget}
        type="removebudget"
      />
    </Container>
  );
};

export default BudgetSetting;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  width: 100%;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const BudgetBox = styled.div<{ $bgColor: string; $textColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  border-radius: 1.5rem;
  padding: 3rem 1.5rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const Label = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  margin: 0;
  font-weight: 600;
`;

const Amount = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const AmountInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.5rem;
  &::placeholder {
    color: #ebe9e9;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;
