const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 제공을 위해 'dist' 폴더를 사용합니다.
// dist 폴더 안에 정적 파일 index.html이 존재하면 '/'경로에 나오게 된다.
app.use(express.static('dist'));

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
