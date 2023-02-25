const http = require('http');
const fetch = require('node-fetch-commonjs');
const app = require('./app');

describe('E2E Test', () => {
  let server;

  beforeEach(() => {
    // 테스트 케이스들이 독립된 환경에서 테스트할 수 있게 개별적으로 listen합니다.
    server = http.createServer(app).listen(10010);
  });

  afterEach(() => {
    // 각 테스트가 끝난 후 서버를 종료시킵니다.
    server.close();

    // 가비지 컬렉터에서 http server 객체를 메모리에서 해제하게 만듭니다.
    server = null;
  });

  test('사용자가 a에 3, b에 4를 담아 add로 get 요청합니다.', async () => {
    const resBody = await fetch('http://localhost:10010/add?a=3&b=4').then(
      (res) => res.json()
    );

    expect(resBody.result).toBe(7);
  });

  test('사용자가 a에 6, b에 2를 담아 subtract로 get 요청합니다.', async () => {
    const resBody = await fetch('http://localhost:10010/subtract?a=6&b=2').then(
      (res) => res.json()
    );

    expect(resBody.result).toBe(4);
  });

  test('사용자가 a에 10, b에 3을 담아 multiple로 get 요청합니다.', async () => {
    const resBody = await fetch(
      'http://localhost:10010/multiple?a=10&b=3'
    ).then((res) => res.json());

    expect(resBody.result).toBe(30);
  });

  test('사용자가 a에 15, b에 3을 담아 divide로 get 요청합니다.', async () => {
    const resBody = await fetch('http://localhost:10010/divide?a=15&b=3').then(
      (res) => res.json()
    );

    expect(resBody.result).toBe(5);
  });
});
