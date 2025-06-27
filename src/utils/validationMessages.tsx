export const getErrorMessage = (field: string, value: string): string => {
  switch (field) {
    case 'name_k':
      return value.trim() === ''
        ? '이름(한글)은 필수 입력 사항입니다.'
        : '이름(한글)은 한글만 입력 가능합니다.';
    case 'name_e':
      return value.trim() === ''
        ? '이름(영문)은 필수 입력 사항입니다.'
        : '이름(영문)은 영어만 입력 가능합니다.';
    case 'gender':
      return value.trim() === ''
        ? '성별은 필수 입력 사항입니다.'
        : '성별은 남자 또는 여자만 입력 가능합니다.';
    case 'age':
      return value.trim() === ''
        ? '나이는 필수 입력 사항입니다.'
        : '나이는 0 이상 100 이하로 입력 가능합니다.';
    case 'job':
      return value.trim() === '' ? '직업은 필수 입력 사항입니다.' : '';
    default:
      return '';
  }
};
