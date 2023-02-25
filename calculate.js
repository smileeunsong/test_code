function add(a, b) {
  if (!(typeof a == 'number' && typeof b == 'number')) return NaN;

  if (b < 0) {
    throw new Error('b가 0보다 작습니다. subtract를 사용하세요!');
  }
  return a + b;
}

function subtract(a, b) {
  if (!(typeof a == 'number' && typeof b == 'number')) return NaN;

  return a - b;
}

function multiple(a, b) {
  if (!(typeof a == 'number' && typeof b == 'number')) return NaN;

  return a * b;
}

function divide(a, b) {
  if (!(typeof a == 'number' && typeof b == 'number')) return NaN;

  if (b === 0) return Infinity;

  return a / b;
}

module.exports = { add, subtract, multiple, divide };
