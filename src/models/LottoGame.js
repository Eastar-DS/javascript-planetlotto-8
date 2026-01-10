class LottoGame {
  #lottos;

  #winningNumbers;

  #bonusNumber;

  constructor(lottos, winningNumbers, bonusNumber) {
    this.#lottos = lottos;
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  getLottos() {
    return this.#lottos;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  getCountsByRank() {
    const countsByRank = new Map([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
    ]);

    this.#lottos.forEach((lotto) => {
      const rank = this.#getRank(lotto, this.#winningNumbers, this.#bonusNumber);
      countsByRank.set(rank, countsByRank.get(rank) + 1);
    });

    return countsByRank;
  }

  #getRank(numbers, winningNumbers, bonusNumber) {
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

export default LottoGame;
