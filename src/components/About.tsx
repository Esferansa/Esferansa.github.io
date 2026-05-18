// 1. 강점 키워드를 위한 타입 정의
interface Strength {
  title: string;
  description: string;
}

// 2. 본인의 정체성을 나타내는 데이터
const strengths: Strength[] = [
  {
    title: "Legacy Modernization",
    description: "VB, PHP 등 노후화된 레거시 시스템을 안정적인 .NET 환경으로 마이그레이션하고 현대화하는 데 풍부한 경험이 있습니다."
  },
  {
    title: "System Integration",
    description: "더존 ERP, 전자결제 API부터 바코드 스캐너, 라벨 프린터 등 하드웨어 연동까지 비즈니스 전반의 통합 솔루션을 구축합니다."
  },
  {
    title: "Performance Optimization",
    description: "대용량 DB 프로시저 최적화와 쿼리 튜닝을 통해 시스템 병목을 해결하고 데이터 처리 성능을 극대화합니다."
  },
  {
    title: "Continuous Growth",
    description: "11년의 백엔드 경력에 안주하지 않고 React와 AI 기술을 학습하여 최신 기술 트렌드를 비즈니스에 접목하려 노력합니다."
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
          안녕하세요, <strong>12년 6개월 차 소프트웨어 엔지니어</strong>입니다. 
          주로 엔터프라이즈 환경에서 MES, ERP, 인트라넷 등 기업의 핵심 비즈니스 로직을 설계하고 구현해 왔습니다.
        </p>
        <p>
          단순히 코드를 작성하는 것을 넘어, <strong>기술이 비즈니스의 문제를 어떻게 해결할 수 있는지</strong> 고민합니다. 
          현장의 복잡한 요구사항을 분석하여 데이터 흐름을 최적화하고, 레거시 시스템을 안정적으로 현대화하여 기업의 운영 효율을 높이는 데 기여하고 있습니다.
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