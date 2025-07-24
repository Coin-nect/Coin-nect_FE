import styled from 'styled-components';
import { COLORS } from '@constants/colors';

interface BlurBoxProps {
  bgColor?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const BlurBox = ({ bgColor, borderRadius, style, children }: BlurBoxProps) => {
  return (
    <Container $bgColor={bgColor} $borderRadius={borderRadius} style={style}>
      <Content>{children}</Content>
    </Container>
  );
};

export default BlurBox;

const Container = styled.div.withConfig({
  shouldForwardProp: prop => !['$bgColor', '$borderRadius'].includes(prop),
})<{
  $bgColor?: string;
  $borderRadius?: string;
}>`
  position: relative;
  display: block;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-radius: ${({ $borderRadius }) => $borderRadius || '1rem'};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ $bgColor }) => $bgColor || COLORS.gray};
    border-radius: inherit;
    filter: blur(0.08rem);
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;
