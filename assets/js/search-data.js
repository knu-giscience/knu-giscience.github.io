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
      },{id: "projects-overseas-av-based-mobility-services-for-disabled-users",
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
