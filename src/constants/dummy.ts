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
        category: '비상금',
        title: '비상금',
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
        category: '취미',
        title: '그라운드시소 전시회',
        amount: 20000,
        isIncome: false,
      },
      {
        id: 't-2-4',
        time: '19:55',
        category: '쇼핑',
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
        category: '쇼핑',
        title: '모자 구매',
        amount: 38000,
        isIncome: false,
      },
    ],
  },
];
