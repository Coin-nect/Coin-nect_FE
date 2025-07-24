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
  padding: 1.5rem 1.2rem;
  overflow-y: auto;
  box-sizing: border-box;
  margin-top: 60px;
  margin-bottom: ${({ navMargin }) => (navMargin ? '65px' : '0')};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ContentContainer;
