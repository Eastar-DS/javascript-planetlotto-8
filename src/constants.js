export const LOTTO_CONFIG = {
  NUMBERS_COUNT: 5,
  MIN_NUMBER: 1,
  MAX_NUMBER: 30,
  TICKET_PRICE: 500,
};

export const ERROR_MESSAGES = {
  LOTTO: {
    INVALID_LENGTH: `당첨 번호는 ${LOTTO_CONFIG.NUMBERS_COUNT}개여야 합니다.`,
    DUPLICATE_NUMBERS: '당첨 번호에 중복된 숫자가 있습니다.',
    INVALID_RANGE: `당첨 번호는 ${LOTTO_CONFIG.MIN_NUMBER}부터 ${LOTTO_CONFIG.MAX_NUMBER} 사이의 숫자여야 합니다.`,
  },

  GAME: {
    INVALID_BONUS_NUMBER_RANGE: `보너스 번호는 ${LOTTO_CONFIG.MIN_NUMBER} ~ ${LOTTO_CONFIG.MAX_NUMBER} 사이의 숫자여야 합니다.`,
    DUPLICATE_BONUS_NUMBER: '보너스 번호는 당첨번호와 중복될 수 없습니다.',
  },

  INPUT: {
    INVALID_COST_TYPE: '유효한 숫자를 입력해 주세요.',
    INVALID_COST_MINIMUM: `${LOTTO_CONFIG.TICKET_PRICE}원 이상의 금액을 입력해주세요.`,
    INVALID_COST_UNIT: `구매 금액은 ${LOTTO_CONFIG.TICKET_PRICE}원 단위로 입력해주세요.`,
  },
};
