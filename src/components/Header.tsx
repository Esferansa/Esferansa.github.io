// src/components/Header.tsx
function Header() {
  return (
    <header className="sidebar">
      <div>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0', letterSpacing: '-1px', color: '#111827' }}>
          Taek Hyoung Lee
        </h1>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 500, margin: '0 0 20px 0', color: '#4b5563' }}>
          12년차 시스템 소프트웨어 엔지니어
        </h2>
        <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: '50px' }}>
          복잡한 비즈니스 문제를 해결하고, 레거시 시스템을 안정적으로 현대화하는 백엔드 전문가입니다.
        </p>
      </div>
      
      {/* 세로 네비게이션 메뉴 */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <a href="#about" className="nav-link">01. About</a>
        <a href="#experience" className="nav-link">02. Experience</a>
        <a href="#projects" className="nav-link">03. Projects</a>
      </nav>
    </header>
  );
}

export default Header;