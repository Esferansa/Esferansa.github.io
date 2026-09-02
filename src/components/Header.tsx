// src/components/Header.tsx
function Header() {
  return (
    <header className="sidebar">
      <div>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 10px 0', letterSpacing: '-1px', color: '#111827' }}>
          이택형
        </h1>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 500, margin: '0 0 20px 0', color: '#4b5563' }}>
          12년+ 경력의 엔터프라이즈 시스템 소프트웨어 엔지니어
        </h2>
        <p style={{ color: '#6b7280', lineHeight: 1.6, marginBottom: '50px' }}>
          MES·ERP·인트라넷 환경에서 업무 흐름을 구현하고, 기존 시스템을 개선해 온 개발자입니다.
        </p>
      </div>
      
      {/* 세로 네비게이션 메뉴 */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <a href="#about" className="nav-link">01. About</a>
        <a href="#skills" className="nav-link">02. Tech Stack</a>  {/* 👈 추가된 부분 */}
        <a href="#experience" className="nav-link">03. Experience</a>
        <a href="#projects" className="nav-link">04. Projects</a>
      </nav>
    </header>
  );
}

export default Header;
