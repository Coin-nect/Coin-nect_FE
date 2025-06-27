import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  DefaultHeader,
  BottomNav,
  Button,
  ProfileInfo,
  ContentContainer,
} from '@components/index';
import CheckModal from '@components/modal/CheckModal';

const MyPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'logout' | 'withdrawal'>(
    'withdrawal',
  );
  const navigate = useNavigate();

  const openModal = (type: 'logout' | 'withdrawal') => {
    setModalType(type);
    setIsModalVisible(true);
  };

  const closeModal = () => setIsModalVisible(false);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <DefaultHeader title="마이페이지" showIcon={false} />
      <ContentContainer>
        <ProfileInfo
          user_image=""
          name_k=""
          name_e=""
          gender=""
          age={20}
          job=""
        />
        <Button
          buttonText="프로필 수정"
          type="mypageBtn"
          onClick={() => handleNavigation('/profile-edit')}
        />
        <Button
          buttonText="알림설정"
          type="mypageBtn"
          onClick={() => handleNavigation('/notification-settings')}
        />
        <Button
          buttonText="Excel 저장 및 복원"
          type="mypageBtn"
          onClick={() => handleNavigation('/data-backup')}
        />
        <Button
          buttonText="로그아웃"
          type="mypageBtn"
          onClick={() => openModal('logout')}
        />
        <Button
          buttonText="회원탈퇴"
          type="mypageBtn"
          onClick={() => openModal('withdrawal')}
        />
      </ContentContainer>
      <BottomNav />

      <CheckModal
        isVisible={isModalVisible}
        closeModal={closeModal}
        onSubmit={() => {}}
        type={modalType}
      />
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
