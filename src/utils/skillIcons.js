import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiSvelte, 
  SiNextdotjs, 
  SiThreedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiFastapi,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiGraphql,
  SiMongodb,
  SiTerraform,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiSelenium
} from 'react-icons/si';
import { FaPython, FaAws } from 'react-icons/fa';

// Map skill names to their corresponding icons
export const skillIconMap = {
  // Frontend
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React.js': SiReact,
  'SvelteKit': SiSvelte,
  'Next.js': SiNextdotjs,
  'Three.js': SiThreedotjs,
  'Tailwind CSS': SiTailwindcss,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  
  // Backend
  'Supabase': SiSupabase,
  'PostgreSQL': SiPostgresql,
  'MYSQL': SiMysql,
  'FastAPI': SiFastapi,
  'Python Flask': SiFlask,
  'Node.js': SiNodedotjs,
  'Express': SiExpress,
  'PHP': SiPhp,
  'GraphQL': SiGraphql,
  'MongoDB': SiMongodb,
  'AWS (EC2, S3, VPC, Route 53)': FaAws,
  'Terraform': SiTerraform,
  'GitHub Actions': SiGithub,
  
  // Tools & DevOps
  'Git, GitLab & GitHub': SiGit,
  'AWS': FaAws,
  'Docker': SiDocker,
  'Selenium': SiSelenium,
  
  // Python (for backend)
  'Python': FaPython
};

// Get icon for a skill, returns null if no icon found
export const getSkillIcon = (skillName) => {
  return skillIconMap[skillName] || null;
};

