import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_COLORS } from '@constants/colors';

interface InputProps {
  type: 'home' | 'mypage';
  name?: string;
  value: string;
  placeholder: string;
  className?: string;
  inputType: React.HTMLInputTypeAttribute;
  // eslint-disable-next-line no-unused-vars
  onEnterPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const Input = ({
  type,
  name,
  value,
  placeholder,
  className = '',
  inputType,
  onEnterPress,
  onChange,
  style,
}: InputProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onEnterPress) {
      onEnterPress(event);
    }
  };

  return (
    <InputBox
      type={inputType}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`input ${type} ${className}`}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      style={style}
    />
  );
};

export default Input;

export const InputBox = styled.input`
  border: none;
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &.home {
    font-size: 1rem;
    background-color: transparent;
    border-bottom: 2px solid ${COLORS.gray};
    color: ${FONT_COLORS.dark_blue};
    padding-bottom: 10px;

    &::placeholder {
      color: ${FONT_COLORS.placeholder};
    }
  }

  &.mypage {
    width: 90%;
    font-size: 1rem;
    background-color: ${COLORS.input_box};
    color: ${FONT_COLORS.dark_blue};
    padding: 1rem 1.5rem;
    border-radius: 2rem;

    &::placeholder {
      color: ${FONT_COLORS.placeholder};
    }
  }
`;
