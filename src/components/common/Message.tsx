import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS } from '@constants/colors';

interface MessageProps {
  text: string;
  className?: string;
}

const Message = ({ text, className }: MessageProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      window.history.replaceState({}, document.title);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <Container className={className}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Message;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  10% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  max-width: 300px;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  background-color: ${COLORS.dark_gray};
  border-radius: 0.8rem;
  position: fixed;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  animation: ${fadeInOut} 1.5s ease-in-out forwards;
`;

const Text = styled.div`
  font-size: 1rem;
  color: ${COLORS.white};
`;
