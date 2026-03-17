# 9996_X 배포 가이드

## 1) 파일 구조

```text
9996_X/
├─ index.html
├─ styles.css
├─ script.js
└─ fonts/
   ├─ Pretendard-Medium.woff2
   └─ Pretendard-Medium.woff
```

## 2) 폰트 넣기
직접 받은 Pretendard Medium 파일을 아래 이름으로 넣어 주세요.

- `fonts/Pretendard-Medium.woff2`
- `fonts/Pretendard-Medium.woff`

지금 CSS는 이 이름을 기준으로 연결되어 있습니다.

## 3) 로컬 확인
`index.html`을 더블클릭해서 브라우저에서 열면 됩니다.

## 4) GitHub 업로드
레포를 먼저 만든 뒤, 터미널에서 아래를 실행하세요.

```bash
cd 9996_X
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/아이디/레포이름.git
git push -u origin main
```

## 5) Render 배포
- Render 접속
- New +
- Static Site
- GitHub 레포 연결
- Build Command: 비워두기
- Publish Directory: `.`

그대로 저장하면 배포됩니다.

## 6) 작동 방식
- 전송 버튼 짧게 클릭: 랜덤 메시지 1개 출력
- 전송 버튼 2초 이상 길게 누름: 전체 메시지 순차 출력

## 7) 디자인 구조
- 데스크톱/패드에서는 가로형 비율
- 모바일에서는 세로형 비율
- 한 페이지에 PC/모바일 시안을 동시에 보여주지 않고, 화면 크기에 따라 한 가지 레이아웃만 보이게 되어 있습니다.
