// src/components/Skills.tsx
import React from 'react'; // JSX 에러 해결을 위해 추가
import { SiDotnet, SiPhp, SiReact, SiJavascript, SiHtml5, SiPython, SiGithub } from "react-icons/si";
import { FaDatabase, FaRobot, FaNetworkWired, FaServer, FaCogs } from "react-icons/fa";
import { BsCpuFill } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";

// 1. 스킬 데이터의 타입을 정의합니다. (JSX.Element 대신 더 안전한 React.ReactNode 사용)
interface SkillItem {
  name: string;
  icon: React.ReactNode; 
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

// 2. 카테고리별 기술 스택 데이터 배열입니다.
const skillData: SkillCategory[] = [
  {
    category: "주력 실무",
    icon: <FaServer style={{ color: '#5f6368' }} />,
    skills: [
      { name: "C#", icon: <TbBrandCSharp color="#239120" size="1.2em" /> },
      { name: "ASP.NET MVC", icon: <SiDotnet color="#512bd4" /> },
      { name: "VB.NET", icon: <FaCogs color="#00539c" /> },
      { name: "PHP", icon: <SiPhp color="#777bb4" /> },
      { name: "Stored Procedure", icon: <FaDatabase color="#cc292b" /> },
    ]
  },
  {
    category: "기타 실무",
    icon: <FaNetworkWired style={{ color: '#5f6368' }} />,
    skills: [
      { name: "React", icon: <SiReact color="#61dafb" /> },
      { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
      { name: "HTML / CSS", icon: <SiHtml5 color="#e34f26" /> },
      { name: "REST API 연동", icon: <FaNetworkWired color="#8a2be2" /> },
      { name: "Hardware 제어", icon: <BsCpuFill color="#607d8b" /> },
      { name: "Git", icon: <SiGithub color="#181717" /> },
    ]
  },
  {
    category: "개인학습",
    icon: <FaRobot style={{ color: '#5f6368' }} />,
    skills: [
      { name: "Python", icon: <SiPython color="#3776ab" /> },
      { name: "Gemini API", icon: <FaRobot color="#1a73e8" /> },
      { name: "Reinforcement Learning", icon: <BsCpuFill color="#0f9d58" /> },
      { name: "Dueling DQN", icon: <BsCpuFill color="#0f9d58" /> },
      { name: "CNN", icon: <BsCpuFill color="#0f9d58" /> },
      { name: "Ray", icon: <BsCpuFill color="#0f9d58" /> },
    ]
  }
];

// 3. 화면을 그리는 렌더링 로직
function Skills() {
  return (
    <section id="skills" style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#1a73e8' }}>
        🛠️ Tech Stack & Skills
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '24px' 
      }}>
        {skillData.map((group, index) => (
          <div key={index} style={{ 
            padding: '24px', 
            borderRadius: '16px', 
            backgroundColor: '#ffffff', 
            border: '1px solid #e8eaed',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
          }}>
            {/* 카테고리 제목 (아이콘 포함) */}
            <h3 style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '0 0 20px 0', 
              fontSize: '1.25rem', 
              color: '#111827', 
              fontWeight: '700',
              borderBottom: '2px solid #f1f3f4',
              paddingBottom: '12px'
            }}>
              {group.icon}
              {group.category}
            </h3>
            
            {/* 개별 기술 태그 (로고 포함) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {group.skills.map((skill, sIndex) => (
                <div key={sIndex} style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 14px', 
                  backgroundColor: '#f8f9fa', 
                  color: '#3c4043', 
                  border: '1px solid #dadce0',
                  borderRadius: '10px', 
                  fontSize: '0.95rem', 
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  {/* 각 기술의 오리지널 로고 아이콘 렌더링 */}
                  <span style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem' }}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
