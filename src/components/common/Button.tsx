import React from 'react';
import styled from 'styled-components';
import { COLORS, COMMON_COLORS, FONT_COLORS } from '@constants/colors';

interface ButtonProps {
  onClick?: () => void;
  buttonText: string;
  type?: 'default' | 'primary';
  className?: string;
  isDisabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * Common Button
 * isDisabled: button 비활성화 여부
 * type: 버튼 별 style (default, primary)
 * buttonText: 버튼 텍스트
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
}: ButtonProps) => {
  return (
    <ButtonContainer
      className={`button ${type} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      style={style}
    >
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &.default {
    background-color: ${COMMON_COLORS.main};
    color: ${FONT_COLORS.white};
  }

  &.primary {
    background-color: ${COLORS.gray};
    color: ${FONT_COLORS.white};
  }
`;

const ButtonText = styled.div`
  font-size: 0.8rem;
`;
