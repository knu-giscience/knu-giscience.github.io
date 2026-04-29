# 연구실 홈페이지 편집 가이드 (학생용)

이 문서는 GIScience & Spatial Bigdata Lab 홈페이지를 직접 편집하는 방법을
설명합니다. **GitHub, 마크다운, BibTeX를 몰라도 됩니다.** 폼만 채우면 됩니다.

홈페이지: <https://knu-giscience.github.io/>

---

## 1. 처음 한 번만 하는 준비

### (1) GitHub 계정 만들기

1. <https://github.com/> 접속 → **Sign up** 클릭
2. 학교 이메일 또는 개인 이메일로 가입 (학교 메일 권장)
3. 사용자명(아이디)을 정한다 (예: `knugis-yourname`)

### (2) 교수님/선배에게 GitHub 사용자명 알려주기

본인 GitHub 사용자명을 슬랙 또는 이메일로 알려주면, 24시간 안에 편집 권한이
부여됩니다. 권한이 부여되면 GitHub에 초대 메일이 옵니다 — **메일의 "Accept
invitation" 버튼을 꼭 눌러야 합니다.**

### (3) Pages CMS 접속

홈페이지 편집 도구는 **Pages CMS**라는 무료 웹사이트입니다.

1. <https://app.pagescms.org/> 접속
2. **Sign in with GitHub** 클릭 → GitHub 계정으로 로그인
3. 처음이면 권한 허용 페이지가 뜸 → "Authorize Pages CMS" 클릭
4. 좌측 목록에서 `knu-giscience/knu-giscience.github.io` 선택

이게 끝입니다. **다음부터는 1번 클릭이면 편집 가능.** 북마크 추천.

---

## 2. 가장 자주 할 작업: News 한 건 올리기

학회 다녀오거나, 논문이 나오거나, 특강이 있으면 News에 올립니다.

### 단계별 방법

1. Pages CMS 접속 후 좌측에서 **"News"** 클릭
2. 우측 상단 **"+ Add Entry"** 버튼 클릭
3. 폼이 뜸 — 다음 항목을 채운다:

   | 항목 | 입력 예시 |
   |---|---|
   | **Date** | 달력에서 클릭 (예: 2026-04-15) |
   | **Short title** | 비워둬도 OK. 본문이 길면 짧은 제목 입력 |
   | **Show as one-liner** | ✅ 켜둠 (한 줄 News로 표시). 본문이 긴 글이면 ❌ |
   | **News content** | 무슨 일이 있었는지 자유롭게 작성 (한국어/영어 OK) |

4. **저장** 버튼 클릭 → 끝.

   1~2분 후 <https://knu-giscience.github.io/news/> 에서 확인 가능.

### News 본문 예시

```
박사과정 최수정, 석사과정 김명환·정연우·최민정 학생이 샌프란시스코에서
개최된 2026 AAG Annual Meeting에 참가하여 구두 및 포스터 발표를
진행했습니다. 🎉
```

이모지(🎉, 🏆, 🎓, 📄)를 써도 OK. 마크다운 (**굵게**, [링크](url))도 가능.

### 사진 첨부하고 싶다면

본문 작성 화면에서 **이미지 아이콘** → 사진 드래그&드롭 → 자동 업로드.

---

## 3. Members 정보 수정

졸업, 입학, 직책 변경 등이 있으면 수정.

1. Pages CMS 좌측 → **"Members"** 클릭
2. 다음 5개 그룹 중 수정할 그룹 펼치기:
   - Principal Investigator (교수님)
   - PhD Students
   - MS Students
   - Undergraduate Students
   - Alumni
3. 본인 항목 수정 또는 새 항목 추가
4. **저장**

### 사진 추가/교체

1. 본인 사진 파일 준비 (정사각형, 500x500px 정도 권장, jpg)
2. 파일명을 `이름영문.jpg` 형식으로 (예: `myunghwan_kim.jpg`, 띄어쓰기 없이)
3. 폼의 **Photo** 항목에서 업로드
4. 저장하면 자동으로 `assets/img/members/` 폴더에 들어감

### 졸업하면

1. 본인 항목을 PhD/MS/UG 그룹에서 **삭제** (- 버튼)
2. **Alumni** 그룹에 새로 추가
3. **note**에 "MS 졸업, 한국교통연구원 재직" 등 현재 소속 입력

---

## 4. Projects 추가

새 연구과제가 시작되면.

