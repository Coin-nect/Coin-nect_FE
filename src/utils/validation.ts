export const validateKoreanName = (name: string): boolean => {
  const koreanNamePattern = /^[가-힣ㄱ-ㅎ]+$/; // 한글만 허용
  return koreanNamePattern.test(name);
};

export const validateEnglishName = (name: string): boolean => {
  const englishNamePattern = /^[a-zA-Z]+$/; // 영어만 허용
  return englishNamePattern.test(name);
};

export const validateGender = (gender: string): boolean => {
  const genderPattern = /^(남자|여자)$/; // 남자, 여자만 허용
  return genderPattern.test(gender);
};

export const validateAge = (age: string): boolean => {
  const ageValue = parseInt(age);
  return ageValue >= 0 && ageValue <= 100; // 0 이상 100 이하 허용
};

export const validateJob = (job: string): boolean => {
  return job.trim().length > 0; // 직업이 비어있지 않으면 유효
};
