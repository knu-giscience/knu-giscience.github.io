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
            window.location.href = "/members/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications by category in reverse chronological order. Click &quot;BibTeX&quot; to copy a citation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Funded research projects, organized by status.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "Lab activities, conferences, awards, and publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
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
      },{id: "news-jiyoon-shim-presented-both-an-oral-and-a-poster-paper-at-the-2022-kgs-summer-conference",
          title: 'Jiyoon Shim presented both an oral and a poster paper at the 2022...',
          description: "",
          section: "News",},{id: "news-new-paper-shim-park-amp-amp-lee-2022-network-centrality-changes-of-the-rail-network-around-dongdaegu-station-대한교통학회지",
          title: '📄 New paper — Shim, Park, &amp;amp;amp; Lee (2022), Network-centrality changes of the...',
          description: "",
          section: "News",},{id: "news-visited-krihs-and-koti-for-project-sponsor-meetings",
          title: 'Visited KRIHS and KOTI for project-sponsor meetings.',
          description: "",
          section: "News",},{id: "news-jiyoon-shim-and-soojeong-choi-attended-the-winter-conference-of-the-korean-urban-geographical-society-and-joined-the-hanyangdoseong-tour-in-seoul",
          title: 'Jiyoon Shim and Soojeong Choi attended the winter conference of the Korean Urban...',
          description: "",
          section: "News",},{id: "news-new-paper-lee-yoon-amp-amp-shim-2022-the-effect-of-remote-work-on-urban-activity-choices-대한교통학회지",
          title: '📄 New paper — Lee, Yoon, &amp;amp;amp; Shim (2022), The effect of remote...',
          description: "",
          section: "News",},{id: "news-jiyoon-shim-and-soojeong-choi-presented-posters-at-the-88th-conference-of-the-korean-society-of-transportation",
          title: 'Jiyoon Shim and Soojeong Choi presented posters at the 88th conference of the...',
          description: "",
          section: "News",},{id: "news-semester-opening-seminar-introducing-the-lab-to-undergraduate-research-students-and-a-literature-review-workshop",
          title: 'Semester-opening seminar — introducing the lab to undergraduate research students and a literature-review...',
          description: "",
          section: "News",},{id: "news-jiyoon-shim-and-soojeong-choi-presented-posters-at-the-2023-aag-annual-meeting-in-denver",
          title: 'Jiyoon Shim and Soojeong Choi presented posters at the 2023 AAG Annual Meeting...',
          description: "",
          section: "News",},{id: "news-visited-krihs-and-the-korea-environment-institute-for-project-direction-meetings",
          title: 'Visited KRIHS and the Korea Environment Institute for project-direction meetings.',
          description: "",
          section: "News",},{id: "news-lab-meeting-sharing-project-results-and-progress-reviews",
          title: 'Lab meeting — sharing project results and progress reviews.',
          description: "",
          section: "News",},{id: "news-new-paper-lee-cho-tal-amp-amp-hardman-2023-do-phev-adopters-switch-to-bevs-transportation-research-part-d-featured-in-the-washington-post",
          title: '📰 New paper — Lee, Cho, Tal, &amp;amp;amp; Hardman (2023), Do PHEV adopters...',
          description: "",
          section: "News",},{id: "news-lab-members-presented-posters-at-the-2023-kgs-summer-conference",
          title: 'Lab members presented posters at the 2023 KGS Summer Conference.',
          description: "",
          section: "News",},{id: "news-qgis-master-study-group-orientation-and-topic-selection",
          title: 'QGIS Master study group — orientation and topic selection.',
          description: "",
          section: "News",},{id: "news-department-of-geography-graduate-workshop-sharing-research-projects",
          title: 'Department of Geography graduate workshop — sharing research projects.',
          description: "",
          section: "News",},{id: "news-meeting-with-krihs-to-discuss-project-direction",
          title: 'Meeting with KRIHS to discuss project direction.',
          description: "",
          section: "News",},{id: "news-graduate-student-global-challenger-program-visited-uc-santa-barbara-and-uc-davis-california-usa",
          title: 'Graduate-student global-challenger program — visited UC Santa Barbara and UC Davis (California, USA)....',
          description: "",
          section: "News",},{id: "news-meeting-with-krihs-to-review-project-progress",
          title: 'Meeting with KRIHS to review project progress.',
          description: "",
          section: "News",},{id: "news-lab-members-presented-at-the-joint-conference-of-the-korean-society-of-transportation-and-the-korea-planners-association",
          title: 'Lab members presented at the joint conference of the Korean Society of Transportation...',
          description: "",
          section: "News",},{id: "news-jiyoon-shim-and-soojeong-choi-presented-at-the-15th-japan-korea-china-joint-conference-on-geography-held-at-the-university-of-seoul",
          title: 'Jiyoon Shim and Soojeong Choi presented at the 15th Japan–Korea–China Joint Conference on...',
          description: "",
          section: "News",},{id: "news-open-lab-event-sharing-lab-projects-and-a-hands-on-gis-session-for-visitors",
          title: 'Open-lab event — sharing lab projects and a hands-on GIS session for visitors....',
          description: "",
          section: "News",},{id: "news-soojeong-choi-and-dabin-jeong-received-the-grand-prize-at-a-hackathon-for-their-proposal-to-improve-the-nadeul-call-para-transit-service",
          title: '🏆 Soojeong Choi and Dabin Jeong received the Grand Prize at a hackathon...',
          description: "",
          section: "News",},{id: "news-jiyoon-shim-defended-her-ms-thesis-on-mobility-pattern-analysis-and-received-an-ms-degree",
          title: '🎓 Jiyoon Shim defended her MS thesis on Mobility-pattern analysis and received an...',
          description: "",
          section: "News",},{id: "news-soojeong-choi-dabin-jeong-and-myunghwan-kim-presented-at-the-spring-conference-of-the-korean-society-of-transportation",
          title: 'Soojeong Choi, Dabin Jeong, and Myunghwan Kim presented at the spring conference of...',
          description: "",
          section: "News",},{id: "news-soojeong-choi-and-dabin-jeong-presented-posters-at-the-2024-aag-annual-meeting-in-honolulu-hawaii",
          title: 'Soojeong Choi and Dabin Jeong presented posters at the 2024 AAG Annual Meeting...',
          description: "",
          section: "News",},{id: "news-seminar-on-sustainable-transportation-invited-talks-by-faculty-from-uc-davis-and-the-university-of-queensland",
          title: 'Seminar on sustainable transportation — invited talks by faculty from UC Davis and...',
          description: "",
          section: "News",},{id: "news-prof-lee-received-the-best-dialogue-award-for-an-ev-related-paper-at-the-evs37-international-conference",
          title: '🏆 Prof. Lee received the Best Dialogue Award for an EV-related paper at...',
          description: "",
          section: "News",},{id: "news-spring-semester-graduate-school-information-session",
          title: 'Spring-semester graduate-school information session.',
          description: "",
          section: "News",},{id: "news-soojeong-choi-received-the-excellent-presenter-award-and-yeonwoo-jeong-received-the-excellent-poster-award-at-the-kgs-2024-summer-conference",
          title: '🏆 Soojeong Choi received the Excellent Presenter award and Yeonwoo Jeong received the...',
          description: "",
          section: "News",},{id: "news-soojeong-choi-dabin-jeong-myunghwan-kim-and-prof-lee-presented-at-the-17th-iatbr-conference-in-vienna-austria",
          title: 'Soojeong Choi, Dabin Jeong, Myunghwan Kim, and Prof. Lee presented at the 17th...',
          description: "",
          section: "News",},{id: "news-fall-semester-graduate-school-information-session-sharing-lab-projects-and-career-advice",
          title: 'Fall-semester graduate-school information session — sharing lab projects and career advice.',
          description: "",
          section: "News",},{id: "news-yeonwoo-jeong-and-minjeong-choi-received-the-excellent-idea-award-director-general-of-ngii-at-the-national-land-survey-idea-contest",
          title: '🏆 Yeonwoo Jeong and Minjeong Choi received the Excellent Idea award (Director-General of...',
          description: "",
          section: "News",},{id: "news-lab-members-presented-at-the-2024-kgs-conference-myunghwan-kim-received-the-excellent-poster-award",
          title: 'Lab members presented at the 2024 KGS conference. Myunghwan Kim received the Excellent...',
          description: "",
          section: "News",},{id: "news-visited-prof-sihak-noh-kyung-hee-university-to-discuss-individual-research-and-the-mobility-revolution",
          title: 'Visited Prof. Sihak Noh (Kyung Hee University) to discuss individual research and the...',
          description: "",
          section: "News",},{id: "news-new-paper-won-shim-choi-amp-amp-lee-2024-multi-dimensional-mobility-index-mdmi-for-object-level-travel-typology-대한교통학회지",
          title: '📄 New paper — Won, Shim, Choi, &amp;amp;amp; Lee (2024), Multi-dimensional Mobility Index...',
          description: "",
          section: "News",},{id: "news-soojeong-choi-defended-her-ms-thesis-on-active-aging-society-myunghwan-kim-received-his-bs-degree",
          title: '🎓 Soojeong Choi defended her MS thesis on Active aging society; Myunghwan Kim...',
          description: "",
          section: "News",},{id: "news-spring-campus-walk-with-prof-lee-and-lab-members",
          title: '🌸 Spring campus walk with Prof. Lee and lab members.',
          description: "",
          section: "News",},{id: "news-new-paper-lee-amp-amp-lee-2025-crime-risk-distribution-within-administrative-dongs-and-influencing-factors-한국지도학회지",
          title: '📄 New paper — Lee &amp;amp;amp; Lee (2025), Crime risk distribution within administrative...',
          description: "",
          section: "News",},{id: "news-spring-semester-graduate-school-information-session-dabin-jeong-introduced-lab-projects-and-career-paths",
          title: 'Spring-semester graduate-school information session — Dabin Jeong introduced lab projects and career paths....',
          description: "",
          section: "News",},{id: "news-lab-members-presented-at-the-2025-summer-conference-of-the-korean-geographical-society-minjeong-choi-received-the-excellent-poster-award",
          title: 'Lab members presented at the 2025 Summer Conference of the Korean Geographical Society....',
          description: "",
          section: "News",},{id: "news-discussed-possible-collaboration-with-dr-lumari-pardo-rodriguez-of-hellofresh-on-carbon-and-sustainability",
          title: 'Discussed possible collaboration with Dr. Lumari Pardo-Rodriguez of HelloFresh on carbon and sustainability....',
          description: "",
          section: "News",},{id: "news-visited-krihs-and-koti-for-ongoing-project-meetings",
          title: 'Visited KRIHS and KOTI for ongoing-project meetings.',
          description: "",
          section: "News",},{id: "news-dabin-jeong-defended-identifying-transportation-investment-priorities-and-received-an-ms-degree",
          title: '🎓 Dabin Jeong defended Identifying Transportation Investment Priorities and received an MS degree....',
          description: "",
          section: "News",},{id: "news-meeting-with-krihs-on-the-gis-analysis-of-the-national-highway-network",
          title: 'Meeting with KRIHS on the GIS analysis of the National Highway Network.',
          description: "",
          section: "News",},{id: "news-celebrated-prof-lee-s-birthday-in-the-lab",
          title: '🎂 Celebrated Prof. Lee’s birthday in the lab.',
          description: "",
          section: "News",},{id: "news-held-the-fall-semester-graduate-school-information-session-for-the-department-of-geography-introducing-lab-projects-and-research-directions",
          title: 'Held the Fall-semester graduate-school information session for the Department of Geography, introducing lab...',
          description: "",
          section: "News",},{id: "news-meeting-with-krihs-researchers-on-the-carbon-neutral-priority-zone-project",
          title: 'Meeting with KRIHS researchers on the carbon-neutral priority-zone project.',
          description: "",
          section: "News",},{id: "news-guest-lecture-prof-kihyun-kwon-incheon-national-university-n-minute-city-and-mobility-hubs-two-sessions",
          title: 'Guest lecture — Prof. Kihyun Kwon (Incheon National University): N-Minute City and mobility...',
          description: "",
          section: "News",},{id: "news-soojeong-choi-phd-and-myunghwan-kim-ms-presented-at-the-17th-japan-korea-china-joint-conference-on-geography-held-in-kyoto",
          title: 'Soojeong Choi (PhD) and Myunghwan Kim (MS) presented at the 17th Japan–Korea–China Joint...',
          description: "",
          section: "News",},{id: "news-new-paper-lee-shim-amp-amp-hardman-2026-comprehensive-analysis-of-ev-discontinuation-transportation-research-part-a",
          title: '📄 New paper — Lee, Shim, &amp;amp;amp; Hardman (2026), Comprehensive analysis of EV...',
          description: "",
          section: "News",},{id: "news-new-paper-shim-amp-amp-lee-2025-an-exploratory-analysis-of-the-spatial-structure-of-the-seoul-metropolitan-area-based-on-individual-mobility-characteristics-대한교통학회지",
          title: '📄 New paper — Shim &amp;amp;amp; Lee (2025), An exploratory analysis of the...',
          description: "",
          section: "News",},{id: "news-guest-lecture-dr-taegyun-kim-studio-galilei-drt-case-studies-and-future-visions",
          title: 'Guest lecture — Dr. Taegyun Kim (Studio Galilei): DRT — case studies and...',
          description: "",
          section: "News",},{id: "news-guest-lecture-zoom-dr-jiwon-baek-ucsb-advancing-regional-fire-resilience-spatio-temporal-geoai-and-spatial-optimization",
          title: 'Guest lecture (Zoom) — Dr. Jiwon Baek (UCSB): Advancing Regional Fire Resilience: Spatio-Temporal...',
          description: "",
          section: "News",},{id: "news-yeonwoo-jeong-received-a-bs-degree-and-a-teaching-certificate-and-minjeong-choi-received-a-bs-degree-from-the-department-of-geography",
          title: 'Yeonwoo Jeong received a BS degree and a teaching certificate, and Minjeong Choi...',
          description: "",
          section: "News",},{id: "news-soojeong-choi-phd-myunghwan-kim-yeonwoo-jeong-and-minjeong-choi-ms-presented-papers-and-posters-at-the-2026-aag-annual-meeting-in-san-francisco",
          title: 'Soojeong Choi (PhD), Myunghwan Kim, Yeonwoo Jeong, and Minjeong Choi (MS) presented papers...',
          description: "",
          section: "News",},{id: "projects-overseas-av-based-mobility-services-for-disabled-users",
          title: 'Overseas AV-based Mobility Services for Disabled Users',
          description: "국외 자율주행기반 교통약자 이동지원 서비스 및 실증 사례조사",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2021-av-mobility-disabled/";
            },},{id: "projects-activity-data-based-infectious-disease-exposure-analysis",
          title: 'Activity-Data-based Infectious-Disease Exposure Analysis',
          description: "개인 활동 데이터 기반 감염병 노출 가능성 분석 방법론 개발",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2021-infection-exposure/";
            },},{id: "projects-smartphone-activity-distancing-policy-behavioral-typology",
          title: 'Smartphone Activity — Distancing Policy Behavioral Typology',
          description: "스마트폰 개인 활동 데이터에 기반한 거리두기정책 영향 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-distancing-typology/";
            },},{id: "projects-regional-economic-impact-of-dongdaegu-multimodal-hub",
          title: 'Regional Economic Impact of Dongdaegu Multimodal Hub',
          description: "교통거점시설의 지역경제 활성화 효과 분석 (동대구역 복합환승센터)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-dongdaegu-impact/";
            },},{id: "projects-5th-national-rail-network-plan-expected-impacts",
          title: '5th National Rail Network Plan — Expected Impacts',
          description: "제5차 국가철도망 구축계획 수립에 따른 지자체 신규사업 건의를 위한 기대효과 추정",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-rail-network/";
            },},{id: "projects-sejong-mobility-big-data-literature-review",
          title: 'Sejong Mobility Big Data — Literature Review',
          description: "세종시 모빌리티 빅데이터 활용을 위한 관련 연구 및 문헌조사",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2022-sejong-mobility/";
            },},{id: "projects-spatial-analysis-for-daegu-line-1-yeongcheon-extension",
          title: 'Spatial Analysis for Daegu Line 1 Yeongcheon Extension',
          description: "대구 1호선 영천 연장 사업 정책성 평가 지원을 위한 공간분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-daegu-line1/";
            },},{id: "projects-smartphone-activity-data-social-distancing-policy-impact",
          title: 'Smartphone Activity Data — Social-Distancing Policy Impact',
          description: "스마트폰 개인 활동 데이터에 기반한 거리두기 정책 영향 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-distancing-policy/";
            },},{id: "projects-activity-travel-choice-behavior-of-the-elderly",
          title: 'Activity-Travel Choice Behavior of the Elderly',
          description: "고령자의 활동·통행 선택행태 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-elderly-activity/";
            },},{id: "projects-future-tasks-for-land-infrastructure-and-transport",
          title: 'Future Tasks for Land, Infrastructure and Transport',
          description: "국토교통 분야 미래 대응 과제 연구",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-future-tasks/";
            },},{id: "projects-grid-level-ev-charging-infrastructure-siting",
          title: 'Grid-level EV Charging Infrastructure Siting',
          description: "이용행태를 고려한 격자단위 전기차 충전인프라 입지 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-grid-charging/";
            },},{id: "projects-inter-city-psychological-distance-exploratory-analysis",
          title: 'Inter-City Psychological Distance — Exploratory Analysis',
          description: "도시 간 심리거리에 대한 탐색적 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-psychological-distance/";
            },},{id: "projects-truck-travel-patterns-and-ev-charging-infrastructure-siting",
          title: 'Truck Travel Patterns and EV Charging Infrastructure Siting',
          description: "화물자동차 통행 특성 및 충전인프라 적정입지 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2023-truck-charging/";
            },},{id: "projects-spatial-strategy-for-carbon-neutral-energy-sector",
          title: 'Spatial Strategy for Carbon-Neutral Energy Sector',
          description: "공간단위 탄소중립을 위한 에너지 부분의 공간전략 연구",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-carbon-energy/";
            },},{id: "projects-academic-discipline-classification-reform",
          title: 'Academic Discipline Classification Reform',
          description: "국내 부처별 학문분류체계 현황 조사 및 통합적·합리적 운영 방향 연구",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-discipline-classification/";
            },},{id: "projects-national-highway-network-gis-policy-impact-2024",
          title: 'National Highway Network — GIS Policy Impact (2024)',
          description: "국가간선도로망 구축에 따른 정책효과 GIS 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-highway-policy-gis/";
            },},{id: "projects-carbon-neutral-priority-zone-integrated-scenario-analysis",
          title: 'Carbon-Neutral Priority-Zone Integrated Scenario Analysis',
          description: "탄소중립 공간 유형별 우선구역 통합 시나리오 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-carbon-neutral/";
            },},{id: "projects-multi-dimensional-mobility-index-mapping",
          title: 'Multi-Dimensional Mobility Index Mapping',
          description: "지역별 공간다차원 모빌리티 지도 분석 용역",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-mdmi-mapping/";
            },},{id: "projects-network-analysis-and-database-for-mobility-assessment",
          title: 'Network Analysis and Database for Mobility Assessment',
          description: "이동성 평가를 위한 네트워크 분석 및 DB구축",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-mobility-network/";
            },},{id: "projects-national-highway-network-gis-policy-impact-analysis",
          title: 'National Highway Network — GIS Policy Impact Analysis',
          description: "국가간선도로망 구축에 따른 정책효과 GIS 분석",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2025-national-highway-gis/";
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
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
