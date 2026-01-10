import { ERROR_MESSAGES } from '../constants.js';

class Validator {
  static validateCost(num) {
    if (num <= 0) {
      throw Error(ERROR_MESSAGES.INPUT.INVALID_COST_MINIMUM);
    }

    if (num % 500 !== 0) {
      throw Error(ERROR_MESSAGES.INPUT.INVALID_COST_UNIT);
    }
  }

  static validateWinningNumbers(winningNumbers) {
    const winningNumbersSet = new Set(winningNumbers);
    if (winningNumbers.length !== winningNumbersSet.size) {
      throw Error(ERROR_MESSAGES.LOTTO.DUPLICATE_NUMBERS);
    }

    if (winningNumbers.length !== 5) {
      throw Error(ERROR_MESSAGES.LOTTO.INVALID_LENGTH);
    }

    winningNumbers.forEach((number) => {
      if (number < 1 || number > 30) {
        throw Error(ERROR_MESSAGES.LOTTO.INVALID_RANGE);
      }
    });
  }

  static validateBonusNumbers(winningNumbers, bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 30) {
      throw Error(ERROR_MESSAGES.GAME.INVALID_BONUS_NUMBER_RANGE);
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw Error(ERROR_MESSAGES.GAME.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default Validator;
