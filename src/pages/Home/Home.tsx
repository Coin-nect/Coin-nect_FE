import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CalendarHeader, BottomNav } from '@components/index';
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

  // 마운트될 때 sessionStorage 값 읽기
  useEffect(() => {
    const savedIsList = sessionStorage.getItem('isList');
    if (savedIsList === 'true') {
      setIsList(true);
    }
  }, []);

  // 상태 변경될 때 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem('isList', String(isList));
  }, [isList]);

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
      <ContentContainer>
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 1rem;
  padding: 2.6rem 0;
  overflow-y: auto;
  box-sizing: border-box;
  margin-bottom: 70px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
