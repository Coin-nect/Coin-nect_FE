import styled from 'styled-components';
import Modal from '@components/common/Modal';
import Button from '@components/common/Button';
import { COMMON_COLORS, FONT_COLORS } from '@constants/colors';

/**
 * CheckModal : 내용 확인 모달 (삭제, 로그아웃, 탈퇴 등)
 * onSubmit: () => void;
 * isVisible: 모달 표시 여부
 * closeModal: 모달 닫기 함수
 * "delete" | "logout" | "withdrawal";
 */

interface CheckModalProps {
  onSubmit: () => void;
  closeModal: () => void;
  isVisible: boolean;
  type: 'delete' | 'logout' | 'withdrawal';
}

function CheckModal({
  closeModal,
  isVisible,
  onSubmit,
  type,
}: CheckModalProps) {
  const messages = {
    delete: { prefix: '내역을 삭제' },
    logout: { prefix: '로그아웃' },
    withdrawal: { prefix: '회원을 탈퇴' },
  };

  const prefix = messages[type]?.prefix || 'prefix';

  return (
    <Modal isVisible={isVisible} onClose={closeModal}>
      <Wrapper>
        <Text>{prefix} 하시겠습니까?</Text>
        <BtnWrapper>
          <Button
            type="modalBtn"
            buttonText="예"
            bgColor={COMMON_COLORS.main}
            onClick={onSubmit}
          />
          <Button type="modalBtn" buttonText="아니오" onClick={closeModal} />
        </BtnWrapper>
      </Wrapper>
    </Modal>
  );
}

export default CheckModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Text = styled.p`
  color: ${FONT_COLORS.dark_blue};
  font-size: 1.2rem;
  font-weight: 500;
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-top: 1rem;
`;
