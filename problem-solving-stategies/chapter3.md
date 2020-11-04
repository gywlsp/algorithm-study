# 3 코딩과 디버깅에 관하여

# 3.1 도입 : 코딩의 중요성을 간과하지 말라

코딩 과정은 어떤 문제를 풀 때나 항상 필요하다.

프로그래밍 대회에서 좋은 성적을 올리기 위한 비결은 **읽기 쉬운 코드를 작성**하는 것이다.

따라서 자신의 **코드 스타일을 간결하고 일관되게** 다듬으려고 노력해야 한다.

# 3.2 좋은 코드를 짜기 위한 원칙

## 1. **간결한 코드를 작성한다.**

## 2. **적극적으로 코드를 재사용한다.**

**코드의 모듈화**: 같은 코드가 반복된다면 이들을 함수나 클래스로 분리해 재사용하면 좋다.

## 3. **표준 라이브러리를 공부한다.**

언어의 문자열, 동적 배열, 큐, 리스트, 사전 등의 자료구조, 그리고 정렬 등의 표준적인 알고리즘 구현 사용법을 잘 알아둘 필요가 있다.

하지만 **표준 라이브러리**에서 큐나 스택 같은 자료 구조, 혹은 정렬 등의 기초적 알고리즘을 제공한다면, 프로그래밍 대회에서 **이를 쓰는 것이 좋다.**

## 4. **항상 같은 형태로 프로그램을 작성한다.**

같은 코드를 작성하는 더 좋은 방법에 대해 꾸준히 고민할 필요는 있지만, 자주 작성하는 알고리즘이나 코드에 대해서는 **한 번 검증된 코드를 작성하고 이것만을 꾸준히 사용할 필요**가 있다.

## 5. **일관적이고 명료한 명명법을 사용한다.**

**모호하지 않은 변수명과 함수명을 사용하는 버릇**을 들이고, 사용하는 언어의 표준 라이브러리에서 사용하는 **명령 규약을 익혀라.**

## 6. **모든 자료를 정규화해서 저장한다.**

같은 자료를 두 가지 형태로 저장하지 않는 것이 좋다. 미묘한 버그를 발생시키기 쉽다.

ex) 분수 9/6, 3/2를 저장

정규화는 프로그램이 자료를 입력받거나 계산하자마자 곧장 이루어져야 한다.

## 7. **코드와 데이터를 분리한다.**

코드의 논리와 상관 없는 데이터는 가능한 한 분리하는 것이 좋다.

# 3.3 자주 하는 실수

## 1. **산술 오버플로**

산술 오버플로란 계산 과정에서 변수의 표현 범위를 벗어나는 값을 사용하는 것이다.

## 2. **배열 범위 밖 원소에 접근**

C++은 배열의 원소에 접근할 때, **해당 인덱스가 배열 범위 안에 있는지를 별도로 확인해주지 않는다.** (javascript도)

배열 범위를 벗어난 위치에 접근하는 과정에서 런타임 스택 등을 건드려 프로그램이 **런타임 오류**를 내고 종료하는 경우에는 **배열 범위 밖에 접근했다는 사실을 깨달을 수 있다.**

**배열 크기를 정할 때 계산을 신중히** 하는 게 좋다.

**0을 시작으로 하는 범위와 1을 시작으로 하는 범위를 혼동하는 실수**도 흔하다.

## 3. **일관되지 않은 범위 표현 방식 사용하기**

프로그램 내에서 **한 가지 방법으로만 범위를 표현**할 필요가 있다.

## 4. **Off-by-one 오류**

Off-by-one 오류란 **계산의 큰 줄기는 맞지만 하나가 모자라거나 하나가 많아서 틀리는 코드의 오류**들을 모두 가리킨다.

ex) 길이가 100미터인 담장에 10미터 간격으로 울타리 기둥을 세울 때 기둥이 10개가 아니라 11개가 필요하다.

ex) 정수 배열 A[]가 주어질 때 A[i]부터 A[j]까지의 평균을 구할 때, 합을 j-i가 아니라 j-i+1로 나눠야 한다.

## 5. **컴파일러가 잡아주지 못하는 상수 오타**

## 6. **스택 오버플로**

스택 오버플로는 대개 **재귀 호출의 깊이가 너무 깊어져**서 온다.

## 7. **다차원 배열 인덱스 순서 바꿔 쓰기**

동적 계획법을 위한 메모이제이션 패턴을 사용할 때 이런 일이 잦은데, 이런 경우에는 가능한 한 특정 배열에 접근하는 위치를 하나로 통일하는 것이 좋다.

## 8. **잘못된 비교 함수 작성**

## 9. **최소, 최대 예외 잘못 다루기**

예외란 우리가 예상한 입력의 규칙에 들어맞지 않는 모든 입력이다.

**코드를 짤 때 가장 작은 입력과 가장 큰 입력에 대해 제대로 동작할지를 생각해 보면 오류를 잡을 수 있는 경우가 꽤 있다**.

## 10. **연산자 우선순위 잘못 쓰기**

괄호를 적극 활용하자.

## 11. **너무 느린 입출력 방식 선택**

## 12. **변수 초기화 문제**

**이전 입력에서 사용한 전역 변수 값을 초기화해야 한**다.

# 3.4 디버깅과 테스팅

## 디버깅에 관하여

디버거 없이 디버깅할 수 있는 능력을 길러야 한다.

**코드를 간결하게** 짜면 디버거 없이 눈만으로 검증하기가 비교적 쉽다.

### 디버거 없이 다음 단계를 밟으면 좋다.

- **작은 입력에 대해 제대로 실행되나 확인한다.**
- **단정문을 쓴다.**

    : 단정문이란 **주어진 조건이 거짓일 때 오류를 내고 프로그램을 강제 종료**시키는 함수 또는 구문을 말한다.

    주어진 조건이 참일 때는 무시되고, 거짓일 때에만 오류를 내므로 프로그램 내부 상태를 검증할 때 유용하게 쓸 수 있다.

    함수에서 넘겨 받은 인자들이 범위 안에 들어 있는지, 값들은 제대로 입력받았는지를 단정문으로 검사할 수 있다.

- **프로그램의 계산 중간 결과를 출력한다.**

## 테스트에 관하여

예제 입력을 만들어 가능한 한 많이 프로그램을 테스트하는 게 좋다.

주어진 예제 입력을 약간 바꿔 넣어 보거나, **있을 수 있는 가장 작은 입력과 가장 큰 입력**을 만들어서 넣어 보고 시간 안에 실행되는지, 답은 잘 나오는지 테스트해 보는 것이 좋다.