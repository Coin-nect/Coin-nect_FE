import { COLORS } from '@constants/colors';

const statusMap = {
  warning: {
    tag: { color: COLORS.red, label: '경고' },
    boxColor: COLORS.red,
    message: (
      <>
        저번 달 대비 예산이 많이 올랐어요!
        <br />
        과소비를 주의하세요 :)
      </>
    ),
  },
  normal: {
    tag: { color: COLORS.green, label: '적정' },
    boxColor: COLORS.green,
    message: (
      <>
        저번 달과 비슷해요!
        <br />
        이대로 유지해주세요 :)
      </>
    ),
  },
  safe: {
    tag: { color: COLORS.yellow, label: '여유' },
    boxColor: COLORS.yellow,
    message: (
      <>
        저번 달 대비 예산이 많이 줄었어요!
        <br />더 많이 절약해요 :)
      </>
    ),
  },
};

export default statusMap;
