import { ERROR_MESSAGES, LOTTO_CONFIG } from '../constants.js';

class Validator {
  static validateCost(num) {
    if (num <= 0) {
      throw Error(ERROR_MESSAGES.INPUT.INVALID_COST_MINIMUM);
    }

    if (num % LOTTO_CONFIG.TICKET_PRICE !== 0) {
      throw Error(ERROR_MESSAGES.INPUT.INVALID_COST_UNIT);
    }
  }

  static validateWinningNumbers(winningNumbers) {
    const winningNumbersSet = new Set(winningNumbers);
    if (winningNumbers.length !== winningNumbersSet.size) {
      throw Error(ERROR_MESSAGES.LOTTO.DUPLICATE_NUMBERS);
    }

    if (winningNumbers.length !== LOTTO_CONFIG.NUMBERS_COUNT) {
      throw Error(ERROR_MESSAGES.LOTTO.INVALID_LENGTH);
    }

    winningNumbers.forEach((number) => {
      if (number < LOTTO_CONFIG.MIN_NUMBER || number > LOTTO_CONFIG.MAX_NUMBER) {
        throw Error(ERROR_MESSAGES.LOTTO.INVALID_RANGE);
      }
    });
  }

  static validateBonusNumbers(winningNumbers, bonusNumber) {
    if (bonusNumber < LOTTO_CONFIG.MIN_NUMBER || bonusNumber > LOTTO_CONFIG.MAX_NUMBER) {
      throw Error(ERROR_MESSAGES.GAME.INVALID_BONUS_NUMBER_RANGE);
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw Error(ERROR_MESSAGES.GAME.DUPLICATE_BONUS_NUMBER);
    }
  }
}

export default Validator;
