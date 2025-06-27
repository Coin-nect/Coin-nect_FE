import styled from 'styled-components';
import { BackHeader } from '@components/index';

const DataBackup = () => {
  return (
    <Container>
      <BackHeader title="저장/복원" showIcon={false} />
      <ContentContainer>
        <Text>DataBackup</Text>
      </ContentContainer>
    </Container>
  );
};

export default DataBackup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 82vh;
`;

const Text = styled.p`
  font-size: 24px;
  color: #333;
`;
