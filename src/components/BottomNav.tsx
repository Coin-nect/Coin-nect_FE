import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, COMMON_COLORS } from '@constants/colors';
import { FiHome, FiPieChart, FiUser } from 'react-icons/fi';
import { LuChartLine } from 'react-icons/lu';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(
    location.pathname.substring(1) || 'home',
  );

  useEffect(() => {
    setActiveTab(location.pathname.substring(1) || 'home');
  }, [location.pathname]);

  const handleNavClick = (tab: string, path: string) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <NavBar>
      <NavItem
        active={activeTab === 'home'}
        onClick={() => handleNavClick('home', '/home')}
      >
        <FiHome size={24} />홈
      </NavItem>
      <NavItem
        active={activeTab === 'budget'}
        onClick={() => handleNavClick('budget', '/budget')}
      >
        <LuChartLine size={24} />
        예산관리
      </NavItem>
      <NavItem
        active={activeTab === 'stats'}
        onClick={() => handleNavClick('stats', '/stats')}
      >
        <FiPieChart size={24} />
        통계
      </NavItem>
      <NavItem
        active={activeTab === 'mypage'}
        onClick={() => handleNavClick('mypage', '/mypage')}
      >
        <FiUser size={24} />
        마이페이지
      </NavItem>
    </NavBar>
  );
};

export default BottomNav;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: ${COLORS.white};
`;

const NavItem = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  color: ${props =>
    props.active ? COMMON_COLORS.main : COMMON_COLORS.dark_gray};
  font-size: 0.5rem;
  font-weight: bold;
  gap: 5px;
`;
