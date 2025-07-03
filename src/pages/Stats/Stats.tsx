import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CalendarHeader, BottomNav } from '@components/index';

const Stats = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Container>
      <CalendarHeader
        showLeftIcon={false}
        showRightIcon={false}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        onClick={() => navigate('/')}
      />
      <ContentContainer>
        <Text>Stats</Text>
      </ContentContainer>
      <BottomNav />
    </Container>
  );
};

export default Stats;

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
