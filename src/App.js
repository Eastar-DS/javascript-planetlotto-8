import { Random } from '@woowacourse/mission-utils';
import { InputView, OutputView } from './view.js';
import Validator from './validators/Validator.js';
import LottoGame from './models/LottoGame.js';

class App {
  async run() {
    const totalCostInteger = await this.inputTotalCost();
    const lottos = this.#makeLottos(totalCostInteger);
    // 구매한 로또 출력
    OutputView.printPurchasedLottos(lottos);

    const winningNumbersArray = await this.inputWinningNumbers();
    const bonusNumberInteger = await this.inputBonusNumber(winningNumbersArray);

    // LottoGame 생성
    const lottoGame = new LottoGame(lottos, winningNumbersArray, bonusNumberInteger);

    // countsByRank 생성
    const countsByRank = lottoGame.getCountsByRank();

    // 로또 결과 출력
    OutputView.printResult(countsByRank);
  }

  #makeLottos(totalCost) {
    const lottos = [];
    for (let i = 0; i < totalCost / 500; i++) {
      const randomFiveNumbers = Random.pickUniqueNumbersInRange(1, 30, 5);
      // 오름차순 정렬하여 lottos에 push
      lottos.push(randomFiveNumbers.toSorted((a, b) => a - b));
    }
    return lottos;
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
}

export default App;
