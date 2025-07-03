import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CalendarHeader, BottomNav, ContentContainer } from '@components/index';
import CalendarSection from './CalendarSection';
import TotalSummary from '@components/home/TotalSummary';
import PlusBtn from '@components/home/PlusBtn';
import ListSection from './ListSection';
import Message from '@components/common/Message';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMessage, setShowMessage] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isList, setIsList] = useState(false);

  useEffect(() => {
    if (location.state?.showMessage) {
      setShowMessage(true);
    }
  }, [location.state]);

  const handlePlusClick = () => {
    navigate('/form');
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
      {showMessage && <Message text="저장되었습니다." />}
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
