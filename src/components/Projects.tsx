// 1. 프로젝트 데이터의 타입을 정의합니다. (경력 섹션과 통일감을 위해 period 추가)
interface PersonalProject {
  title: string;
  period: string;
  techStack: string[];
  description: string[];
  githubLink?: string; 
}

// 2. 장기 강화학습 프로젝트가 추가된 최신 데이터 배열입니다.
const projectData: PersonalProject[] = [
  {
    title: "강화학습 기반 장기(Janggi) AI 엔진 및 파이프라인 구축",
    period: "개인 프로젝트",
    techStack: ["Python", "Reinforcement Learning", "Dueling DQN", "CNN"],
    description: [
      "체스보다 경우의 수가 복잡한 장기 보드게임 판을 탐색하는 CNN 기반 상태 인코더 및 Dueling DQN 아키텍처 모델 설계",
      "강화학습의 고질적 한계인 '무한 반복수 파동' 해결을 위해 state.tobytes() 기반 상태 해시 추적 및 가상 이동 필터링 알고리즘 구현",
      "Double DQN 기법과 30% 확률의 Minimax 기반 전문가 모방 탐색(Expert Demonstration)을 결합하여 초기 훈련 속도 및 탐색 효율성 극대화",
      "에피소드 초반(40수 이내) 무의미한 기물 이동 페널티(-0.1점) 및 진영 구축 보너스를 제공하는 정밀한 보상 체계(Reward Shaping) 설계",
      "multiprocessing 및 Ray 프레임워크 기반의 분산 처리 환경(Vectorized Environments)을 도입하여 대규모 경험 데이터를 고속 누적하는 학습 인프라 구축"
    ],
  },
  {
    title: "AI 연동 스마트 할 일(To-Do) 관리 애플리케이션",
    period: "개인 프로젝트",
    techStack: ["React", "Gemini API", "JavaScript"],
    description: [
      "사용자의 입력 맥락을 분석하고 복잡한 작업을 스마트하게 분할 및 추천해 주는 할 일 관리 시스템 설계",
      "React를 활용하여 사용자 친화적인 프론트엔드 UI를 구축하고 효율적인 상태 관리 로직 구현",
      "Gemini API를 연동하여 AI 응답 데이터를 가공 처리하고, 사용자 경험(UX) 최적화"
    ],
    githubLink: "#"
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