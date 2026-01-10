import { Random } from '@woowacourse/mission-utils';
import { InputView, OutputView } from './view.js';
import Validator from './validators/Validator.js';

class App {
  async run() {
    const totalCostInteger = await this.inputTotalCost();
    const lottos = [];
    for (let i = 0; i < totalCostInteger / 500; i++) {
      const randomFiveNumbers = Random.pickUniqueNumbersInRange(1, 30, 5);
      // 오름차순 정렬하여 lottos에 push
      lottos.push(randomFiveNumbers.toSorted((a, b) => a - b));
    }
    // 구매한 로또 출력
    OutputView.printPurchasedLottos(lottos);

    const winningNumbersArray = await this.inputWinningNumbers();
    const bonusNumberInteger = await this.inputBonusNumber(winningNumbersArray);

    // countsByRank 생성
    const countsByRank = new Map([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);
    lottos.forEach((lotto) => {
      const rank = this.getRank(lotto, winningNumbersArray, bonusNumberInteger);
      countsByRank.set(rank, countsByRank.get(rank) + 1);
    });

    // 로또 결과 출력
    OutputView.printResult(countsByRank);
  }

  async inputTotalCost() {
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const input = await InputView.askAmount();
        Validator.validateCost(input);
        return input;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  async inputWinningNumbers() {
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const input = await InputView.askWinningLotto();
        Validator.validateWinningNumbers(input);
        return input;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  async inputBonusNumber(winningNumbersArray) {
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const input = await InputView.askBonusNumber();
        Validator.validateBonusNumbers(winningNumbersArray, input);
        return input;
      } catch (error) {
        OutputView.printErrorMessage(error);
      }
    }
  }

  getRank(numbers, winningNumbers, bonusNumber) {
    const matchCount = numbers.filter((number) => winningNumbers.includes(number)).length;
    if (matchCount === 5) {
      return 1;
    }
    if (matchCount === 4) {
      return this.#getRankTwoOrThree(numbers, bonusNumber);
    }
    if (matchCount === 3 && numbers.includes(bonusNumber)) {
      return 4;
    }
    if (matchCount === 2 && numbers.includes(bonusNumber)) {
      return 5;
    }
    return 0;
  }

  #getRankTwoOrThree(numbers, bonusNumber) {
    if (numbers.includes(bonusNumber)) {
      return 2;
    }
    return 3;
  }
}

export default App;
