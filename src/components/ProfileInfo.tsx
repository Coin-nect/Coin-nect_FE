import styled from 'styled-components';
import { COLORS } from '@constants/colors';
import { BlurBox, ProfileImage } from '@components/index';

interface ProfileProps {
  user_image: string;
  name_k: string;
  name_e: string;
  gender: string;
  age: number;
  job: string;
}

const ProfileInfo = ({
  user_image,
  name_k,
  name_e,
  gender,
  age,
  job,
}: ProfileProps) => {
  return (
    <Container>
      <ProfileImage
        imageUrl={user_image}
        isEdit={false}
        onImageUpload={() => {}}
      />
      <BlurBox
        bgColor={COLORS.dark_green}
        borderRadius="4rem"
        style={{ marginTop: '-1.4rem', zIndex: -1 }}
      >
        <NameText>
          {name_k || '김이름'} {name_e || 'Kim Name'}
        </NameText>
        <Text>성별: {gender || '여자'}</Text>
        <Text>나이: {age || 20}</Text>
        <Text>직업: {job || '학생'}</Text>
      </BlurBox>
    </Container>
  );
};

export default ProfileInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const NameText = styled.div`
  font-size: 1.2rem;
  color: ${COLORS.white};
  text-align: center;
  font-family: 'NanumHuman-ExtraBold';
  margin-top: 1.6rem;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  font-size: 0.8rem;
  color: ${COLORS.white};
  margin-bottom: 0.4rem;
  margin-left: 3rem;
  font-family: 'NanumHuman-Regular';
`;
