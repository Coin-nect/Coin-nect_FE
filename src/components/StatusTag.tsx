import styled from 'styled-components';

interface StatusTagProps {
  color: string;
  label: string;
}

const StatusTag = ({ color, label }: StatusTagProps) => {
  return <Tag color={color}>{label}</Tag>;
};

export default StatusTag;

const Tag = styled.span<{ color: string }>`
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  background-color: ${({ color }) => color};
  color: #000;
  border-radius: 3rem;
  margin-left: 0.5rem;
  font-family: 'NanumHuman-Bold';
`;
