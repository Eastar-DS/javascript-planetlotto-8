import Validator from '../src/validators/Validator.js';

// 입력값들이 숫자인지는 view.js에서 검증해줍니다.

describe('validateCost 메서드 테스트', () => {
  test('금액이 500원 단위면 통과', () => {
    // given
    const num = 5500;

    // when & then: 에러가 발생하지 않음
    expect(() => Validator.validateCost(num)).not.toThrow();
  });

  test('금액이 500원 단위가 아니면 에러 발생', () => {
    // given
    const num = 5501;

    // when & then: 에러가 발생함
    expect(() => Validator.validateCost(num)).toThrow('구매 금액은 500원 단위여야 합니다.');
  });
});

describe('validateWinningNumbers 메서드 테스트', () => {
  test('당첨번호가 중복되면 에러 발생', () => {
    // given
    const winningNumbers = [1, 1, 1, 1, 5];

    // when & then: 에러가 발생함
    expect(() => Validator.validateWinningNumbers(winningNumbers)).toThrow(
      '당첨 번호는 중복될 수 없습니다.'
    );
  });

  test('당첨번호가 5개 미만이면 에러 발생', () => {
    // given
    const winningNumbers = [1, 2, 3, 4];

    // when & then: 에러가 발생함
    expect(() => Validator.validateWinningNumbers(winningNumbers)).toThrow(
      '당첨 번호는 5개가 입력되어야 합니다.'
    );
  });

  test('당첨번호가 5개 초과여도 에러 발생', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    // when & then: 에러가 발생함
    expect(() => Validator.validateWinningNumbers(winningNumbers)).toThrow(
      '당첨 번호는 5개가 입력되어야 합니다.'
    );
  });

  test('당첨번호중 1보다 작은 숫자가 있으면 에러 발생', () => {
    // given
    const winningNumbers = [0, 1, 2, 3, 30];

    // when & then: 에러가 발생함
    expect(() => Validator.validateWinningNumbers(winningNumbers)).toThrow(
      '당첨 번호는 1~30 사이의 숫자여야 합니다.'
    );
  });

  test('당첨번호중 30보다 큰 숫자가 있으면 에러 발생', () => {
    // given
    const winningNumbers = [1, 2, 3, 4, 31];

    // when & then: 에러가 발생함
    expect(() => Validator.validateWinningNumbers(winningNumbers)).toThrow(
      '당첨 번호는 1~30 사이의 숫자여야 합니다.'
    );
  });
});

describe('validateBonusNumbers 메서드 테스트', () => {
  test('보너스 번호가 1보다 작으면 에러 발생', () => {
    // given
    const bonusNumbers = 0;

    // when & then: 에러가 발생함
    expect(() => Validator.validateBonusNumbers(bonusNumbers)).toThrow(
      '보너스 번호는 1~30 사이의 숫자여야 합니다.'
    );
  });

  test('보너스 번호가 30보다 크면 에러 발생', () => {
    // given
    const bonusNumbers = 31;

    // when & then: 에러가 발생함
    expect(() => Validator.validateBonusNumbers(bonusNumbers)).toThrow(
      '보너스 번호는 1~30 사이의 숫자여야 합니다.'
    );
  });
});
