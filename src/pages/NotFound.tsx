import styled from 'styled-components';
import { COMMON_COLORS } from '@constants/colors';
import { IoWarning } from 'react-icons/io5';

const NotFound = () => {
  return (
    <Container>
      <IoWarning size={100} color={COMMON_COLORS.main} />
      <Message>NOT FOUND</Message>
      <HomeLink href="/">로그인으로 돌아가기</HomeLink>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const Message = styled.p`
  font-size: 2.5em;
  color: ${COMMON_COLORS.main};
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 4em;
`;

const HomeLink = styled.a`
  text-decoration: none;
  color: ${COMMON_COLORS.main};
  font-size: 1.2em;
`;
