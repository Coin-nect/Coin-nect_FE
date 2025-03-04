import styled from 'styled-components';
import { HashLoader } from 'react-spinners';
import { COMMON_COLORS } from '@constants/colors';

const Loading = () => {
  return (
    <Container>
      <HashLoader color={COMMON_COLORS.main} />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
