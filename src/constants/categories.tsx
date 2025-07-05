import {
  FaUtensils,
  FaStore,
  FaHeartbeat,
  FaGlassCheers,
  FaShoppingBag,
  FaBus,
  FaHome,
  FaMusic,
  FaPlane,
  FaPen,
  FaUsers,
  FaDollarSign,
  FaUserCog,
  FaGift,
  FaMoneyCheckAlt,
  FaWallet,
  FaPiggyBank,
  FaMedal,
  FaExchangeAlt,
  FaChartLine,
  FaEllipsisH,
} from 'react-icons/fa';

export const categories = [
  {
    label: '식비',
    icon: (color: string, size = 24) => (
      <FaUtensils color={color} size={size} />
    ),
  },
  {
    label: '마트/편의점',
    icon: (color: string, size = 24) => <FaStore color={color} size={size} />,
  },
  {
    label: '의료/건강',
    icon: (color: string, size = 24) => (
      <FaHeartbeat color={color} size={size} />
    ),
  },
  {
    label: '술/유흥',
    icon: (color: string, size = 24) => (
      <FaGlassCheers color={color} size={size} />
    ),
  },
  {
    label: '미용/쇼핑',
    icon: (color: string, size = 24) => (
      <FaShoppingBag color={color} size={size} />
    ),
  },
  {
    label: '교통',
    icon: (color: string, size = 24) => <FaBus color={color} size={size} />,
  },
  {
    label: '주거/통신',
    icon: (color: string, size = 24) => <FaHome color={color} size={size} />,
  },
  {
    label: '생활품',
    icon: (color: string, size = 24) => (
      <FaShoppingBag color={color} size={size} />
    ),
  },
  {
    label: '문화/여가',
    icon: (color: string, size = 24) => <FaMusic color={color} size={size} />,
  },
  {
    label: '여행/숙박',
    icon: (color: string, size = 24) => <FaPlane color={color} size={size} />,
  },
  {
    label: '교육',
    icon: (color: string, size = 24) => <FaPen color={color} size={size} />,
  },
  {
    label: '경조사',
    icon: (color: string, size = 24) => <FaUsers color={color} size={size} />,
  },
  {
    label: '금융',
    icon: (color: string, size = 24) => (
      <FaDollarSign color={color} size={size} />
    ),
  },
  {
    label: '자기계발',
    icon: (color: string, size = 24) => <FaUserCog color={color} size={size} />,
  },
  {
    label: '선물',
    icon: (color: string, size = 24) => <FaGift color={color} size={size} />,
  },
  {
    label: '월급',
    icon: (color: string, size = 24) => (
      <FaMoneyCheckAlt color={color} size={size} />
    ),
  },
  {
    label: '용돈',
    icon: (color: string, size = 24) => <FaWallet color={color} size={size} />,
  },
  {
    label: '이자/배당금',
    icon: (color: string, size = 24) => (
      <FaPiggyBank color={color} size={size} />
    ),
  },
  {
    label: '상여금',
    icon: (color: string, size = 24) => <FaMedal color={color} size={size} />,
  },
  {
    label: '이월',
    icon: (color: string, size = 24) => (
      <FaExchangeAlt color={color} size={size} />
    ),
  },
  {
    label: '투자',
    icon: (color: string, size = 24) => (
      <FaChartLine color={color} size={size} />
    ),
  },
  {
    label: '기타',
    icon: (color: string, size = 24) => (
      <FaEllipsisH color={color} size={size} />
    ),
  },
];
