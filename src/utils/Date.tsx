// Calendar Header
/**
 * 현재 날짜로 연도,월 가져오기
 * ex) 2025년 2월
 */
export const getFormattedDate = (date: Date): string => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
};
