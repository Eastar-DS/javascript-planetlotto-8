class Validator {
  static validateCost(num) {
    if (num % 500 !== 0) {
      throw Error('구매 금액은 500원 단위여야 합니다.');
    }
  }
}

export default Validator;
