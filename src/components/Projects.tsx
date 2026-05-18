// 1. 프로젝트 데이터의 타입을 정의합니다.
interface PersonalProject {
  title: string;
  techStack: string[];
  description: string[];
  githubLink?: string; // 나중에 깃허브 주소를 넣을 수 있도록 미리 준비해 둡니다.
}

// 2. 현재 구상/진행 중이신 프로젝트 데이터를 배열로 구성합니다.
const projectData: PersonalProject[] = [
  {
    title: "AI 연동 스마트 할 일(To-Do) 관리 애플리케이션",
    techStack: ["React", "Gemini API", "JavaScript"],
    description: [
      "사용자의 입력 맥락을 분석하고 복잡한 작업을 스마트하게 분할 및 추천해 주는 할 일 관리 시스템",
      "React를 활용한 프론트엔드 UI 구축 및 상태 관리 로직 구현",
      "Gemini API를 연동하여 AI 응답 데이터를 가공하고 사용자 경험(UX) 최적화 진행 중"
    ],
    githubLink: "#" // 추후 실제 링크로 교체
  },
  {
    title: "강화학습 기반의 장기(Janggi) AI 엔진 및 최적화 파이프라인 구축",
    techStack: ["Python", "Reinforcement Learning", "Dueling DQN", "CNN", "Minimax"],
    description: [
      "체스보다 경우의 수가 복잡하고 다채로운 장기 보드게임 판을 탐색하는 CNN 기반 상태 인코더 및 Dueling DQN 아키텍처 모델 설계 [cite: 739, 750]",
      "강화학습의 고질적인 한계인 '무한 반복수 파동'을 해결하기 위해 state.tobytes() 기반의 상태 해시 추적 및 가상 이동 필터링 알고리즘 구현 ",
      "초기 훈련 속도 및 탐색 효율성 극대화(Guided Exploration)를 위하여 Double DQN 기법과 30% 확률의 Minimax 알고리즘 기반 전문가 모방 탐색(Expert Demonstration)을 결합한 하이브리드 학습 루프 설계 [cite: 740, 747]",
      "에피소드 초반(40수 이내) 무의미한 기물 이동에 대한 페널티(-0.1점) 및 진영 구축 보너스를 제공하는 정밀한 보상 체계(Reward Shaping) 설계 [cite: 746]",
      "시니어 시스템 엔지니어 역량을 활용하여 multiprocessing 및 Ray 프레임워크 기반의 분산 처리 환경(Vectorized Environments) 도입을 통해 대규모 경험 데이터를 버퍼에 고속 누적하는 학습 인프라 확장 진행 중 "
    ],
    githubLink: "#" // 실제 저장소 링크가 생성되면 여기에 입력하세요.
  },
];

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
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
          }}>
            
            {/* 프로젝트 타이틀 및 깃허브 링크 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#111827', fontWeight: '700' }}>
                {project.title}
              </h3>
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: '0.9rem', 
                    color: '#1a73e8', 
                    textDecoration: 'none', 
                    fontWeight: '600',
                    padding: '6px 12px',
                    border: '1px solid #1a73e8',
                    borderRadius: '20px',
                    transition: 'all 0.2s ease'
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

            {/* 기술 스택 태그 (배지 형태) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {project.techStack.map((tech, tIndex) => (
                <span key={tIndex} style={{ 
                  padding: '4px 10px', 
                  backgroundColor: '#e8f0fe', 
                  color: '#1967d2', 
                  borderRadius: '6px', 
                  fontSize: '0.85rem', 
                  fontWeight: '600' 
                }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* 프로젝트 상세 설명 박스 */}
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