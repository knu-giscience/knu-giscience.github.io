# 연구실 홈페이지 편집 가이드 (학생용)

이 문서는 GIScience & Spatial Bigdata Lab 홈페이지를 직접 편집하는 방법을
설명합니다. **GitHub, 마크다운, BibTeX를 몰라도 됩니다.** 폼만 채우면 됩니다.

홈페이지: <https://knu-giscience.github.io/>

---

## 사이트 구조

홈페이지는 **한국어 페이지(`/ko/`)와 영문 페이지(`/`)** 두 벌로 운영됩니다.
페이지 우상단의 **"한국어" / "EN"** 버튼으로 언어를 전환할 수 있습니다.

| 항목 | 한국어 | 영문 |
|---|---|---|
| 메인 (소개) | `/ko/` | `/` |
| 멤버 | `/ko/members/` | `/members/` |
| 출판물 | `/ko/publications/` | `/publications/` |
| 프로젝트 | `/ko/projects/` | `/projects/` |
| 뉴스 | `/ko/news/` | `/news/` |
| 연락처 | `/ko/contact/` | `/contact/` |

> **편집 원칙**
>
> - **한국어 페이지가 메인**입니다. 모든 콘텐츠는 한국어로 먼저 작성합니다.
> - 영문 페이지는 영어 자료를 별도로 작성합니다 (당장은 비어 있어도 OK).
> - 출판물(Publications)은 한 BibTeX 파일을 한·영 페이지가 공유합니다.

---

## 1. 처음 한 번만 하는 준비

### (1) GitHub 계정 만들기

1. <https://github.com/> 접속 → **Sign up**
2. 학교 이메일 또는 개인 이메일로 가입
3. 사용자명을 정한다 (예: `knugis-yourname`)

### (2) 교수님께 GitHub 사용자명 알려주기

본인 GitHub 사용자명을 슬랙 또는 이메일로 알려주면 편집 권한이 부여됩니다.
GitHub에 초대 메일이 오면 **"Accept invitation"** 버튼을 꼭 눌러주세요.

### (3) Pages CMS 접속

홈페이지 편집 도구는 **Pages CMS**라는 무료 웹사이트입니다.

1. <https://app.pagescms.org/> 접속
2. **Sign in with GitHub** 클릭
3. "Authorize Pages CMS" 허용
4. 좌측 목록에서 `knu-giscience/knu-giscience.github.io` 선택

이게 끝. 다음부터는 1번 클릭이면 편집 가능. **북마크 추천.**

---

## 2. 가장 자주 할 작업: 한국어 News 추가

학회, 논문, 특강, 졸업, 수상 등이 있으면 한국어 뉴스에 추가합니다.

### 단계별 방법

1. Pages CMS 접속 → 좌측에서 **"[KO] 뉴스"** 클릭
2. **"뉴스 본문"** 영역의 맨 위에 새 항목 추가:

```html
<div class="news-item">
<div class="date">2026.05.15</div>
<h3>여기에 뉴스 제목</h3>
<p>여기에 본문 첫 단락...</p>
<p>여기에 본문 둘째 단락...</p>
</div>
```

3. 위 형식을 복사해서 가장 위(2026.03.20 항목 위)에 붙여넣고 내용 수정
4. **저장** 클릭 → 1~3분 후 사이트 반영

### 형식 안내

- `<div class="news-item">...</div>` 한 묶음이 뉴스 한 건
- `<div class="date">날짜</div>` — 날짜 (YYYY.MM.DD 또는 범위)
- `<h3>제목</h3>` — 굵은 제목 한 줄
- `<p>...</p>` — 본문 단락 (여러 개 가능)
- 이모지(🎉 🏆 🎓 📄)나 마크다운(**굵게**)도 사용 가능
- **시간순 역순**(최신이 위)으로 추가

### 영문 뉴스도 추가하려면 (선택)

좌측 메뉴 **"[EN] News (collection)"** → "+ Add Entry" → 폼 입력 → 저장.
영문 뉴스는 한국어와 별개로 한 건씩 폼으로 작성합니다.

---

## 3. 한국어 Projects 수정

새 과제가 시작/종료되거나 정보가 바뀔 때.

1. Pages CMS → **"[KO] 프로젝트"**
2. **본문**에서 해당 프로젝트 블록 수정 또는 새 블록 추가:

```html
<div class="proj">
<h3>1. 프로젝트명</h3>
<div class="meta"><span><strong>기간:</strong> 2026.05. – 2026.10.</span><span><strong>발주처:</strong> 국토연구원</span></div>
<ul>
<li>내용 첫째 줄</li>
<li>내용 둘째 줄</li>
</ul>
</div>
```

3. 진행 중 프로젝트는 `[진행 중]` 섹션 안에, 완료 프로젝트는 `[완료]`
   섹션 안에 둠
4. 저장

---

## 4. Members 정보 수정

### 한국어 페이지의 멤버 정보

1. Pages CMS → **"[KO] 멤버"** 클릭
2. 5개 그룹 중 수정할 그룹 펼치기:
   - 교수, 박사과정, 석사과정, 학부생, 동문
3. 본인 항목 수정 또는 새 항목 추가
4. **저장**

