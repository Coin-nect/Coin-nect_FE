export interface Transaction {
  id: string;
  time: string;
  category: string;
  title: string;
  amount: number;
  isIncome: boolean;
}

export interface DayData {
  date: number;
  yearMonth: string;
  dayOfWeek: string;
  income: number;
  expense: number;
  transactions: Transaction[];
}

export const transactionData: DayData[] = [
  {
    date: 17,
    yearMonth: '2025.07',
    dayOfWeek: '금요일',
    income: 0,
    expense: 10000,
    transactions: [
      {
        id: 't-1-1',
        time: '12:53',
        category: '식비',
        title: '샐러드 & 샌드위치',
        amount: 10000,
        isIncome: false,
      },
    ],
  },
  {
    date: 8,
    yearMonth: '2025.07',
    dayOfWeek: '수요일',
    income: 30000,
    expense: 78000,
    transactions: [
      {
        id: 't-2-1',
        time: '10:31',
        category: '기타',
        title: '기타',
        amount: 30000,
        isIncome: true,
      },
      {
        id: 't-2-2',
        time: '12:40',
        category: '식비',
        title: '편의점 도시락',
        amount: 8000,
        isIncome: false,
      },
      {
        id: 't-2-3',
        time: '15:20',
        category: '문화/여가',
        title: '그라운드시소 전시회',
        amount: 20000,
        isIncome: false,
      },
      {
        id: 't-2-4',
        time: '19:55',
        category: '미용/쇼핑',
        title: '모자 구매',
        amount: 50000,
        isIncome: false,
      },
    ],
  },
  {
    date: 6,
    yearMonth: '2025.07',
    dayOfWeek: '월요일',
    income: 50000,
    expense: 3000,
    transactions: [
      {
        id: 't-3-1',
        time: '10:35',
        category: '기타',
        title: '어쩌구 환불',
        amount: 50000,
        isIncome: true,
      },
      {
        id: 't-3-2',
        time: '12:42',
        category: '식비',
        title: '편의점 도시락',
        amount: 3000,
        isIncome: false,
      },
    ],
  },
  {
    date: 2,
    yearMonth: '2025.07',
    dayOfWeek: '수요일',
    income: 0,
    expense: 38000,
    transactions: [
      {
        id: 't-4-1',
        time: '19:55',
        category: '미용/쇼핑',
        title: '모자 구매',
        amount: 38000,
        isIncome: false,
      },
    ],
  },
];

// Analysis
export const monthlyData = [
  { date: '2025.07', income: 150, expense: 120 },
  { date: '2025.06', income: 80, expense: 90 },
  { date: '2025.05', income: 130, expense: 110 },
  { date: '2025.04', income: 120, expense: 100 },
  { date: '2025.03', income: 160, expense: 130 },
];

export const yearlyData = [
  { date: '2025', income: 1500, expense: 1200 },
  { date: '2024', income: 1550, expense: 1300 },
  { date: '2023', income: 1400, expense: 1100 },
  { date: '2022', income: 1450, expense: 1150 },
  { date: '2021', income: 1600, expense: 1250 },
];

export const monthlyComparisonData = [
  {
    label: '2025.07',
    amount: 836459,
    details: [2000000, 300000, 336459, 100000],
  },
  {
    label: '2025.06',
    amount: 543987,
    details: [200000, 200000, 143987],
  },
  {
    label: '2025.05',
    amount: 789400,
    details: [300000, 300000, 189400, 150000, 100000],
  },
  {
    label: '2025.04',
    amount: 612345,
    details: [250000, 200000, 162345],
  },
  {
    label: '2025.03',
    amount: 723891,
    details: [280000, 250000, 193891, 100000, 90000, 80000],
  },
];

export const yearlyComparisonData = [
  {
    label: '2025',
    amount: 9032450,
    details: [3200000, 2900000, 2932450, 2500000, 1500000, 1000000],
  },
  {
    label: '2024',
    amount: 8123490,
    details: [3100000, 2600000, 2423490],
  },
  {
    label: '2023',
    amount: 7890000,
    details: [2800000, 2500000, 2590000],
  },
  {
    label: '2022',
    amount: 8400000,
    details: [3000000, 2700000, 2700000],
  },
  {
    label: '2021',
    amount: 8600000,
    details: [3100000, 2800000, 2700000],
  },
];
