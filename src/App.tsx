import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import {
  Login,
  Loading,
  NotFound,
  Home,
  Budget,
  Stats,
  MyPage,
} from '@pages/index';

const App = () => (
  <Router>
    <Container>
      <Routes>
        {/* Init */}
        <Route path="/" element={<Login />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/*" element={<NotFound />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Budget */}
        <Route path="/budget" element={<Budget />} />

        {/* Stats */}
        <Route path="/stats" element={<Stats />} />

        {/* MyPage */}
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Container>
  </Router>
);

export default App;

const Container = styled.div`
  width: 100vw;
  max-width: 425px;
  min-width: 320px;
  justify-content: center;
  align-items: center;
  display: flex;

  // 텍스트 클릭 방지
  user-select: none;
`;
