const { add, subtract, multiple, divide } = require('./calculate');

describe('calculate unit test', () => {
  describe('add', () => {
    test('add(1,2)는 3이 되어야합니다.', () => {
      expect(add(1, 2)).toBe(3);
    });

    test('add(1,-1)은 에러를 던집니다.', () => {
      try {
        add(1, -1);
      } catch (err) {
        expect(err).toBeInstanceOf(Error);
        expect(err).toHaveProperty(
          'message',
          'b가 0보다 작습니다. subtract를 사용하세요!'
        );
      }
    });
  });

  describe('subtract', () => {
    test('subtract(2,1)는 1이 되어야합니다.', () => {
      expect(subtract(2, 1)).toBe(1);
    });
  });

  describe('multiple', () => {
    test('multiple(3, 4)는 12가 되어야합니다.', () => {
      expect(multiple(3, 4)).toBe(12);
    });
  });

  describe('divide', () => {
    test('divide(10,2)는 5가 되어야합니다.', () => {
      expect(divide(10, 2)).toBe(5);
    });
  });
});

// integration test
describe('calculate integration test', () => {
  test('add(1,3)과 subtract(4,2)를 multiple한 결과는 8입니다.', () => {
    const addResult = add(1, 3);
    expect(addResult).toBe(4);
    const subtractResult = subtract(4, 2);
    expect(subtractResult).toBe(2);
    expect(multiple(addResult, subtractResult)).toBe(8);
  });

  test('multiple(4,2)와 divide(49,7)을 add한 결과값에 subtract(5,3)을 subtract한 결과는 13입니다.', () => {
    const multipleResult = multiple(4, 2);
    expect(multipleResult).toBe(8);
    const divideResult = divide(49, 7);
    expect(divideResult).toBe(7);
    const subResult = add(multipleResult, divideResult);
    expect(subResult).toBe(15);

    const subtractResult = subtract(5, 3);
    expect(subtractResult).toBe(2);

    expect(subtract(subResult, subtractResult)).toBe(13);
  });
});
