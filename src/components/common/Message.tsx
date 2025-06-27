import styled from 'styled-components';
import { COLORS } from '@constants/colors';

interface MessageProps {
  text: string;
}

const Message = ({ text }: MessageProps) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

export default Message;

const Container = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  background-color: ${COLORS.gray};
  border-radius: 0.8rem;
  opacity: 0.8;
`;

const Text = styled.div`
  font-size: 1rem;
  color: ${COLORS.white};
`;
