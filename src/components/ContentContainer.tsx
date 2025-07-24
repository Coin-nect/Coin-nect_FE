import styled from 'styled-components';

interface ContentContainerProps {
  navMargin?: boolean;
}

const ContentContainer = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'navMargin',
})<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 1rem;
  padding: 2.6rem 1.2rem;
  overflow-y: auto;
  box-sizing: border-box;
  margin-bottom: ${({ navMargin }) => (navMargin ? '70px' : '0')};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ContentContainer;
