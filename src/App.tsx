// src/App.tsx
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css'; 

function App() {
  return (
    // 최신 트렌드인 Pretendard 폰트(없으면 맑은 고딕 등) 적용
    <div className="app-container" style={{ fontFamily: '"Pretendard", "Noto Sans KR", "맑은 고딕", sans-serif' }}>
      <Header />
      <main className="main-content">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;