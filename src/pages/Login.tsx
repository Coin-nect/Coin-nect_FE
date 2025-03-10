import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { COMMON_COLORS } from '@constants/colors';
import { Button } from '@components/common';
import Logo from '@assets/svg/Logo.svg?react';
import KakaoLogin from '@assets/svg/KakaoLogin.svg?react';

const Login = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  return (
    <Container>
      <Logo />
      <LogoText>Coin:nect</LogoText>
      <BtnContainer>
        <KakaoLogin />
        <Button
          buttonText="로그인 없이 계속하기"
          type="login"
          onClick={handleButtonClick}
        />
      </BtnContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.p`
  font-size: 2rem;
  color: ${COMMON_COLORS.main};
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 10rem;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;
