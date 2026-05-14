# WAF (We Are Friend)

외국인들을 위한 친구 매칭 채팅 모바일 애플리케이션.

관심사 기반으로 친구를 추천받고, 실시간 채팅으로 소통할 수 있는 React Native 앱.

---

## 주요 기능

- **회원가입** — 이름, 성별, 나이 입력
- **관심사 선택** — 언어, 여행, 스포츠 카테고리
- **친구 목록** — 프로필 이미지 + 상태 메시지
- **실시간 채팅** — 메시지 버블 UI, 2초 간격 폴링 기반
- **친구 추천** — 관심사 기반 친구 추천 목록

---

## 기술 스택

- **React Native** (Expo SDK 40)
- **React Navigation** v5 (Stack + Bottom Tabs)
- **NativeBase** v2 (UI 컴포넌트)
- **Axios** (REST API) + **Socket.io** (실시간 통신)
- **Express.js** (채팅 서버)

---

## 실행 방법

```bash
npm install
expo start
```

---

## 화면 구성

| 화면 | 설명 |
|------|------|
| Welcome | 스플래시 화면 |
| Login | 로그인 (ID/PW) |
| SignUp | 회원가입 |
| Category | 관심사 선택 |
| FriendList | 친구 목록 (탭 1) |
| ChatList | 채팅 목록 (탭 2) |
| ChatDetail | 채팅 상세 |
| RecommendList | 친구 추천 (탭 3) |
