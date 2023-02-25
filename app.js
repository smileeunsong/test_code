const express = require('express');
const { add, subtract, multiple } = require('./calculate');

const app = express();

// 쿼리 스트링으로 받는 a와 b를 숫자로 바꾸어서 다음 컨트롤러로 넘기는 미들웨어
app.use((req, res, next) => {
  const { a, b } = req.query;

  req.num = {
    a: Number(a),
    b: Number(b),
  };

  next();
});

app.get('/add', (req, res) => {
  const { a, b } = req.num;
  const result = add(a, b);
  res.json({ result });
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.num;
  const result = subtract(a, b);
  res.json({ result });
});

app.get('/multiple', (req, res) => {
  const { a, b } = req.num;
  const result = multiple(a, b);
  res.json({ result });
});

app.get('/divide', (req, res) => {
  const { a, b } = req.num;
  const result = divide(a, b);
  res.json({ result });
});

module.exports = app;
