class Validator {
  static validateCost(num) {
    if (num % 500 !== 0) {
      throw Error('구매 금액은 500원 단위여야 합니다.');
    }
  }

  static validateWinningNumbers(winningNumbers) {
    const winningNumbersSet = new Set(winningNumbers);
    if (winningNumbers.length !== winningNumbersSet.size) {
      throw Error('당첨 번호는 중복될 수 없습니다.');
    }

    if (winningNumbers.length !== 5) {
      throw Error('당첨 번호는 5개가 입력되어야 합니다.');
    }

    winningNumbers.forEach((number) => {
      if (number < 1 || number > 30) {
        throw Error('당첨 번호는 1~30 사이의 숫자여야 합니다.');
      }
    });
  }

  static validateBonusNumbers(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 30) {
      throw Error('보너스 번호는 1~30 사이의 숫자여야 합니다.');
    }
  }
}

export default Validator;
