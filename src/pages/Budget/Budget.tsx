import styled from 'styled-components';
import { DefaultHeader, BottomNav } from '@components/index';

const Budget = () => {
  return (
    <Container>
      <DefaultHeader title="예산관리" />
      <ContentContainer>
        <Text>Budget</Text>
      </ContentContainer>
      <BottomNav />
    </Container>
  );
};

export default Budget;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 82vh;
`;

const Text = styled.p`
  font-size: 24px;
  color: #333;
`;
