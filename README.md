### 환경 설정

* linter 사용하기
http://gnujoow.github.io/dev/2016/09/22/Dev4-lets-use-linter/

* babel CLI tool 사용하기
http://babeljs.io/docs/usage/cli/

* 글로벌 설치 여부 확인하기
`
npm list -g —-depth=0
`

* package.json에서 사용하기 위해 글로벌로 설치 할 모듈

`
npm install -g babel-cli nodemon cross-env
`

- babel-cli: 콘솔 환경에서 babel 사용
- nodemon: 파일이 수정 될 때 서버 재 시작
- cross-env : OS 환경변수값 설정

### TODOS

[major]
- ~~몽고디비 접속~~
- ~~글 목록가져오기, 글 작성, 글 삭제~~
- ~~fetch 사용~~
- ~~리덕스 사용~~
- ~~리덕스 라우터로 히스토리 관리~~
- ~~production vs development 패키지 구분하기~~
- 로그인 기능 붙이기
  - firebase (연습)
  - passport

[minor]
- 수정 기능, 코멘트 기능
- 에러 페이지 마크업 및 스타일
- 마크다운 가능한 에디터 붙이기

[bugs]
- ~~랜더링 문제(서버는 index.html로 이동됨)~~
- development 문제
  - ~react-hot-loader~ version update
  - path 문제
- ~~material-ui 모듈 문제~~ [참고](https://codedump.io/share/JVC44fmZDwQC/1/error-in-react-tap-event-pluginsrcinjecttapeventpluginjs)


### 참고

- [Babel 사용하기](https://blog.outsider.ne.kr/1176)
- [Production Build 시 참고](https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build)
