import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 1rem;
  padding: 2.6rem 1.2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ContentContainer;
