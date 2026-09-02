// 1. 강점 키워드를 위한 타입 정의
interface Strength {
  title: string;
  description: string;
}

// 2. 본인의 정체성을 나타내는 데이터
const strengths: Strength[] = [
  {
    title: "Legacy Modernization",
    description: "VB, PHP 기반 시스템을 ASP.NET·.NET 환경으로 옮기고, 운영 환경에 맞게 기능을 개선한 경험이 있습니다."
  },
  {
    title: "System Integration",
    description: "더존 ERP·은행망 연동과 바코드 스캐너·라벨 프린터 연동처럼, 업무 시스템과 외부 장비·서비스를 연결해 왔습니다."
  },
  {
    title: "Performance Optimization",
    description: "대용량 Stored Procedure와 조회 방식의 병목을 점검하고, 웹 환경에 맞는 페이징과 쿼리 개선을 수행했습니다."
  },
  {
    title: "Learning & Exploration",
    description: "업무 경험을 바탕으로 React와 Python 기반 개인 프로젝트를 진행하며, 새로운 도구를 실제 구현에 연결하는 방식을 탐색하고 있습니다."
  }
];

function About() {
  return (
    <section id="about" style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#1a73e8' }}>
        💡 About Me
      </h2>

      {/* 전문적인 소개 문구 (좌측 정렬) */}
      <div style={{ 
        fontSize: '1.15rem', 
        lineHeight: '1.8', 
        color: '#3c4043', 
        marginBottom: '40px',
        wordBreak: 'keep-all'
      }}>
        <p style={{ marginBottom: '20px' }}>
          안녕하세요. MES, ERP, 인트라넷 등 <strong>기업 업무 시스템을 개발해 온 12년+ 경력의 소프트웨어 엔지니어</strong>입니다.
          현장의 업무 흐름을 이해하고, 이를 시스템의 기능과 데이터 흐름으로 구현하는 일을 해왔습니다.
        </p>
        <p>
          새로운 기능 개발뿐 아니라 기존 시스템의 이전, 외부 서비스·장비 연동, 데이터 조회 방식 개선까지 담당해 왔습니다.
        </p>
      </div>

      {/* 핵심 역량 카드 (2열 배치) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px' 
      }}>
        {strengths.map((item, index) => (
          <div key={index} style={{ 
            padding: '24px', 
            borderRadius: '12px', 
            backgroundColor: '#ffffff', 
            border: '1px solid #e8eaed',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ 
              fontSize: '1.2rem', 
              color: '#1a73e8', 
              marginBottom: '12px',
              fontWeight: '600'
            }}>
              {item.title}
            </h3>
            <p style={{ 
              margin: 0, 
              color: '#5f6368', 
              lineHeight: '1.6',
              fontSize: '0.95rem',
              wordBreak: 'keep-all'
            }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
