import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CalendarHeader, BottomNav, ContentContainer } from '@components/index';
import CalendarSection from './CalendarSection';
import TotalSummary from '@components/home/TotalSummary';
import PlusBtn from '@components/home/PlusBtn';
import ListSection from './ListSection';

const Home = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isList, setIsList] = useState(false);

  const handlePlusClick = () => {
    alert('플러스 버튼 클릭');
  };

  const toggleList = () => {
    setIsList(prev => !prev);
  };

  return (
    <Container>
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        isList={isList}
        toggleList={toggleList}
        onClick={() => navigate('/search')}
      />
      <ContentContainer style={{ padding: '0', margin: '1rem 0' }}>
        <TotalSummary total={100000000} income={640000} spending={91000} />
        {isList ? (
          <ListSection currentDate={currentDate} />
        ) : (
          <CalendarSection currentDate={currentDate} />
        )}
      </ContentContainer>
      <PlusBtn onClick={handlePlusClick} />
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
