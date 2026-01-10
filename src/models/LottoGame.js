import { Random } from '@woowacourse/mission-utils';
import Validator from '../validators/Validator.js';
import { LOTTO_CONFIG } from '../constants.js';

class LottoGame {
  #lottos;

  #winningNumbers;

  #bonusNumber;

  constructor(totalCost, winningNumbers, bonusNumber) {
    LottoGame.#validate(totalCost, winningNumbers, bonusNumber);
    this.#lottos = [];
    for (let i = 0; i < totalCost / LOTTO_CONFIG.TICKET_PRICE; i++) {
      const randomFiveNumbers = Random.pickUniqueNumbersInRange(
        LOTTO_CONFIG.MIN_NUMBER,
        LOTTO_CONFIG.MAX_NUMBER,
        LOTTO_CONFIG.NUMBERS_COUNT
      );
      // 오름차순 정렬하여 lottos에 push
      this.#lottos.push(randomFiveNumbers.toSorted((a, b) => a - b));
    }
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  static #validate(totalCost, winningNumbers, bonusNumber) {
    Validator.validateCost(totalCost);
    Validator.validateWinningNumbers(winningNumbers);
    Validator.validateBonusNumbers(bonusNumber);
  }
}

export default LottoGame;
