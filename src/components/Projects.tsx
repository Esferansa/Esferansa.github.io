// 1. 프로젝트 데이터의 타입을 정의합니다. (경력 섹션과 통일감을 위해 period 추가)
interface PersonalProject {
  title: string;
  period: string;
  techStack: string[];
  description: string[];
  githubLink?: string; 
}

// 개인 프로젝트에서 직접 다룬 기술과 구현 내용을 기록합니다.
const projectData: PersonalProject[] = [
  {
    title: "우마무스메 실시간 훈련 분석 도우미",
    period: "개인 프로젝트",
    techStack: ["Python", "PyQt6", "OpenCV", "EasyOCR", "PaddleOCR", "SQLite"],
    description: [
      "대상 게임 창을 선택해 화면을 캡처하고, 별도 QThread에서 분석을 수행하는 데스크톱 도구를 구현",
      "스탯·훈련 상승치·실패율을 OCR로 읽고, EasyOCR과 PaddleOCR을 화면에서 전환할 수 있도록 구성",
      "템플릿 매칭과 영역별 이미지 분석으로 훈련 종류, 서포트 카드, 힌트·이벤트 표시를 판별",
      "목표 스탯, 상승치, 실패율, 서포트·힌트 정보를 점수화해 훈련 추천을 오버레이로 표시",
      "턴별 분석 상태와 추천 결과를 SQLite에 저장하고, 가중치를 바꿔 추천 변화를 확인하는 백테스트 스크립트 구현",
      "OCR 결과 캐시와 프레임 단위 재인식 조건을 두어 애니메이션 구간의 노이즈와 불필요한 분석 호출을 줄임"
    ]
  },
  {
    title: "강화학습 기반 장기(Janggi) AI 엔진 및 파이프라인 구축",
    period: "개인 프로젝트",
    techStack: ["Python", "Reinforcement Learning", "Dueling DQN", "CNN"],
    description: [
      "장기 보드 상태를 입력으로 다루는 CNN 기반 상태 인코더와 Dueling DQN 구조를 설계",
      "state.tobytes() 기반 상태 해시 추적과 가상 이동 필터링을 적용해 반복 이동을 다루는 로직 구현",
      "Double DQN과 Minimax 기반 탐색을 조합해 학습·탐색 방식을 실험",
      "초반 기물 이동과 진영 구축을 고려한 보상 규칙을 설계",
      "multiprocessing과 Ray를 활용해 경험 데이터를 병렬로 수집하는 학습 환경 구성"
    ],
  },
  {
    title: "AI 연동 스마트 할 일(To-Do) 관리 애플리케이션",
    period: "개인 프로젝트",
    techStack: ["React", "Gemini API", "JavaScript"],
    description: [
      "사용자 입력을 바탕으로 할 일을 분할·추천하는 흐름을 설계",
      "React로 할 일 관리 화면과 상태 관리 로직을 구현",
      "Gemini API 응답을 화면에 맞게 가공하는 연동 로직을 구현"
    ]
  }
];

// 3. 화면을 그리는 렌더링 로직 (Experience.tsx와 완벽히 동일한 구조)
function Projects() {
  return (
    <section id="projects" style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#1a73e8' }}>
        💻 Personal Projects
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {projectData.map((project, index) => (
          <div key={index} style={{ 
            padding: '30px', 
            borderRadius: '16px', 
            backgroundColor: '#ffffff', 
            border: '1px solid #e8eaed',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
            textAlign: 'left' // 좌측 정렬 통일
          }}>
            
            {/* 프로젝트 타이틀, 기술 스택, 기간 (양쪽 분할 정렬 복구) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', borderBottom: '1px solid #f1f3f4', paddingBottom: '20px' }}>
              
              {/* 좌측: 타이틀 및 기술 스택 */}
              <div style={{ flex: 1, paddingRight: '20px' }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '1.5rem', color: '#111827', fontWeight: '700' }}>
                  {project.title}
                </h3>
                {/* 기술 스택 태그 */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.techStack.map((tech, tIndex) => (
                    <span key={tIndex} style={{ 
                      padding: '4px 10px', 
                      backgroundColor: '#e8f0fe', 
                      color: '#1a73e8', 
                      borderRadius: '6px', 
                      fontSize: '0.85rem', 
                      fontWeight: '600' 
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 우측: 기간 및 깃허브 링크 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px', minWidth: '130px' }}>
                <span style={{ color: '#80868b', fontSize: '0.95rem', fontWeight: '500' }}>
                  {project.period}
                </span>
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      fontSize: '0.85rem', 
                      color: '#1a73e8', 
                      textDecoration: 'none', 
                      fontWeight: '600',
                      padding: '4px 12px',
                      border: '1px solid #1a73e8',
                      borderRadius: '20px',
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a73e8';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#1a73e8';
                    }}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            {/* 상세 내용 박스 (Experience의 가독성을 위한 회색 박스 유지) */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              borderRadius: '12px', 
              padding: '24px' 
            }}>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', color: '#3c4043', lineHeight: '1.8' }}>
                {project.description.map((desc, dIndex) => (
                  <li key={dIndex} style={{ 
                    position: 'relative', 
                    paddingLeft: '18px', 
                    marginBottom: '8px',
                    wordBreak: 'keep-all' 
                  }}>
                    <span style={{ position: 'absolute', left: 0, top: '2px', color: '#1a73e8', fontSize: '1.2rem', lineHeight: '1' }}>
                      ·
                    </span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
