# javascript-planetlotto-precourse

## 우선순위
0. 구현되어있는 view.js 이해
  - InputView에서 반환하는 타입체크
  - 에러는 OutputView.printErrorMessage 를 통해 `[ERROR]` 태그가 더해져서 출력됨
  - printPurchasedLottos 메소드에서 lotto를 어레이로 가정하고있음. 따라서 Lotto 모델을 만드는건 지금 당장은 어려워보임
  - printResult 메소드에서 countsByRank를 파라미터로 받고있는데, Map<number, number> 타입이라 학습 필요

1. Validator.js 작성
- 사용자가 입력한 금액이 500원 단위인지.
- 입력한 당첨번호
  - 중복은 없는지
  - 입력된 숫자가 5개인지
  - 각 숫자가 1~30 범위 안에 있는지
- 입력한 보너스번호
  - 숫자가 1~30 범위 안에 있는지

2. App.js 작성 후 기본 작성되어있는 테스트코드 모두 통과하기

3. 리팩토링