### 영문 페이지의 멤버 정보

좌측 **"[EN] Members"**에서 동일한 작업.
한국어와 영문이 별도 파일이라 둘 다 업데이트 권장.

### 사진 추가/교체

1. 본인 사진 (정사각형, 500×500px 권장, jpg)
2. 파일명 영문으로 (예: `myeonghwan_kim.jpg`, 띄어쓰기 없이)
3. 폼의 **사진** 항목에서 업로드
4. 저장하면 자동으로 `assets/img/members/`에 들어감

### 졸업하면

해당 그룹에서 본인 항목 삭제 → **동문**에 새로 추가 → 비고에 현재 소속 입력.

---

## 5. Publications 추가 (논문 게재)

논문은 **BibTeX**라는 형식으로 관리됩니다. 한국어 페이지와 영문 페이지가
같은 BibTeX 파일을 공유합니다.

### 가장 쉬운 방법: Google Scholar에서 BibTeX 복사

1. <https://scholar.google.com/> 에서 자기 논문 검색
2. 논문 아래 **"인용"** (또는 따옴표 아이콘) 클릭
3. **BibTeX** 클릭 → 텍스트 복사
4. Pages CMS → **"Publications (BibTeX, shared by both languages)"**
5. 적절한 카테고리(I~IV) 안에 붙여넣기

### 카테고리 (Weebly와 동일)

```
%% I. Refereed Journal Articles      → @article
%% II. Peer-reviewed Book Chapters   → @incollection
%% III. Conference Proceedings       → @inproceedings
%% IV. Research Reports              → @techreport
```

새 항목은 해당 섹션 헤더 바로 아래에 추가.

### 한국어 논문은?

기존 한국어 항목을 복사해서 정보만 바꾸세요:

```bibtex
@article{lee2026sample,
  title    = {{국문 논문 제목 그대로}},
  author   = {{이재현, 홍길동}},
  journal  = {대한교통학회지},
  volume   = {44},
  number   = {1},
  pages    = {1--15},
  year     = {2026}
}
```

**중요**: 한국어 저자명은 `{{이재현, 홍길동, 김철수}}`처럼 **하나의 묶음**
으로 작성합니다 (영어식 ` and ` 구분자를 쓰면 화면에 "and"가 그대로 나옴).
한국어 제목과 저널명도 그대로 한글로.

### 대표 논문 표시

BibTeX 항목 끝에 `selected = {true},` 한 줄을 추가하면 영문 홈페이지의
"selected publications"에 표시됩니다.

---

## 6. About / Contact 페이지 수정

연구실 소개나 연락처가 바뀌면.

| 페이지 | Pages CMS 항목 |
|---|---|
| 한국어 소개 (홈) | `[KO] 소개 (홈)` |
| 한국어 연락처 | `[KO] 연락처` |
| 영문 About | `[EN] Home (About)` |
| 영문 Contact | `[EN] Contact` |

본문을 수정하고 저장.

---

## 7. 자주 묻는 질문

### Q. 잘못 저장했어요. 되돌릴 수 있나요?

네. 모든 변경은 git commit으로 기록됩니다. 교수님께 알려주시면 1분 안에
되돌릴 수 있습니다.

### Q. 저장했는데 사이트에 안 보여요.

저장 후 사이트 반영까지 **1~3분** 걸립니다. 그래도 안 보이면:

1. <https://github.com/knu-giscience/knu-giscience.github.io/actions> 접속
2. 최신 빌드(맨 위)가 ✅ 초록색이면 성공, ❌ 빨간색이면 빌드 실패
3. 빨간색이면 교수님께 알려주세요

### Q. 한국어 본문에 영어 단어가 섞여도 되나요?

네. 학회명, 논문 제목, 저자명 등 영어 표기가 자연스러운 곳은 그대로
영어로 두세요. 한국어 페이지의 핵심은 **본문 설명이 한국어인 것**입니다.

### Q. 영문 페이지는 비어 있어도 괜찮나요?

당장은 OK. 한국어 콘텐츠가 풍부하니 영문은 점진적으로 채워가면 됩니다.
새 News를 영어로도 적어두면 가장 좋고, 시간이 부족하면 한국어만
업데이트해도 됩니다.

### Q. 사진은 어디에 저장되나요?

자동으로 `assets/img/members/` 또는 `assets/img/projects/`에 들어갑니다.
직접 폴더를 손대지 않아도 됩니다.

### Q. 모바일에서도 편집 가능한가요?

네. Pages CMS는 모바일·태블릿에서도 동작합니다. 학회장에서 폰으로 News
추가도 가능합니다.

### Q. GitHub 코드는 직접 안 봐도 되나요?

네. **Pages CMS만 쓰면 됩니다.** GitHub 사이트는 들여다보지 않아도
모든 편집이 가능합니다.

---

## 8. 도움이 필요할 때

- 교수님 (이재현)
- 슬랙: 연구실 채널 #homepage
- Pages CMS 매뉴얼: <https://pagescms.org/docs/>
- 마크다운 가이드: <https://www.markdownguide.org/cheat-sheet/>

---

처음엔 어색해도 News 두세 개 추가해보면 금방 익숙해집니다. 부담 없이
시작하세요.
