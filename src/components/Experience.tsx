// 1. 데이터의 형태(타입)를 정의합니다.
interface Project {
  name: string;
  period: string;
  techStack: string[];
  details: string[];
}

interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  projects: Project[];
}

// 2. 이력서 기반의 실제 데이터를 배열로 구성합니다.
const experienceData: ExperienceItem[] = [
  {
    company: "크리샤㈜",
    period: "2020.10 ~ 2024.12",
    role: "앱개발팀 / 대리",
    projects: [
      {
        name: "전사적 제조실행시스템(MES) 구축 및 고도화",
        period: "2020.10 ~ 2024.12",
        techStack: ["ASP.NET", ".NET", "VB", "PHP", "Stored Procedure"],
        details: [
          "기존 VB 기반 CS 프로그램의 ASP.NET 웹 환경 전환 작업 참여",
          "대용량 Stored Procedure를 웹 환경에 맞게 수정하고 페이징 조회 방식 개선",
          "기존 PHP 레거시 시스템을 .NET 환경으로 마이그레이션",
          "포인트, 예치금, 세금계산서/현금영수증 자동 연동 기능 추가 도입"
        ]
      },
      {
        name: "하드웨어 연동 및 공정 자동화",
        period: "2024.04 ~ 2024.05",
        techStack: ["바코드 스캐너", "라벨 프린터"],
        details: [
          "작업 지시서 바코드 스캔 및 품목 검증 시스템 개발",
          "작업 완료 시 라벨 프린터와 연동해 운송장을 출력하는 기능 구현"
        ]
      }
    ]
  },
  {
    company: "㈜페라솔루션",
    period: "2017.10 ~ 2020.04",
    role: "개발팀 / 대리",
    projects: [
      {
        name: "인쇄 자동견적 ERP 및 MES 구축",
        period: "2017.10 ~ 2020.04",
        techStack: ["Windows Tablet", "더존 ERP", "은행망 연동", "카카오톡", "팩스"],
        details: [
          "현장 작업자를 위한 윈도우 태블릿 전용 입력 프로그램 신규 개발",
          "더존 ERP 시스템 및 은행망 연동을 통한 입금 내역 자동 대사(Reconciliation) 모듈 구축",
          "작업 지시서 카카오톡 및 팩스 자동 전송 로직 구현"
        ]
      }
    ]
  },
  {
    company: "이엠아이",
    period: "2016.10 ~ 2017.07",
    role: "웹개발팀 / 사원",
    projects: [
      {
        name: "웹사이트 구축 및 유지보수",
        period: "2016.10 ~ 2017.07",
        techStack: ["웹사이트 개발", "유지보수"],
        details: [
          "농협 CS통계 페이지 및 다수의 기업/서비스 홈페이지 리뉴얼 및 신규 개발"
        ]
      }
    ]
  },
  {
    company: "㈜모션아이 & ㈜엠웍스",
    period: "2011.10 ~ 2016.06",
    role: "개발팀 / 대리 및 사원",
    projects: [
      {
        name: "엔터프라이즈 사내 인트라넷 및 솔루션 개발",
        period: "2011.10 ~ 2016.06",
        techStack: ["인트라넷", "MS Office Add-in", "업무관리 시스템"],
        details: [
          "유한킴벌리, 서울대학교 등 다수의 기업/기관 브랜드 사이트 및 인트라넷 개발",
          "KT MS Office Add-in 제작 및 사내 업무관리 홈페이지 구축"
        ]
      }
    ]
  }
];

// 3. 화면을 그리는 렌더링 로직입니다.
function Experience() {
  return (
    <section id="experience" style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#1a73e8' }}>
        🏆 Work Experience
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {experienceData.map((exp, index) => (
          <div key={index} style={{ 
            padding: '30px', 
            borderRadius: '16px', 
            backgroundColor: '#ffffff', 
            border: '1px solid #e8eaed',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
            textAlign: 'left' // 전체 가운데 정렬 해제, 기본 좌측 정렬로 복구
          }}>
            
            {/* 회사명, 직급, 기간 (원래대로 양쪽 분할 정렬 복구) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', borderBottom: '1px solid #f1f3f4', paddingBottom: '20px' }}>
              <div>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '1.5rem', color: '#111827' }}>{exp.company}</h3>
                <span style={{ color: '#1a73e8', fontWeight: '600' }}>{exp.role}</span>
              </div>
              {/* 기간은 우측 정렬되도록 배치 */}
              <span style={{ color: '#80868b', fontSize: '0.95rem', fontWeight: '500' }}>{exp.period}</span>
            </div>

            {/* 프로젝트 리스트 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {exp.projects.map((project, pIndex) => (
                <div key={pIndex}>
                  
                  {/* 프로젝트명 (좌측 정렬 유지) */}
                  <h4 style={{ margin: '0 0 16px 0', fontSize: '1.15rem', color: '#202124', fontWeight: '600' }}>
                    {project.name}
                  </h4>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '0 0 16px 0' }}>
                    {project.techStack.map((tech) => (
                      <span key={tech} style={{
                        padding: '4px 10px',
                        backgroundColor: '#e8f0fe',
                        color: '#1a73e8',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        fontWeight: '600'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* 상세 내용 박스 (가독성을 위한 회색 박스 유지) */}
                  <div style={{ 
                    backgroundColor: '#f8f9fa', 
                    borderRadius: '12px', 
                    padding: '24px'
                  }}>
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', color: '#3c4043', lineHeight: '1.8' }}>
                      {project.details.map((detail, dIndex) => (
                        <li key={dIndex} style={{ 
                          position: 'relative', 
                          paddingLeft: '18px', 
                          marginBottom: '8px',
                          wordBreak: 'keep-all' 
                        }}>
                          <span style={{ position: 'absolute', left: 0, top: '2px', color: '#1a73e8', fontSize: '1.2rem', lineHeight: '1' }}>
                            ·
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
