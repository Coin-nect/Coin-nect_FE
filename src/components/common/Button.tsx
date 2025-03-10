import React from 'react';
import styled from 'styled-components';
import { COLORS, COMMON_COLORS, FONT_COLORS } from '@constants/colors';

interface ButtonProps {
  onClick?: () => void;
  buttonText: string;
  type?: 'default' | 'primary' | 'login' | 'modalBtn';
  className?: string;
  isDisabled?: boolean;
  style?: React.CSSProperties;
  bgColor?: string;
}

/**
 * Common Button
 * isDisabled: button 비활성화 여부
 * type: 버튼 별 style (default, primary)
 * buttonText: 버튼 텍스트
 * bgColor: 버튼 배경색 (선택적)
 * @param  onClick () => void (onClick method)
 * @param isDisabled boolean (disabled status)
 */

const Button = ({
  onClick,
  buttonText,
  type,
  className,
  isDisabled,
  style,
  bgColor,
}: ButtonProps) => {
  return (
    <ButtonContainer
      className={`button ${type} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      style={style}
      bgColor={bgColor}
    >
      {buttonText}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &.default {
    background-color: ${COMMON_COLORS.main};
    color: ${FONT_COLORS.white};
  }

  &.primary {
    background-color: ${COLORS.gray};
    color: ${FONT_COLORS.white};
  }

  &.login {
    background-color: ${COLORS.gray};
    color: ${FONT_COLORS.dark_blue};
    font-size: 1rem;
    font-weight: 500;
    width: 20rem;
    height: 3.44rem;
    border-radius: 0.75rem;
  }

  &.modalBtn {
    width: 100%;
    background-color: ${({ bgColor }) => bgColor || COLORS.gray};
    color: ${FONT_COLORS.white};
    border-radius: 0.5rem;
    padding: 0.8rem 0;
    font-size: 0.8rem;
  }
`;
