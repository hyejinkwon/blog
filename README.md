### 환경 설정

* linter 사용하기
http://gnujoow.github.io/dev/2016/09/22/Dev4-lets-use-linter/

* babel CLI tool 사용하기
http://babeljs.io/docs/usage/cli/

* 글로벌 설치 여부 확인하기
`
npm list -g —-depth=0
`

* 글로벌로 설치 할 모듈: package.json에서 사용하기 위해

`
npm install -g babel-cli nodemon cross-env
`

- babel-cli: 콘솔 환경에서 babel 사용
- nodemon: 파일이 수정 될 때 서버 재 시작
- cross-env : OS 환경변수값 설정

### 왜죠?

- post 후 뜨는 에러
- 마지막 server 의미가 뭘까 ? "dev": "cross-env NODE_ENV=development nodemon --exec babel-node --presets=es2015 ./server/index.js --watch server"
- webpack -w - cache 파일쌓이는 이유?

### 정리

- react-router 사용법

### 참고

[Babel 사용하기](https://blog.outsider.ne.kr/1176)
