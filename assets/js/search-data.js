// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-members",
          title: "members",
          description: "People at the GIScience &amp; Spatial Bigdata Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/kr/members/";
          },
        },{id: "nav-members",
          title: "members",
          description: "People at the GIScience &amp; Spatial Bigdata Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by category, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/kr/publications/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by category, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Funded research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/kr/projects/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Funded research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Lab news and updates.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/kr/news/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "How to reach us, and how to find our office.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/kr/contact/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "How to reach us, and how to find our office.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-2022년-대한지리학회-연례학술대회-참석-및-발표",
          title: '2022년 대한지리학회 연례학술대회 참석 및 발표',
          description: "서울 경희대학교 스페이스 21에서 개최된 대한지리학회 하계학술대회에 심지윤 학생이 참가하여 구두 발표(동대구역 복합환승센터 개소 후 철도 여객수요 변화 분석: PageRank Centrality를 중심으로) 및 포스터 발표(동대구역 역세권 지역의 인구구조와 토지이용 변화 분석: 복합환승센터 개소 전후 비교를 중심으로 (2016-2021))를 진행하였습니다. 요약본(abstract)은 &#39;2022년 대한지리학회 연례학술대회 발표 논문 요약집&#39; 172-173, 259-260 페이지에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09-/";
            },},{id: "news-대한교통학회지-논문-제40권-제5호-게재",
          title: '대한교통학회지 논문(제40권 제5호) 게재',
          description: "석사과정 심지윤 학생, 박경아 박사님(한국교통연구원 광역·도시교통연구본부장), 이재현 교수님께서 작성한 논문 &#39;동대구역 복합환승센터 개소 전후 철도 네트워크 중심성 변화 분석: PageRank Centrality를 중심으로(A Before-and-After Study in Changes of the Railway Network Centrality on Dongdaegu Multi-Modal Transit Hub: Focused on PageRank Centrality)&#39;가 발행되었습니다. 원문은 대한교통학회지 제40권 제5호 669-682 페이지에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--1/";
            },},{id: "news-국토연구원-한국교통연구원-방문-및-과제-관련-회의-참석",
          title: '국토연구원, 한국교통연구원 방문 및 과제 관련 회의 참석',
          description: "​2022년 2학기에 진행한 과제의 발주처인 세종 국토연구원, 한국교통연구원에 해당 과제의 참여연구원인 변정환, 심지윤, 최상헌, 최수정 학생이 방문하였습니다.  ​국토연구원 안소현 박사님, 한국교통연구원 원민수 박사님을 뵙고 각 기관을 둘러보며, 소개받고 회의를 진행하는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--2/";
            },},{id: "news-2022년-한국도시지리학회-동계학술대회-참가",
          title: '2022년 한국도시지리학회 동계학술대회 참가',
          description: "서울 동국대학교 사범대학(학림관)에서 개최된 한국도시지리학회 동계학술대회에 심지윤, 최수정 학생이 참가하였습니다. 오전에는 서울 한양도성(중구 다산동 성곽길) 답사, 오후에는 일반논문 세션 발표 순으로 진행되었습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--3/";
            },},{id: "news-대한교통학회지-제40권-제6호-논문-게재",
          title: '대한교통학회지(제40권 제6호) 논문 게재',
          description: "이재현 교수님, 윤서연 박사님(국토연구원 국토인프라연구본부 센터장), 석사과정 심지윤 학생이 작성한 논문 &#39;원격근무가 도시활동 선택에 미치는 영향에 관한 탐색적 연구(A Explanatory Analysis of the Impact of the Telecommuting on the Urban Activity Type Choices)&#39;가 발행되었습니다.  ​원문은 대한교통회지 제40권 제6호 781-798 페이지에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--4/";
            },},{id: "news-제88회-대한교통학회-학술발표회-참석-및-발표",
          title: '제88회 대한교통학회 학술발표회 참석 및 발표',
          description: "서울 한국과학기술회관에서 개최된 대한교통학회 제88회 학술발표회에 심지윤, 최수정 학생이 참가하여 포스터 발표(SRT 개통 전후 철도 네트워크 중심성 변화 분석: PageRank Centrality를 중심으로)를 진행하였습니다. 요약본(abstract)은 대한교통학회 홈페이지 &#39;제88회 학술발표회 발표집(76번)&#39;에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--5/";
            },},{id: "news-2023년-1학기-개강-기념-연구실-세미나-진행",
          title: '2023년 1학기 개강 기념 연구실 세미나 진행',
          description: "GIScience 및 공간 빅데이터 연구실에서 대학원생과 학부연구생 모두가 참여하는 개강 기념 연구실 세미나를 사회과학대학 452호에서 진행하였습니다. 학부연구생 대상으로 연구실 소개, 스터디 운영, 학술자료를 활용하여 문헌조사 하는 방법, 현재 연구실에서 진행 중인 연구 소개 등의 사항을 전달하고, 서로의 연구 관심 분야를 공유하는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--6/";
            },},{id: "news-2023-aag-annual-meeting-참석-및-발표",
          title: '2023 AAG Annual Meeting 참석 및 발표',
          description: "미국 콜로라도주 덴버에서 개최된 2023 AAG(American Association of Geographers) Annual Meeting에 심지윤, 최수정 학생이 참가하여 포스터 발표(A Before-and-After Study in Changes of the Railway Network Centrality on the Opening of SRT in Korea: Focused on PageRank Centrality)를 진행하였습니다. 요약본(abstract)은 2023 AAG annual meeting 홈페이지의 Abstract Gallery에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--7/";
            },},{id: "news-국토연구원-한국환경연구원-방문-및-과제-관련-회의-참석",
          title: '국토연구원, 한국환경연구원 방문 및 과제 관련 회의 참석',
          description: "2023년 1학기에 진행 예정인 과제의 발주처인 국토연구원, 한국환경연구원에 참여연구원 김다솔, 심지윤, 최수정, 허소진 학생이 방문하였습니다. 국토연구원 윤은주 박사님, 한국환경연구원 한진석 박사님을 뵙고 프로젝트 진행에 앞서 구체적인 방향성을 점검하고 의견을 나누는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--8/";
            },},{id: "news-업무-진행-사항-보고-및-연구실-미팅",
          title: '업무 진행 사항 보고 및 연구실 미팅',
          description: "현재 진행중인 과제에 대해 각자 부여받은 업무에 대한 수행 결과를 공유하고, 프로젝트의 진행 상황을 점검하기 위해 사회과학대학 스터디룸에서 연구실 미팅을 진행하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--9/";
            },},{id: "news-transportation-reserach-part-d-transport-and-environments-논문-게재",
          title: 'Transportation Reserach Part D: Transport and Environments 논문 게재',
          description: "이재현 교수님, 석사과정 조민영 학생, Gil Tal, Scott Hardman(The Electric Vehicle Research Center, UC Davis)이 작성한 논문 &#39;Do plug-in hybrid adopters switch to battery electric vehicles (and vice versa)?&#39;가 발행되었습니다. 원문은 Transportation Reserach Part D: Transport and Environments, 119, 103752에서 확인하실 수 있으며, 해당 논문은 미국 대표 일간지인 The Washington Post에 &#39;The cars that get you addicted to driving electric(2023. 05. 04)&#39;로 보도되었습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--10/";
            },},{id: "news-2023년-대한지리학회-연례학술대회-참석-및-발표",
          title: '2023년 대한지리학회 연례학술대회 참석 및 발표',
          description: "강원대학교 춘천캠퍼스에서 개최된 2023년 대한지리학회 연례학술대회에 GIScience 및 공간빅데이터 연구실 소속 학부, 석사 과정생 8명이 참가하였습니다.   심지윤, 최수정 학생은 ‘수도권 지역 활동-통행행태의 공간적 특성 분석: 활동반경과 복잡성을 중심으로’를, 김다솔, 정연우, 최상헌 학생은 ‘도심 내 상업기능의 공간적 변화에 대한 탐색적 분석’을, 김명환, 우상민, 최민정 학생은 ‘대구광역시 유아 인구 증감 지역의 정주 환경 분석’을 주제로 포스터를 발표하였습니다.   요약본(abstract)은 &#39;2023년 대한지리학회 연례학술대회 발표 논문 요약집&#39;에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--11/";
            },},{id: "news-2023년-여름방학-맞이-qgis-마스터-스터디-진행",
          title: '2023년 여름방학 맞이 QGIS 마스터 스터디 진행',
          description: "GIScience 및 공간 빅데이터 연구실에서 주관하는 QGIS 마스터 스터디 OT를 사회과학대학 206호에서 진행하였습니다. 참여자들을 대상으로 스터디의 계획 및 향후 진행 방향에 대해 설명한 후, 서로의 관심 분야를 공유하는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--12/";
            },},{id: "news-경북대학교-일반대학원-지리학과-합동-워크숍",
          title: '경북대학교 일반대학원 지리학과 합동 워크숍',
          description: "이재현 교수님과 석사과정 심지윤, 최수정 학생은 경북대학교 인재원에서 개최된 경북대학교 일반대학원 지리학과 합동 워크숍에 참여하였습니다. 각 연구실에서 진행하는 프로젝트를 공유하였으며, GIScience 및 공간빅데이터 연구실에서는 가구통행실태조사 자료를 이용하여 개인의 활동-통행 특성과 이를 공간적으로 분석한 연구에 대해 소개하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--13/";
            },},{id: "news-국토연구원-연구-과제-관련-회의-진행",
          title: '국토연구원 연구 과제 관련 회의 진행',
          description: "2023년 중 진행할 과제의 발주처인 국토연구원의 윤서연 센터장님과 연치형, 공재형 연구원님께서 경북대학교를 방문하셨습니다. 이재현 교수님을 비롯하여 참여연구원인 심지윤, 최수정, 김명환, 정연우 학생은 방문하신 연구원분들을 뵙고 과제의 방향성에 대한 논의 및 의견 교환 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--14/";
            },},{id: "news-2023-대학원생-글로벌챌린저-프로그램-참여",
          title: '2023 대학원생 글로벌챌린저 프로그램 참여',
          description: "이재현 교수님과 석사과정 심지윤, 최수정 학생, 학부과정 정연우 학생은 2023 대학원생 글로벌챌린저 프로그램을 통해 Santa Barbara, Davis 등 미국의 캘리포니아주에 다녀왔습니다.   Santa Barbara에서는 UC Santa Barbara의 지리학과 Konstadinos Goulias 교수님, 졸업생 Kathleen Deutsch-Burgner 박사님, 박사과정 학생(Seonga Cho , Jiwon Baik)과 함께 연구 내용을 공유하였으며, 이후 San Francisco에서는  Apple 본사 visitor center를 방문하여 데이터 사이언티스트로 재직 중이신 Eunhee Lim  박사님을 만나 업무와 관련해서 소개 받았습니다.  Davis에서는 UC Davis의 Electric Vehicle Research Center를 방문하여 연구 내용을 발표하고, Gil Tal 센터장님, Alan Jenn, Scott Hardman, Debapriya Chakraborty 교수님, Kihyun Kwon, Vaishnavi Karanam 박사님, Hanif Tayarani 박사과정 학생 분들과 함께 협업 중인 과제에 대해 논의하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--15/";
            },},{id: "news-국토연구원-연구-과제-관련-회의-진행",
          title: '국토연구원 연구 과제 관련 회의 진행',
          description: "2023년에 진행중인 과제의 발주처인 국토연구원의 윤은주 박사님과 강혜원 연구원님께서 경북대학교를 방문하셨습니다. 이재현 교수님을 비롯하여 참여연구원인 심지윤, 최수정, 김명환, 정연우 학생은 방문하신 연구원분들을 뵙고 회의 진행 및 과제 진행 상황에 대한 논의 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--16/";
            },},{id: "news-2023년-대한교통학회-amp-대한국토-도시계획학회-공동학술대회-참여-및-발표",
          title: '2023년 대한교통학회 &amp;amp; 대한국토·도시계획학회 공동학술대회 참여 및 발표',
          description: "부산 벡스코에서 개최된 2023년 대한교통학회 &amp; 대한국토·도시계획학회 공동학술대회에  석사과정 심지윤, 최수정, 정다빈 학생, 학석사연계과정 김명환, 최상헌 학생, 학부과정 정연우, 최민정 학생이 참가하였습니다.  최수정 학생은 &#39;통행 지표로의 모티프 활용 가능성에 대한 탐색적 연구: 사회경제적 변수별 모티프 구성비율을 중심으로&#39;를, 김명환 학생은 &#39;서울특별시 동대문구 전동킥보드의 최적 주차시설 입지 선정&#39;을 주제로 구두발표를 진행하였으며, 정다빈 학생은 &#39;도시 간 심리거리에 대한 탐색적 분석: 거리 카토그램을 이용하여&#39;를 주제로 포스터를 발표하였습니다.  요약본(abstract)은 &#39;2023년 대한교통학회 학술대회지 제89권&#39;에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--17/";
            },},{id: "news-제15회-한중일지리학대회-참석-및-발표",
          title: '제15회 한중일지리학대회 참석 및 발표',
          description: "서울시립대학교에서 개최된 제15회 한중일지리학대회에 석사과정 심지윤, 최수정, 정다빈 학생이 참가하였습니다.  심지윤 학생은 &#39;Activity-Travel Pattern Analysis of Residents in the Seoul Metropolitan Area of South Korea: Focusing on Complexity&#39;를, 최수정 학생은 &#39;Understanding Daily Activity-Travel Patterns of Elderly Population in South Korea Using Tree-Structured Analysis of Sequence&#39;를 주제로 구두발표를 진행하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--18/";
            },},{id: "news-2023년-2학기-giscience-및-공간빅데이터-연구실-open-lab",
          title: '2023년 2학기 GIScience 및 공간빅데이터 연구실 Open Lab',
          description: "GIScience 및 공간빅데이터 연구실은 경북대학교 학부생을 대상으로 사회과학대학 206호와 307호에서 연구실 Open Lab을 진행하였습니다. Open Lab 프로그램을 통해 참여자들을 대상으로 연구실의 연구 분야 및 프로젝트, 주요 활동 소개와 프로젝트와 관련한 GIS 실습을 진행하였으며, 질의응답 시간을 통해 연구실과 대학원 생활에 대해 소개하는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--19/";
            },},{id: "news-2023년-지자체-대학-협력기반-사업-공공데이터-활용-나드리콜-개선-해커톤-참가-및-최우수상-수상",
          title: '2023년 지자체-대학 협력기반 사업 공공데이터 활용 나드리콜 개선 해커톤 참가 및 최우수상 수상...',
          description: "GIScience 및 공간빅데이터 연구실 석사과정 최수정, 정다빈 학생이 &#39;2023년 지자체-대학 협력기반 사업 공공데이터 활용 나드리콜 개선 해커톤&#39;에 참가하여 최우수상(대구공공시설관리공단 이사장상)을 수상하였습니다.  최수정, 정다빈 학생은 &#39;나드리콜 수요의 시·공간적 분포를 고려한 장·단기 서비스 이용 효율성 증대 방안&#39;을 주제로 교통약자 모빌리티 허브로서의 나드리콜 어플 기능 강화 방안, 대기지역 도출을 통한 배차시간 감축 및 증가하는 고령수요에 대한 대응 전략을 제시하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--20/";
            },},{id: "news-심지윤-학생-석사-졸업",
          title: '심지윤 학생, 석사 졸업',
          description: "GIScience 및 공간빅데이터 연구실 심지윤 학생이 경북대학교 대학원 지리학과에서 소정의 과정을 이수하고 학위논문(Motif, Complexity를 활용한 모빌리티 패턴의 다변량 공간통계분석: 수도권 거주자를 중심으로)을 제출하여 석사학위를 수여받았습니다.  학위 논문은 &#39;RISS 학술연구정보서비스&#39;에서 확인하실 수 있습니다. 심지윤 석사의 졸업을 축하합니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--21/";
            },},{id: "news-제90회-대한교통학회-학술발표회-참석-및-발표",
          title: '제90회 대한교통학회 학술발표회 참석 및 발표',
          description: "서울 한국과학기술회관에서 개최된 2024년 제90회 대한교통학회 학술발표회에  석사과정 최수정, 정다빈 학생, 학석사연계과정 김명환 학생이 참가하였습니다.  최수정 학생은 &#39;개인통행실태조사 자료를 활용한 위치정보 기반 토지 이용 순차 패턴과 활동-통행 순차 패턴의 비교 분석&#39;을, 정다빈 학생은 &#39;개인신용 빅데이터 기반 통근통행 자료를 활용한 수도권 소득별 생활권 분석 및 특성 파악&#39;을 주제로 포스터를 발표하였고, 김명환 학생은 &#39;교통약자의 분포를 고려한 저상버스의 이용 형평성 분석: 서울특별시의 고령자와 장애인을 대상으로&#39;를 주제로 구두발표를 진행하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--22/";
            },},{id: "news-2024-aag-annual-meeting-참석-및-발표",
          title: '2024 AAG Annual Meeting 참석 및 발표',
          description: "미국 하와이주 호놀룰루에서 개최된 2024 AAG(American Association of Geographers) Annual Meeting에 최수정, 정다빈 석사과정생이 참가하여 두 개의 포스터 발표를 진행하였습니다. 최수정 학생은 &#39;Empirical Analysis of the Relationships between Land Use and Activity-Travel Behavior: Sequential Analysis Approaches&#39;을, 정다빈 학생은 &#39;An Analysis of Cognitive Distance between Cities&#39;을 주제로 포스터를 발표하였습니다.  요약본(abstract)은 2024 AAG Annual Meeting 홈페이지의 Abstract Gallery에서 확인하실 수 있습니다. 4월 18일에는 KAGES* 총회에 참석하여 여러 지리학 세부 분야의 교수님, 선배, 동료와 교류하며 네트워킹하는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--23/";
            },},{id: "news-39-지속가능한-교통에서-사회과학의-역할-전기차의-수용과-확산을-중심으로-39-세미나-개최",
          title: '&amp;#39;지속가능한 교통에서 사회과학의 역할 : 전기차의 수용과 확산을 중심으로&amp;#39; 세미나 개최',
          description: "GIScience 및 공간빅데이터 연구실은 UC Davis Institute of Transportation의 Alan Jenn, Scott Hardman 교수님, University of Queensland의 Kai Li Lim 박사님, 인천대학교 도시공학과 권기현 교수님을 초청하여 사회과학대학 310호에서 &#39;지속가능한 교통에서 사회과학의 역할 : 전기차의 수용과 확산을 중심으로&#39;를 주제로 세미나를 진행하였습니다. ​ 인천대학교 도시공학과의 권기현 교수님께서는 UC Davis Institute of Transportation에 대하여 간단한 소개를 진행하였으며, UC Davis Institute of Transportation의 Alan Jenn, Scott Hardman 교수님, University of Queensland의 Kai Li Lim 박사님께서는 주제발표를 진행하였습니다.  이후 주제발표와 관련하여 경북대학교 지리학과 강남영 교수님, 미디어커뮤니케이션학과 박찬경 교수님, 지리학과 석사과정 최수정, 정다빈 학생이 토론에 참여하였습니다.​",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--24/";
            },},{id: "news-the-37th-international-electric-vehicle-symposium-amp-exhibition-발표-및-우수-논문상-수상",
          title: 'The 37th International Electric Vehicle Symposium &amp;amp; Exhibition 발표 및 우수 논문상 수상...',
          description: "이재현 교수님께서  &#39;Electric Waves to Future Mobility&#39;라는 주제 하에 2024년 4월 23일부터 26일까지 4일 간 서울 코엑스에서 개최된 제37회 세계 전기자동차 학술대회 및 전시회(The 37th International Electric Vehicle Symposium &amp; Exhibition, EVS37)에서 우수 논문상(Best Dialogue Award)을 수상하였습니다.  이재현 교수님께서는 &#39;In-depth Examination of EV Discontinuance : Multifaceted Satisfaction with Replaced Vehicles&#39;를 주제로 전기차 이용 중단자들이 그동안 이용해오던 차량에 가졌던 불만을 다양한 측면에서 조사하였고, 이를 바탕으로 이용중단자들을 유형화하였습니다.​",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--25/";
            },},{id: "news-2024년-2학기-giscience-및-공간빅데이터-연구실-open-lab",
          title: '2024년 2학기 GIScience 및 공간빅데이터 연구실 Open Lab',
          description: "GIScience 및 공간빅데이터 연구실은 경북대학교 학부생을 대상으로 2024년 1학기 대학원 진학 설명회를 진행하였습니다.  경북대학교 지리학과 대학원 진학 안내를 비롯하여 연구실(원) 소개와 연구실 차원에서 진행했던 여러 프로젝트를 소개하는 시간을 가졌습니다. 또한, 교내 대학원생 대상 프로그램인 대학원생 글로벌 챌린저 등을 소개하고 지리학자로서 참여할 수 있는 국내외 학회 소개와 참여 후기를 공유했습니다. ​ 진학 설명회의 말미에는 진학 설명회 참여 학부생들과 이재현 교수님 및 석사과정생들과 대학원 진학 및 진로 등에 대한 고민을 함께 나누는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--26/";
            },},{id: "news-2024년-대한지리학회-연례학술대회-참석-및-발표",
          title: '2024년 대한지리학회 연례학술대회 참석 및 발표',
          description: "서울대학교 관악캠퍼스에서 개최된 2024년 대한지리학회 연례학술대회에  석사과정 최수정 학생, 학석사연계과정 김명환 학생, 학부과정 윤희상, 정연우 학생이 참가하였습니다.  최수정 학생은 &#39;고령자 활력증진에 영향을 미치는 공간적 요인 분석 : 수도권 고령자의 활동통행 행태와 생활인프라 및 대중교통 접근성을 중심으로&#39;를 주제로 구두발표를 진행하였고, 학문 후속세대 우수 발표자 상을 수상하였습니다. 정연우 학생은 &#39;생활·복지시설별 격자 단위 접근성 유형화 및 취약구역 확인: 부산광역시 고령 인구를 중심으로&#39;를 주제로 포스터 발표를 진행하였고, 학문 후속세대 우수 포스터 상을 수상하였으며, 그 외에도 &#39;경북대학교 인근 자취밀집구역 밤거리 안전 취약구역 확인&#39;, &#39;보도블록 파손으로 인한 통행위험구역 탐구: 경북대 인근 대현동과 신암1동을 중심으로&#39;를 주제로 포스터를 발표하였습니다. 김명환 학생은 &#39;도시 활력에 따른 상업 시설의 밀도 및 다양성 비교 분석: 대구광역시를 사례로&#39;를 주제로, 윤희상 학생은 &#39;대구광역시 민방위 대피시설 접근성 및 수용 능력 평가&#39;, &#39;경북대학교 인근 자취밀집구역 밤거리 안전 취약구역 확인&#39;을 주제로 포스터 발표를 진행하였습니다.   요약본(Abstract)은 &#39;2024년 대한지리학회 연례학술대회 발표 논문 요약집&#39;에서 확인할 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--27/";
            },},{id: "news-17th-iatbr-conference-참여-및-발표",
          title: '17th IATBR Conference 참여 및 발표',
          description: "오스트리아 빈에서 개최된 17th IATBR(International Association for Travel Behavior Research) Conference에 석사과정 최수정, 정다빈 학생과 학석사연계과정 김명환 학생이 참가하였습니다.  이재현 교수님께서는 &#39;Exploring Electric Vehicle Sharing Amongst Household Members in California&#39;을, 최수정 학생은 &#39;Fast-Aging Society&#39;s Elderly Travel Behavior Analysis with Sequence Tree Method&#39;을 주제로 구두 발표를 진행하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--28/";
            },},{id: "news-2024년-2학기-giscience-및-공간빅데이터-연구실-open-lab",
          title: '2024년 2학기 GIScience 및 공간빅데이터 연구실 Open Lab',
          description: "GIScience 및 공간빅데이터 연구실은 경북대학교 학부생을 대상으로 2024년 2학기 대학원 진학 설명회를 진행하였습니다.  경북대학교 지리학과 대학원 진학 안내를 비롯하여 연구실(원) 소개와 연구실 차원에서 진행했던 여러 프로젝트 및 개인 연구를 소개하는 시간을 가졌습니다. 또한, 교내 대학원생 대상 프로그램인 대학원생 글로벌 챌린저 등을 소개하고 2024년에 연구실에서 참석한 국내·외 학회 소개 및 후기를 공유했습니다. ​ 진학 설명회의 말미에는 진학 설명회 참여 학부생들과 이재현 교수님 및 석사과정생들과 대학원 진학, 졸업 후 진로 등에 대한 정보 전달 및 고민을 함께 나누는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--29/";
            },},{id: "news-2024년-국토조사-성과-활용-아이디어-경진대회에-참가-및-우수상-수상",
          title: '2024년 국토조사 성과 활용·아이디어 경진대회에 참가 및 우수상 수상',
          description: "학부과정 정연우, 최민정 학생은 국토연구원에서 개최된 2024년 국토조사 성과 활용·아이디어 경진대회에 참가하여 아이디어 부문 우수상(국토지리정보원장상)을 수상하였습니다.  이번 경진 대회는 국토조사 성과의 확산 및 새로운 활용 방법의 모색을 위해 국토교통부 국토지리정보원이 주최하고 국토연구원이 주관하여 진행되었습니다. 서면 심사를 거쳐 선정된 총 6건(활용사례 3건, 아이디어 3건)을 대상으로 발표평가를 진행하였고, 이를 통해 최종 순위가 결정되었습니다.  정연우, 최민정 학생은 국토조사 성과의 정확도 개선 및 다차원적 활용을 통한 대국민 서비스 강화 방안을 제시하여 우수한 평가를 받았습니다. 본 수상작은 자료집으로 제작되어 국토지리정보원 누리집에 공개될 예정입니다.  이와 관련한 두 학생의 인터뷰가 경북대학교 웹진 279호 &#39;잠깐 만나요&#39; 코너에 소개되었습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--30/";
            },},{id: "news-2024년-지리학대회-참석-및-발표",
          title: '2024년 지리학대회 참석 및 발표',
          description: "공주대학교 신관캠퍼스에서 개최된 2024년 지리학대회에 박사과정 이지현 학생, 석사과정 최수정 학생, 정다빈 학생, 학석사연계과정 김명환 학생, 학부과정 정연우, 최민정 학생이 참가하였습니다.  이지현 학생은 &#39;서울시 행정동별 범죄위험 분포 유형화와 분포 유형별 영향요인&#39;을,  정다빈 학생은 &#39;취약지역 주민의 지속 가능한 교통정책 선호 유형별 특성: 미국 캘리포니아를 대상으로&#39;를 주제로 구두발표를 진행하였습니다. ​ 김명환 학생은 &#39;Space-Time LISA를 활용한 음식점의 시공간적 분포 분석: 대구광역시 중구를 중심으로&#39;를 주제로 포스터 발표를 하였으며, 우수 포스터 발표상을 수상하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--31/";
            },},{id: "news-노시학-경희대-명예교수-방문-및-미팅-진행",
          title: '노시학 경희대 명예교수 방문 및 미팅 진행',
          description: "GIScience 및 공간빅데이터 연구실은 경희대학교 지리학과 명예교수님이신 노시학 교수님과 개인 연구 내용 공유 및 토의 등을 중심으로 한 미팅을 진행하였습니다.  개인 연구 공유를 통해, 최수정 학생은 &#39;집밖활동에의 참여를 중심으로 활동적 노화 사회 실현에 영향을 미치는 요소 탐색에 관한 연구&#39;에 대한 내용을, 정다빈 학생은 &#39;미국 캘리포니아를 대상으로 한 취약지역 주민의 지속 가능한 교통정책 선호 유형별 특성 분석&#39;에 대한 내용을, 김명환 학생은 &#39;교통약자의 통행을 고려한 저상버스 이용 형평성 측정&#39;의 연구 내용을 공유하였습니다.  ​ 또한 자율주행차 등과 같은 모빌리티 혁명에 기인한 공간의 이동 가능성을 확인하고, 이동을 통한 효용 창출 및 사회적 파급 효과를 지리학의 시선에서 조망할 수 있는 방안에 대해 깊이있게 토의하는 시간을 가지기도 했습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--32/";
            },},{id: "news-대한교통학회지-제42권-제6호-논문-게재",
          title: '대한교통학회지(제42권 제6호) 논문 게재',
          description: "원민수 박사님(한국교통연구원 교통빅데이터연구본부 부연구위원), 심지윤 석사 (한국교통연구원 교통기술연구본부 연구원), 석사과정 최수정 학생, 이재현 교수님께서 작성한 논문 &#39;객체 단위 통행 유형 구분을 위한 다차원 모빌리티 지표(MDMI) 개발(Development of Multi-Dimensional Mobility Indicators (MDMI) for Agent-based Travel Pattern Classification)&#39;이 발행되었습니다.   원문은 대한교통학회지 제42권 제6호 674-693 페이지에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--33/";
            },},{id: "news-최수정-학생-석사-졸업-김명환-학생-학사-졸업",
          title: '최수정 학생 석사 졸업, 김명환 학생 학사 졸업',
          description: "GIScience 및 공간빅데이터 연구실 최수정 학생이 경북대학교 대학원 지리학과에서 소정의 과정을 이수하고 학위논문(What makes for an active aging society? A focus on out-of-home activity participation)을 제출하여 석사학위를 수여받았습니다.  최수정 학생의 학위 논문은 &#39;RISS 학술연구정보서비스&#39;에서 확인하실 수 있습니다.  그리고 김명환 학생은 경북대학교 인문대학 고고인류학과와 사회과학대학 지리학과에서 소정의 과정을 이수하고 학사학위를 수여받았습니다.  최수정 석사와 김명환 학사의 졸업을 축하합니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--34/";
            },},{id: "news-연구실-봄맞이-산책",
          title: '연구실 봄맞이 산책',
          description: "GIScience 및 공간빅데이터 연구실은 봄을 맞이하여 캠퍼스 산책을 진행하였습니다.  교수님 및 연구실 구성원들과 함께하는 즐거운 시간이었습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--35/";
            },},{id: "news-한국지도학회지-제25권-제1호-논문-게재",
          title: '한국지도학회지(제25권 제1호) 논문 게재',
          description: "박사 과정 이지현 학생과 이재현 교수님께서 작성한 논문 &#39;행정동 내 범죄위험 분포 유형화와 분포 유형별 영향요인 분석: 서울시를 중심으로(Typology of Crime Risk Distribution within Administrative Districts and Analysis of Influencing Factors by Distribution Type: A Case Study of Seoul)&#39;이 발행되었습니다.   원문은 한국지도학회지 제25권 제1호 69-83 페이지에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--36/";
            },},{id: "news-2025년-1학기-giscience-및-공간빅데이터-연구실-open-lab",
          title: '2025년 1학기 GIScience 및 공간빅데이터 연구실 Open Lab',
          description: "GIScience 및 공간빅데이터 연구실은 경북대학교 학부생을 대상으로 진행되는 2025년 1학기 대학원 진학 설명회에 참여하였습니다. 석사과정 정다빈 학생은 GIScience 및 공간빅데이터 연구실을 대표하여 연구실(원) 소개와 연구실 차원에서 진행했던 여러 프로젝트, 연구실 내 활동, 향후 진로 등을 소개하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--37/";
            },},{id: "news-2025년-지리학대회-참석-및-발표",
          title: '2025년 지리학대회 참석 및 발표',
          description: "국립통일교육원에서 개최된 2025년 지리학대회에 박사과정 최수정 학생, 석사과정 김명환 학생, 학석사연계과정 최민정 학생, 학부과정 황찬범 학생이 참가하였습니다.  최수정 학생은 &#39;다차원 공간 특성 시퀀스 분석을 활용한 도시 모빌리티 패턴 분석&#39;을,  김명환 학생은 &#39;새로운 Space-Time Calender를 활용한 도시공간 내 소상공인 분포의 시공간적 변화 분석&#39;를 주제로 구두발표를 진행하였습니다. ​ 최민정 학생은 &#39;대졸자의 생애주기 단계 기반 이동경로 유형화 연구&#39;를 주제로 포스터 발표를 하였으며, 우수 포스터 발표상을 수상하였습니다. 황찬범 학생은 &#39;대구광역시 N분도시 접근성 평가: 문화,돌봄,복지시설을 중심으로&#39;를 주제로 포스터 발표를 진행하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--38/";
            },},{id: "news-lumari-pardo-rodriguez-박사-방문-및-미팅-진행",
          title: 'Lumari Pardo-Rodriguez 박사 방문 및 미팅 진행',
          description: "GIScience 및 공간빅데이터 연구실은 HelloFresh 북미 본사의 탄소 및 지속가능성 담당자인 Lumari Pardo-Rodriguez 박사님과 미팅을 진행하였습니다. 박사님은 북미 지역의 온실가스 감축 전략 수립, 탄소 회계 관리, 지속가능성 지표 운영 등 다양한 실무를 총괄하고 있으며, 글로벌 전략 수립에도 참여하고 있습니다.  ​ 이번 미팅에서는 기업 내 탄소중립 실천 방식과 공간데이터의 활용 가능성에 대해 심도 있는 논의가 이루어졌으며, 지속가능성 분야와 지리학적 접근의 접점을 탐색하는 유익한 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--39/";
            },},{id: "news-국토연구원-한국교통연구원-방문-및-연구과제-관련-회의-진행",
          title: '국토연구원, 한국교통연구원 방문 및 연구과제 관련 회의 진행',
          description: "국토연구원과 한국교통연구원에 방문하여 현재 진행 중인 연구과제 관련 회의를 진행하였습니다. ​국토연구원에서는 윤은주 연구위원, 박종화 부연구위원, 홍나은 연구원을, 한국교통연구원에서는 장동익 팀장, 가보연 연구원, 심지윤 연구원을 뵙고 각 기관을 둘러보며, 소개받고 회의를 진행하였습니다. ​ 이재현 교수님을 비롯하여 참여연구원인 최수정, 정다빈, 김명환 학생은 연구원분들을 뵙고 회의 진행 및 과제 진행 상황에 대한 논의 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--40/";
            },},{id: "news-정다빈-학생-석사-졸업",
          title: '정다빈 학생, 석사 졸업',
          description: "GIScience 및 공간빅데이터 연구실 정다빈 학생이 경북대학교 대학원 지리학과에서 소정의 과정을 이수하고 학위논문(Identifying Transportation Investment Priorities in Underserved California Communities)을 제출하여 석사학위를 수여받았습니다.  정다빈 석사의 졸업을 축하합니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--41/";
            },},{id: "news-국토연구원-연구-과제-관련-회의-진행",
          title: '국토연구원 연구 과제 관련 회의 진행',
          description: "GIScience 및 공간빅데이터 연구실은 국가간선도로망 구축에 따른 정책효과 GIS 분석 과제와 관련하여 국토연구원 연구진과 회의를 진행하였습니다. 국토연구원에서는 김호정 본부장님, 김혜란 센터장님, 김준기 선임연구위원, 박종일 연구위원께서 경북대학교를 방문하셨습니다. ​ 이재현 교수님을 비롯하여 참여연구원인 최수정, 정다빈, 김명환, 최민정, 정연우, 황찬범 학생은 참석하신 연구진을 뵙고 과제와 관련하여 논의 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--42/";
            },},{id: "news-생신축하드립니다-교수님",
          title: '생신축하드립니다, 교수님!',
          description: "GIScience 및 공간빅데이터 연구실은 교수님의 생신을 맞아 함께 축하의 시간을 가졌습니다.  교수님의 생신을 다시 한 번 진심으로 축하드립니다.​",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--43/";
            },},{id: "news-2025년-2학기-giscience-및-공간빅데이터-연구실-open-lab",
          title: '2025년 2학기 GIScience 및 공간빅데이터 연구실 Open Lab',
          description: "GIScience 및 공간빅데이터 연구실은 경북대학교 학부생을 대상으로 2025년 2학기 대학원 진학 설명회를 진행하였습니다.  경북대학교 지리학과 대학원 진학 안내를 비롯하여 연구실(원) 소개와 연구실 차원에서 진행했던 여러 프로젝트 및 개인 연구를 소개하는 시간을 가졌습니다. 또한, 교내 대학원생 대상 프로그램인 대학원생 글로벌 챌린저 등을 소개하고 2025년에 연구실에서 참석한 국내·외 학회 소개 및 후기를 공유했습니다. ​ 진학 설명회의 말미에는 연구실 졸업생인 심지윤 연구원과 함께 대학원 진학 및 졸업 후 진로에 대한 정보를 공유하고 학부생들의 고민을 나누는 시간을 가졌습니다.​",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--44/";
            },},{id: "news-국토연구원-연구-관련-회의-진행",
          title: '국토연구원 연구 관련 회의 진행',
          description: "탄소중립 공간 유형별 우선구역 통합 시나리오 분석 및 실행전략 연구 과제와 관련하여 국토연구원 연구진과 회의를 진행하였습니다. 국토연구원에서는 박종화 부연구위원님, 최소정 연구원님께서 경북대학교를 방문하셨습니다.  이재현 교수님을 비롯하여 참여연구원인 최수정, 김명환  학생은 참석하신 연구진을 뵙고 과제와 관련한 논의를 진행하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--45/";
            },},{id: "news-권기현-인천대학교-도시공학과-교수-방문-및-특강-진행",
          title: '권기현 인천대학교 도시공학과 교수 방문 및 특강 진행',
          description: "GIScience 및 공간 빅데이터 연구실은 인천대학교 도시공학과 권기현 교수님을 초청하여 사회과학대학 206호에서 &#39;Exploring Nonlinear Effects of the N-Minute CIty on Walking Behavior: AnXGBoos Model&#39;과 &#39;Planning Effective Mobility Hubs: Insight from Multimodal Travel Behavior in South Korea&#39;을 주제로 특강을 진행하였습니다. ​이재현 교수님을 비롯하여 참여학생인 최수정, 김명환, 정연우, 최민정, 황찬범 학생과  질의응답을 시간을 가지며 연구에 대한 궁금한 점과 의견을 교환하는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--46/";
            },},{id: "news-the-17th-japan-korea-china-joint-conference-on-geography-참석-및-발표",
          title: 'The 17th Japan-Korea-China Joint Conference on Geography​ 참석 및 발표',
          description: "일본 교토부 교토시 Kyoto Tersa에서 개최된 The 17th Japan-Korea-China Joint Conference on Geography​에 박사과정 최수정 학생, 석사과정 김명환 학생이 참가하였습니다.  최수정 학생은 &#39;Exploring Urban Mobility Patterns with Multi-Dimensional Spatial Characteristics Sequencxe Analysis&#39;를 주제로 구두 발표를 진행하였으며, 김명환 학생은 &#39;Development of a Modified Space-Time Calendar for Effectively Monitoring Spatio-Temporal Changes&#39;를 주제로 포스터 발표를 진행하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--47/";
            },},{id: "news-transportation-research-part-a-policy-and-practice-논문-게재",
          title: 'Transportation Research Part A: Policy and Practice 논문 게재',
          description: "이재현 교수님, 석사 졸업생 심지윤 연구원(한국교통연구원 재직)과 Scott Hardman(Electric Vehicle Reasearch Center, Institute of Transportation Studies, UC Davis) 교수님께서 작성하신 논문 &#39;Comprehensive analysis of electric vehicle (EV) discontinuation: assessing satisfaction with replacement vehicles from multiple angles&#39; 가 발행되었습니다.   원문은 Transportation Research Part A: Policy and Practice. Volume 203,  January 2026, 104755에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--48/";
            },},{id: "news-대한교통학회지-제43권-제6호-논문-게재",
          title: '대한교통학회지(제43권 제6호) 논문 게재',
          description: "석사 졸업생 심지윤 연구원(한국교통연구원 재직)과 이재현 교수님께서 작성하신 논문 &#39;An Explanatory Analysis of Spatial Structure of Seoul Metropolitan Area Based on Individual Mobility Characteristics: An Application of Multivariate Spatial Statistics(개인 단위 모빌리티 특성 기반 수도권 공간구조 분석: 다변량 공간통계기법을 중심으로)&#39; 가 발행되었습니다.   원문은 대한교통학회지 제 43권 제 6호,  December 2025 에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--51/";
            },},{id: "news-김태균-스튜디오-갈릴레이-모빌리티-컨설팅-그룹장-방문-및-특강-진행",
          title: '김태균 스튜디오 갈릴레이 모빌리티 컨설팅 그룹장 방문 및 특강 진행',
          description: "GIScience 및 공간 빅데이터 연구실은 스튜디오 갈릴레이 모빌리티 컨설팅 그룹장 김태균 박사님을 초청하여 사회과학대학 552호에서 &#39;DRT 도입사례와 미래비전&#39;을 진행하였습니다. ​특강은 이재현 교수님을 비롯하여 연구실 인원 및 지리학과 학생들과 질의응답을 시간을 가지며 연구에 대한 궁금한 점과 의견을 교환하는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--49/";
            },},{id: "news-백지원-박사-초청-특강-진행",
          title: '백지원 박사 초청 특강 진행',
          description: "GIScience 및 공간 빅데이터 연구실은 스튜디오 갈릴레이 모빌리티 컨설팅 그룹장 김태균 박사님을 초청하여 사회과학대학 552호에서 &#39;DRT 도입사례와 미래비전&#39;을 진행하였습니다. ​특강은 이재현 교수님을 비롯하여 연구실 인원 및 지리학과 학생들과 질의응답을 시간을 가지며 연구에 대한 궁금한 점과 의견을 교환하는 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--50/";
            },},{id: "news-최민정-정연우-학생-학사-졸업",
          title: '최민정·정연우 학생, 학사 졸업',
          description: "GIScience 및 공간빅데이터 연구실 정연우 학생이 경북대학교 대학원 지리학과에서 소정의 과정을 이수하고 학사학위와 교원자격증(중등학교 정교사(2급) 지리)을 수여받았습니다.  그리고 최민정 학생은 경북대학교 사회과학대학 지리학과에서 소정의 과정을 이수하고 학사학위(부전공: 경상대학 경영학부)를 수여받았습니다.  정연우 학사와 최민정 학사의 졸업을 축하합니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--52/";
            },},{id: "news-2026-aag-annual-meeting-참석-및-발표",
          title: '2026 AAG Annual Meeting 참석 및 발표',
          description: "미국 캘리포니아주 샌프란시스코에서 개최된 2026 AAG(American Association of Geographers) Annual Meeting에 박사과정 최수정 학생, 석사과정 김명환, 정연우, 최민정 학생이 참가하여 구두 및 포스터 발표를 진행하였습니다. 최수정 학생은 &#39;Exploring Urban Mobility Patterns with Multi-Dimensional Spatial Characteristics Sequence Analysis&#39;를 주제로 구두발표를 진행하였습니다. 그리고 김명환 학생은 &#39;Development of a Modified Sace-Time Calendar for Effectively Monitoring Long-Teprm Spatio-Temporal Changes&#39;를 주제로, 정연우 학생은 &#39; A Two-Stage Latent Class Analysis of Grid-Level Accessibility for Older Adults in Busan&#39;을 주제로 포스터 발표를 진행하였습니다. 마지막으로, 최민정 학생도 &#39;Typology of Migration Trajectories by Life Cycle Stage Among College Graduates&#39;를 주제로 포스터를 발표하였습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--53/";
            },},{id: "news-2026년-1학기-giscience-및-공간빅데이터-연구실-open-lab",
          title: '2026년 1학기 GIScience 및 공간빅데이터 연구실 Open Lab',
          description: "GIScience 및 공간빅데이터 연구실은 5월 21일 12시 사회과학대학 552호에서 대학원 진학설명회를 개최하였습니다. 박사과정 최수정 학생이 본 연구실의 연구 분야와 활동 등에 대한 안내를 진행하였으며, 대학원 진학에 관심있는 학생들과 질의응답 시간을 가졌습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--54/";
            },},{id: "news-2026년-지리학대회-참석",
          title: '2026년 지리학대회 참석',
          description: "동국대학교 서울캠퍼스에서 개최된 2026년 지리학대회에 석사과정 김명환 학생, 정연우 학생, 최민정 학생, 학석사연계과정 황찬범 학생이 참가하였습니다.  최근 지리학의 연구 동향 및 흐름을 이해하고, 타 연구자들과의 네트워킹을 할 수 있었던 좋은 시간이었습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-09--55/";
            },},{id: "news-대한지리학회지-제61권-제3호-논문-게재",
          title: '대한지리학회지(제61권 제3호) 논문 게재',
          description: "석사과정 김명환 학생과 이재현 교수님께서 작성하신 논문 &#39;교통약자 수요 기반 저상버스 배치 전략을 통한 이용 형평성 개선효과 분석 -서울특별시를 사례로-&#39; 가 발행되었습니다.   원문은 대한지리학회지 제61권 제3호,  June 2026 에서 확인하실 수 있습니다.",
          section: "News",handler: () => {
              window.location.href = "/news/2026-07-13-/";
            },},{id: "projects-overseas-av-based-mobility-services-for-disabled-users",
          title: 'Overseas AV-based Mobility Services for Disabled Users',
          description: "Case studies of overseas autonomous-vehicle-based mobility services for disabled, elderly, and underserved users.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2021-av-mobility-disabled/";
            },},{id: "projects-activity-data-based-infectious-disease-exposure-analysis",
          title: 'Activity-Data-based Infectious-Disease Exposure Analysis',
          description: "Spatio-temporal methodology to assess potential exposure to infectious diseases from personal activity data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2021-infection-exposure/";
            },},{id: "projects-smartphone-activity-distancing-policy-behavioral-typology",
          title: 'Smartphone Activity — Distancing Policy Behavioral Typology',
          description: "Time-series analysis of activity ranges and typology of behavioral responses to social-distancing policies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-distancing-typology/";
            },},{id: "projects-regional-economic-impact-of-dongdaegu-multimodal-hub",
          title: 'Regional Economic Impact of Dongdaegu Multimodal Hub',
          description: "Land-use and traffic-volume changes following the opening of the Dongdaegu multimodal transit centre.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-dongdaegu-impact/";
            },},{id: "projects-mid-to-long-term-mobility-pattern-change-with-participatory-geographic-information",
          title: 'Mid- to Long-Term Mobility Pattern Change with Participatory Geographic Information',
          description: "NRF-funded multi-year study using participatory GI to track long-term shifts in mobility behavior.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-participatory-gis/";
            },},{id: "projects-5th-national-rail-network-plan-expected-impacts",
          title: '5th National Rail Network Plan — Expected Impacts',
          description: "Estimating expected impacts of new rail-network projects proposed under the 5th National Rail Network Plan.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-rail-network/";
            },},{id: "projects-sejong-mobility-big-data-literature-review",
          title: 'Sejong Mobility Big Data — Literature Review',
          description: "Literature review of mobility patterns by demographic and occupational segment for Sejong&#39;s mobility big data initiative.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-sejong-mobility/";
            },},{id: "projects-spatial-analysis-for-daegu-line-1-yeongcheon-extension",
          title: 'Spatial Analysis for Daegu Line 1 Yeongcheon Extension',
          description: "Spatial analysis supporting policy evaluation of the Daegu Metro Line 1 extension to Yeongcheon.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-daegu-line1/";
            },},{id: "projects-smartphone-activity-data-social-distancing-policy-impact",
          title: 'Smartphone Activity Data — Social-Distancing Policy Impact',
          description: "Urban-spatial typology of Daegu Metropolitan City and analysis of the behavioral effects of social-distancing policies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-distancing-policy/";
            },},{id: "projects-activity-travel-choice-behavior-of-the-elderly",
          title: 'Activity-Travel Choice Behavior of the Elderly',
          description: "Vitality typology of older adults and policy implications for urban and transportation planning in a super-aged society.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-elderly-activity/";
            },},{id: "projects-future-tasks-for-land-infrastructure-and-transport",
          title: 'Future Tasks for Land, Infrastructure and Transport',
          description: "National &#39;life-zone&#39; analysis using big data and review of climate adaptation strategies for transportation and land use.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-future-tasks/";
            },},{id: "projects-grid-level-ev-charging-infrastructure-siting",
          title: 'Grid-level EV Charging Infrastructure Siting',
          description: "Typology of EV-user activity-travel-charging behavior and grid-level estimation of charging demand.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-grid-charging/";
            },},{id: "projects-national-mobility-analysis-using-mobile-combined-data",
          title: 'National Mobility Analysis using Mobile Combined Data',
          description: "Population-scale mobility analysis based on combined mobile-network and supplementary data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-mobile-mobility/";
            },},{id: "projects-inter-city-psychological-distance-exploratory-analysis",
          title: 'Inter-City Psychological Distance — Exploratory Analysis',
          description: "Survey-based analysis and visualization of psychological distance between 25 major Korean cities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-psychological-distance/";
            },},{id: "projects-truck-travel-patterns-and-ev-charging-infrastructure-siting",
          title: 'Truck Travel Patterns and EV Charging Infrastructure Siting',
          description: "Freight-vehicle travel pattern analysis using DTG data and identification of suitable charging-infrastructure sites.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-truck-charging/";
            },},{id: "projects-spatial-strategy-for-carbon-neutral-energy-sector",
          title: 'Spatial Strategy for Carbon-Neutral Energy Sector',
          description: "Selecting feasible solar-power-generation areas and assessing rooftop and ground installation potential.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-carbon-energy/";
            },},{id: "projects-global-opening-strategy-for-daegu-gyeongju-pohang-quot-daegyeongpo-quot",
          title: 'Global-Opening Strategy for Daegu–Gyeongju–Pohang (&amp;quot;Daegyeongpo&amp;quot;)',
          description: "Regional development strategy for the Daegu–Gyeongju–Pohang corridor, including Pohang Port logistics and the Arctic shipping route.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-daegyeongpo/";
            },},{id: "projects-academic-discipline-classification-reform",
          title: 'Academic Discipline Classification Reform',
          description: "Survey of academic-classification systems and reform directions for Korea&#39;s standard discipline classification.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-discipline-classification/";
            },},{id: "projects-national-highway-network-gis-policy-impact-2024",
          title: 'National Highway Network — GIS Policy Impact (2024)',
          description: "GIS analysis of road-network change effects on service level, facility linkage, and accessibility.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-highway-policy-gis/";
            },},{id: "projects-carbon-neutral-priority-zone-integrated-scenario-analysis",
          title: 'Carbon-Neutral Priority-Zone Integrated Scenario Analysis',
          description: "Integrated scenarios that match spatial-typology priority zones with carbon-mitigation measures applicable to urban space.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-carbon-neutral/";
            },},{id: "projects-multi-dimensional-mobility-index-mapping",
          title: 'Multi-Dimensional Mobility Index Mapping',
          description: "Spatial Multi-Dimensional Mobility Index (sMDMI) and nationwide maps of mobility patterns for policy use.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-mdmi-mapping/";
            },},{id: "projects-network-analysis-and-database-for-mobility-assessment",
          title: 'Network Analysis and Database for Mobility Assessment',
          description: "Grid-level connectivity and public-transport network analysis to support a national mobility-assessment framework.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-mobility-network/";
            },},{id: "projects-national-highway-network-gis-policy-impact-analysis",
          title: 'National Highway Network — GIS Policy Impact Analysis',
          description: "Building a unified road GIS-DB and quantifying how new construction reshapes accessibility and service levels.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-national-highway-gis/";
            },},{id: "projects-road-network-monitoring-indicator-db-statistical-amp-gis-analysis-and-indicator-methodology",
          title: 'Road Network Monitoring Indicator DB — Statistical &amp;amp; GIS Analysis and Indicator Methodology...',
          description: "Statistical and GIS analysis, indicator definitions, and calculation methodology for the road-network monitoring indicator database, under the National Road Monitoring System program.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2026-road-monitoring-db/";
            },},{id: "projects_kr-국외-자율주행기반-교통약자-이동지원-서비스-실증-사례조사",
          title: '국외 자율주행기반 교통약자 이동지원 서비스 실증 사례조사',
          description: "국외 장애인, 고령자, 교통소외지역 거주자 대상 이동지원 서비스 운영, 개발 및 실증사례 조사를 진행함",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2021-av-mobility-disabled/";
            },},{id: "projects_kr-개인-활동-데이터-기반-감염병-노출-가능성-분석-방법론-개발",
          title: '개인 활동 데이터 기반 감염병 노출 가능성 분석 방법론 개발',
          description: "개인 활동 데이터에 대한 시공간적 분석 및 활동발생 장소 특성에 대한 공간 분석",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2021-infection-exposure/";
            },},{id: "projects_kr-스마트폰-개인-활동-데이터에-기반한-거리두기정책-영향-분석",
          title: '스마트폰 개인 활동 데이터에 기반한 거리두기정책 영향 분석',
          description: "스마트폰으로 수집한 개인 활동 데이터에 기반하여 활동영역의 시계열적 분석",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2022-distancing-typology/";
            },},{id: "projects_kr-교통거점시설의-지역경제-활성화-효과-분석-동대구역-복합환승센터를-대상으로",
          title: '교통거점시설의 지역경제 활성화 효과 분석-동대구역 복합환승센터를 대상으로',
          description: "복합환승센터 개발에 따른 동대구역 주변 지역 토지이용 패턴의 변화 분석",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2022-dongdaegu-impact/";
            },},{id: "projects_kr-참여형-지리정보를-활용한-중장기-모빌리티-패턴-변화에-대한-연구",
          title: '참여형 지리정보를 활용한 중장기 모빌리티 패턴 변화에 대한 연구',
          description: "한국연구재단의 지원으로 장기간 진행되는 연구이며, 참여형 지리정보를 활용하여 다개년 종단적 관점에서 개인의 모빌리티 패턴이 어떻게 변화하는지 확인",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2022-participatory-gis/";
            },},{id: "projects_kr-제5차-국가철도망-구축계획-수립에-따른-지자체-신규사업-건의를-위한-기대효과-추정",
          title: '제5차 국가철도망 구축계획 수립에 따른 지자체 신규사업 건의를 위한 기대효과 추정',
          description: "경상북도 내 신규 철도망 도입 시 예상 기대효과를 국가교통체계 개선, 지역발전효과, 교통생활여건 개선, 환경성 및 안전성 등의 네 가지 항목으로 구분하여 추정 및 예측",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2022-rail-network/";
            },},{id: "projects_kr-세종시-모빌리티-빅데이터-활용을-위한-관련-연구-및-문헌조사",
          title: '세종시 모빌리티 빅데이터 활용을 위한 관련 연구 및 문헌조사',
          description: "세종시 모빌리티 빅데이터 구축 사업을 지원하기 위한 인구통계학적 및 직업적 세부 집단별 모빌리티 패턴에 관한 문헌 고찰",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2022-sejong-mobility/";
            },},{id: "projects_kr-대구-1호선-영천-연장-사업-정책성-평가-지원을-위한-공간분석",
          title: '대구 1호선 영천 연장 사업 정책성 평가 지원을 위한 공간분석',
          description: "대구광역시 도시철도 1호선 영천 연장 사업 시행 및 개통에 따른 영천 지역의 관광 산업 활성화 가능성 검토",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2023-daegu-line1/";
            },},{id: "projects_kr-스마트폰-개인-활동-데이터에-기반한-거리두기-정책-영향-분석",
          title: '스마트폰 개인 활동 데이터에 기반한 거리두기 정책 영향 분석',
          description: "대구광역시의 도시 공간 특성을 규명하기 위해 격자 체계를 활용하여 격자가 가진 인구·상권·토지·건축물 특성을 기반으로 유형화",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2023-distancing-policy/";
            },},{id: "projects_kr-고령자의-활동-통행-선택행태-분석",
          title: '고령자의 활동·통행 선택행태 분석',
          description: "고령자의 활동 횟수, 시간, 반경 등의 요소를 통 고령자의 활력 정도 유형화 및 고령자 활력 유형에 영향을 미치는 요인 파악",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2023-elderly-activity/";
            },},{id: "projects_kr-국토교통-분야-미래-대응-과제-연구",
          title: '국토교통 분야 미래 대응 과제 연구',
          description: "실제 생활과 활동에 기반한 일상적 통행패턴의 공간적 범위 파악 및 행정경계를 초월하는 실증적인 생활권 도출",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2023-future-tasks/";
            },},{id: "projects_kr-이용행태를-고려한-격자단위전기차-충전인프라-입지-분석",
          title: '이용행태를 고려한 격자단위전기차 충전인프라 입지 분석',
          description: "전기차 이용자들의 활동-통행-충전행태 유형화 및 건축물별/장소별 충전 특성과 미래 교통수요를 고려한 격자단위 충전수요 추정",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2023-grid-charging/";
            },},{id: "projects_kr-모바일-결합정보를-활용한-국민-모빌리티-분석",
          title: '모바일 결합정보를 활용한 국민 모빌리티 분석',
          description: "모바일 네트워크 데이터와 부가 데이터셋 결합에 기반한 인구 규모의 모빌리티 분석",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2023-mobile-mobility/";
            },},{id: "projects_kr-도시-간-심리거리에-대한-탐색적-분석",
          title: '도시 간 심리거리에 대한 탐색적 분석',
          description: "전국 25개 도시, 300개 도시 쌍의 심리거리 설문조사 데이터를 활용하여 도시 간 심리거리 분석",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2023-psychological-distance/";
            },},{id: "projects_kr-화물자동차-통행-특성-및-충전인프라-적정입지-분석",
          title: '화물자동차 통행 특성 및 충전인프라 적정입지 분석',
          description: "화물차 DTG 데이터를 활용한 화물차의 통행 특성 및 화물차 정차 구간과 공간 질의 조건을 활용한 충전인프라 적정 입지 분석",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2023-truck-charging/";
            },},{id: "projects_kr-공간단위-탄소중립을-위한-에너지-부분의-공간전략-연구",
          title: '공간단위 탄소중립을 위한 에너지 부분의 공간전략 연구',
          description: "건물 옥상 및 지상 면적을 활용한 태양광 패널 설치 가능 면적 평가를 통해 실제 태양광 발전 설비가 도입될 수 있는 공간적 기반 마련",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2024-carbon-energy/";
            },},{id: "projects_kr-대구경북의-39-대경포-39-글로벌-개방-지역발전전략-연구",
          title: '대구경북의 &amp;#39;대경포&amp;#39; 글로벌 개방 지역발전전략 연구',
          description: "포항항 물류 및 북극항로를 포함한 대구-경주-포항 축(Corridor)의 지역 발전 전략",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2024-daegyeongpo/";
            },},{id: "projects_kr-국내-부처별-학문분류체계-현황-조사-및-학문분류간-통합적-합리적-운영-방향-연구",
          title: '국내 부처별 학문분류체계 현황 조사 및 학문분류간 통합적·합리적 운영 방향 연구',
          description: "한국의 표준 학문분류체계에 대한 실태 조시 및 개선 방향에 대한 검토",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2024-discipline-classification/";
            },},{id: "projects_kr-국가간선도로망-구축에-따른-정책효과-gis-분석",
          title: '국가간선도로망 구축에 따른 정책효과 GIS 분석',
          description: "2023년 기준 고속국도, 일반국도, 국가지원지방도의 기초 GIS-DB 구축 및 시설 데이터 갱신을 통한 도로 건설 효과 및 성과 지표 산출",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2024-highway-policy-gis/";
            },},{id: "projects_kr-탄소중립-공간-유형별-우선구역-통합-시나리오-분석-및-실행전략-연구",
          title: '탄소중립 공간 유형별 우선구역 통합 시나리오 분석 및 실행전략 연구',
          description: "탄소중립 달성을 위해 지자체가 주도하여 도시공간 내 탄소중립 감축수단을 적용할 수 있도록 통합적 공간계획 모형 및 시나리오 제시",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2025-carbon-neutral/";
            },},{id: "projects_kr-지역별-공간다차원-모빌리티-지도-분석-용역",
          title: '지역별 공간다차원 모빌리티 지도 분석 용역',
          description: "공간 다차원 모빌리티 지표(sMDMI, spatial Multi-Dimensional Mobility Indicators) 개발 및 개인단위 모빌리티 유형 도출 및 유형별 특성 분석",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2025-mdmi-mapping/";
            },},{id: "projects_kr-이동성-평가를-위한-네트워크-분석-및-db구축",
          title: '이동성 평가를 위한 네트워크 분석 및 DB구축',
          description: "전국 500m 격자 단위 대중교통 이동성 분석 및 데이터베이스 구축",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2025-mobility-network/";
            },},{id: "projects_kr-국가간선도로망-구축에-따른-정책효과-gis-분석",
          title: '국가간선도로망 구축에 따른 정책효과 GIS 분석',
          description: "2024년 기준 고속국도, 일반국도, 국가지원지방도의 기초 GIS-DB 구축 및 시설 데이터 갱신을 통한 도로 건설 효과 및 성과 지표 산출",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2025-national-highway-gis/";
            },},{id: "projects_kr-도로망-모니터링-지표-db-구축을-위한-통계-및-gis-분석-지표-정의-및-산출-방법론-연구",
          title: '도로망 모니터링 지표 DB 구축을 위한 통계 및 GIS 분석, 지표 정의 및...',
          description: "「국가 도로 모니터링 체계 구축 사업」의 일환으로 도로망 모니터링 지표 DB 구축을 위한 통계 분석, GIS 분석, 지표 정의 및 산출 방법론 연구를 수행함",
          section: "Projects_kr",handler: () => {
              window.location.href = "/kr/projects/2026-road-monitoring-db/";
            },},{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4007-7048", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },];
