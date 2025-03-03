import styled from 'styled-components';
import { DefaultHeader, BottomNav } from '@components/index';

const MyPage = () => {
  return (
    <Container>
      <DefaultHeader title="마이페이지" showIcon={false} />
      <ContentContainer>
        <Text>MyPage</Text>
      </ContentContainer>
      <BottomNav />
    </Container>
  );
};

export default MyPage;

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
