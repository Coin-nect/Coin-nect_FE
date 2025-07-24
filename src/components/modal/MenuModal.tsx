import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { COLORS } from '@constants/colors';
import { FaPen, FaTrash } from 'react-icons/fa';

interface MenuModalProps {
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
  excludeRef?: React.RefObject<HTMLElement>;
}

const MenuModal = ({
  onEdit,
  onDelete,
  onClose,
  excludeRef,
}: MenuModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !excludeRef?.current?.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <MenuContainer ref={modalRef}>
      <MenuItem onClick={onEdit}>
        <FaPen size={14} style={{ marginRight: '0.5rem' }} />
        수정하기
      </MenuItem>
      <Divider />
      <MenuItem onClick={onDelete}>
        <FaTrash size={14} style={{ marginRight: '0.5rem' }} />
        삭제하기
      </MenuItem>
    </MenuContainer>
  );
};

export default MenuModal;

const MenuContainer = styled.div`
  position: absolute;
  top: 62px;
  right: 16px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray};
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  z-index: 5;
`;

const MenuItem = styled.div`
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
`;

const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${COLORS.gray};
`;