1. Pages CMS → **"Projects"** → **"+ Add Entry"**
2. 폼 입력:
   - **Title (English)**: 영문 프로젝트명
   - **Description**: 한 줄 한국어 설명 OK
   - **Cover image**: 표지 사진 (선택)
   - **Importance**: 진행 중은 1~4, 완료는 5 이상
   - **Category**: `ongoing` 또는 `completed` 선택
   - **Period**: `2026.05 – 2026.10` 같은 형식
   - **Sponsor**: 발주처 (예: 국토연구원)
   - **Body**: 자세한 설명
3. 저장

### 프로젝트가 끝났을 때

해당 프로젝트 항목을 열고 **Category**를 `ongoing` → `completed`로 바꾸기만
하면 됩니다.

---

## 5. Publications 추가 (논문 게재)

논문은 **BibTeX**라는 학술용 형식으로 관리됩니다. 처음엔 어려워 보이지만
복사-붙여넣기로 충분합니다.

### 가장 쉬운 방법: Google Scholar에서 BibTeX 복사

1. <https://scholar.google.com/> 에서 자기 논문 검색
2. 논문 아래 **"인용"** (또는 따옴표 아이콘) 클릭
3. **BibTeX** 클릭 → 텍스트가 뜸 → 복사
4. Pages CMS → **"Publications (BibTeX)"** 열기
5. 파일 맨 위 적절한 카테고리(국제논문/국내논문/책챕터/학술대회/보고서)
   섹션 안에 붙여넣기
6. 저장

### 한국 학술지 논문은?

Google Scholar에 없을 수 있습니다. 그럴 땐 기존 항목을 복사해서 정보만
바꿔주세요. 예시:

```bibtex
@article{lee2026sample,
  title    = {{국문 논문 제목 그대로}},
  author   = {{이재현} and {홍길동}},
  journal  = {대한교통학회지},
  volume   = {44},
  number   = {1},
  pages    = {1--15},
  year     = {2026}
}
```

**중요**: 한국어 제목과 한국어 저자명은 반드시 `{{...}}` 처럼 중괄호 두 번
감싸야 합니다.

### 대표 논문에 별표 표시 (홈페이지에 띄우기)

BibTeX 항목 끝에 `selected = {true},` 한 줄을 추가하면 홈페이지 첫 화면의
"selected publications"에 표시됩니다.

---

## 6. About / Contact 페이지 수정

연구실 소개, 연락처 등이 바뀌면.

1. Pages CMS → **"Home page (About)"** 또는 **"Contact page"**
2. **Body content** 직접 편집
3. 저장

---

## 7. 자주 묻는 질문

### Q. 잘못 저장했어요. 되돌릴 수 있나요?

네. 모든 변경은 **git commit**으로 자동 기록됩니다. 교수님께 알려주시면
1분 안에 이전 상태로 되돌릴 수 있습니다.

### Q. 저장했는데 사이트에 안 보여요.

저장 후 **사이트 반영까지 1~3분 정도** 걸립니다. 그래도 안 보이면:

1. <https://github.com/knu-giscience/knu-giscience.github.io/actions> 접속
2. 최신 빌드(맨 위)가 ✅ 초록색이면 성공, ❌ 빨간색이면 빌드 실패
3. 빨간색이면 교수님께 알려주세요

### Q. 한국어/영어 둘 다 표시하고 싶어요.

대부분 페이지에서 한국어와 영어를 자유롭게 섞어 써도 됩니다. About 페이지는
"English / 한국어" 토글 버튼이 있어서 두 언어 본문을 분리 관리합니다.

### Q. 사진은 어디에 저장되나요?

자동으로 `assets/img/` 또는 하위 폴더(`members/`, `projects/`)에 들어갑니다.
직접 폴더 만지지 않아도 됩니다.

### Q. 모바일에서도 편집 가능한가요?

네. Pages CMS는 모바일/태블릿에서도 작동합니다. 학회장에서 폰으로
News 추가도 가능합니다.

### Q. 다른 사람이 동시에 편집하면 충돌하지 않나요?

같은 항목을 동시에 수정하지 않으면 OK. 같은 News 한 건을 둘이 동시에
편집하는 건 피하세요.

### Q. GitHub의 코드가 어렵게 느껴져요. 안 봐도 되나요?

네, **Pages CMS만 쓰면 됩니다.** GitHub 사이트는 직접 안 봐도 됩니다.

---

## 8. 도움이 필요할 때

- 교수님 (이재현): reuental99@gmail.com
- 슬랙: 연구실 채널 #homepage
- Pages CMS 매뉴얼: <https://pagescms.org/docs/>
- 마크다운 가이드: <https://www.markdownguide.org/cheat-sheet/>

---

**한 마디**: 처음엔 어색해도 News 두세 개 올려보면 금방 익숙해집니다.
어려운 일이 아니니 부담 없이 시작하세요!
