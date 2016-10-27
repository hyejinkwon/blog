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

### 정리

- react-router 사용법

### TODOS

[major]
- ~~몽고디비 접속~~
- ~~글 목록가져오기, 글 작성, 글 삭제~~
- ~~fetch 사용~~
- 리덕스 사용
- production vs development 패키지 구분하기
- 로그인 기능 붙이기  

[minor]
- 수정 기능, 코멘트 기능
- 에러 페이지 마크업 및 스타일
- 마크다운 가능한 에디터 붙이기

[bugs]
- 서버 랜더링
### 참고

[Babel 사용하기](https://blog.outsider.ne.kr/1176)
