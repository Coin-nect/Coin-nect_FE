import styled from 'styled-components';
import { CalendarHeader, BottomNav } from '@components/index';

const Home = () => {
  return (
    <Container>
      <CalendarHeader />
      <ContentContainer>
        <Text>Home</Text>
      </ContentContainer>
      <BottomNav />
    </Container>
  );
};

export default Home;

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
