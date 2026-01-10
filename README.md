# javascript-planetlotto-precourse

## 우선순위

### 0. 구현되어있는 view.js 이해

- InputView에서 반환하는 타입체크
- 에러는 OutputView.printErrorMessage 를 통해 `[ERROR]` 태그가 더해져서 출력됨
- printPurchasedLottos 메소드에서 lotto를 어레이로 가정하고있음. 따라서 Lotto 모델을 만드는건 지금 당장은 어려워보임
- printResult 메소드에서 countsByRank를 파라미터로 받고있는데, Map<number, number> 타입이라 학습 필요

### 1. Validator.js 작성

- 사용자가 입력한 금액이 500원 단위인지.
- 입력한 당첨번호
  - 중복은 없는지
  - 입력된 숫자가 5개인지
  - 각 숫자가 1~30 범위 안에 있는지
- 입력한 보너스번호
  - 숫자가 1~30 범위 안에 있는지

### 2. App.js 작성 후 기본 작성되어있는 테스트코드 모두 통과하기

- while문과 try-catch문을 이용해 잘못된 입력시에도 인풋을 지속적으로 받을 수 있도록 구현
- 각 인풋을 받을때 유효성 검사 실행
- 에러시 catch문에서 OutputView.printErrorMessage로 `[ERROR]`태그를 추가하여 출력
- countsByRank를 Map타입으로 선언하고 getRank메소드를 구현하여 발행된 로또의 등수들을 countsByRank에 적용
- 최종결과 출력

### 3. 테스트코드작성

- ValidatorTest.js의 유효성 검사 메소드 테스트 코드 작성

작성 결과 코드 수정 사항

- 구매금액으로 0원, 음수입력 시 에러 발생 추가
- 보너스번호가 당첨번호와 겹치면 에러 발생 추가

### 4. 리팩토링

- 상수 분리
- makeLottos 함수 분리
- LottoGame model 생성 후 App.js에서 getCountsByRank 메소드 사용
