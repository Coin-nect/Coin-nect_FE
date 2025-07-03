// 요일 구하기 helper
export const getDayOfWeek = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', { weekday: 'short' });
};
