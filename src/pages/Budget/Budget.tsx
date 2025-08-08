import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  DefaultHeader,
  BottomNav,
  StatusTag,
  ContentContainer,
  BlurBox,
  BudgetBar,
  BudgetLine,
  Message,
} from '@components/index';
import { COLORS } from '@constants/colors';
import statusMap from '@constants/statusMap';

const status = 'warning';

const Budget = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMessage, setShowMessage] = useState(false);
  const currentStatus = statusMap[status];

  useEffect(() => {
    if (location.state?.showMessage) {
      setShowMessage(true);
    }
  }, [location.state]);

  return (
    <Container>
      <DefaultHeader
        title="예산관리"
        onSetting={() => navigate('/budget-setting')}
      />
      {showMessage && <Message text="예산이 저장되었습니다." />}

      <ContentContainer navMargin={true}>
        <Section>
          <Text>00월</Text>
          <Text>총금액: 500,000원</Text>
          <Text>
            남은 예산: 800,000원
            <StatusTag
              color={currentStatus.tag.color}
              label={currentStatus.tag.label}
            />
          </Text>
        </Section>

        <BudgetBar total={500000} used={320000} />
        <GraphLabel>예산 내역</GraphLabel>
        <BudgetLine />
        <Section>
          <Text>저번 달 대비 예산 00% 증가</Text>
        </Section>

        <BlurBox
          bgColor={currentStatus.boxColor}
          borderRadius="1.5rem"
          style={{
            padding: '2rem 0',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PlaceholderText>{currentStatus.message}</PlaceholderText>
        </BlurBox>

        <BlurBox
          bgColor={COLORS.dark_blue}
          borderRadius="1.5rem"
          style={{
            padding: '2rem 0',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PlaceholderText>
            친구들의 소비 습관이 궁금하다면?
            <br />
            (업데이트 예정)
          </PlaceholderText>
        </BlurBox>
      </ContentContainer>
      <BottomNav />
    </Container>
  );
};

export default Budget;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  width: 100%;
  text-align: left;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  margin: 0;
  font-family: 'NanumHuman-Regular';
`;

const PlaceholderText = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: left;
  font-family: 'NanumHuman-Light';
  margin: 0 2rem;
`;

const GraphLabel = styled.p`
  width: 100%;
  margin: 0;
  font-size: 1rem;
  font-family: 'NanumHuman-Bold';
  text-align: left;
`;
