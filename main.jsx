import React,{useState} from "react";
import{createRoot}from"react-dom/client";
import{ArrowUpRight,Download,Github,Linkedin,Mail,Menu,X,MapPin,Code2,BarChart3,Database,Sparkles}from"lucide-react";
import"./style.css";

const profile={
 name:"Rentapalli Samuel",
 email:"your.email@example.com",
 github:"https://github.com/",
 linkedin:"https://linkedin.com/",
 resume:"/resume.pdf"
};

const projects=[
 ["Eco Product Recommendation System","Machine-learning recommendation concept for discovering sustainable products.","Python","Machine Learning","Flask"],
 ["Public Transport Demand Forecasting","Random Forest regression workflow for forecasting transport demand.","Python","Pandas","Scikit-learn"],
 ["Smart Campus Web Portal","Responsive campus portal concept with role-based access and student services.","HTML","CSS","JavaScript"],
 ["Mind Care AI","Student-focused web concept for study planning, relaxation and study-life balance.","JavaScript","UI/UX","AI Concept"]
];

const skills=[
 [Code2,"Programming",["Python","Java","C","JavaScript"]],
 [Sparkles,"Web Development",["HTML","CSS","JavaScript","Flask"]],
 [BarChart3,"Data & ML",["Pandas","NumPy","Scikit-learn","Power BI"]],
 [Database,"Tools",["VS Code","Google Colab","Figma","Git"]]
];

function App(){
 const[open,setOpen]=useState(false);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setOpen(false)};
 return <div>
 <nav><div className="navin"><button className="logo" onClick={()=>go("home")}>RS<span>.</span></button><button className="hamb" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div className={"links "+(open?"show":"")}>{["home","about","skills","projects","experience","contact"].map(x=><button onClick={()=>go(x)} key={x}>{x}</button>)}</div><a className="resume" href={profile.resume} download><Download size={16}/> Resume</a></div></nav>

 <section id="home" className="hero"><div className="wrap heroGrid"><div>
 <small className="eyebrow">● AVAILABLE FOR OPPORTUNITIES</small>
 <h1>Building useful things with <em>code & data.</em></h1>
 <p className="lead">I'm {profile.name}, a Computer Science student focused on software development, data analytics and machine learning. I like turning ideas into practical, clean and user-friendly products.</p>
 <div className="actions"><button className="primary" onClick={()=>go("projects")}>View my work <ArrowUpRight size={18}/></button><button className="secondary" onClick={()=>go("contact")}>Let's connect</button></div>
 <div className="social"><a href={profile.github}><Github size={17}/> GitHub</a><a href={profile.linkedin}><Linkedin size={17}/> LinkedIn</a><a href={"mailto:"+profile.email}><Mail size={17}/> Email</a></div>
 </div><div className="profile"><div className="card"><div className="top">PORTFOLIO / 2026 <span>01</span></div><div className="avatar">RS</div><h2>Rentapalli<br/>Samuel</h2><p>Computer Science Engineering</p><div className="loc"><MapPin size={14}/> Andhra Pradesh, India</div><code>&lt;/&gt; learn · build · ship</code></div></div></div><div className="scroll">SCROLL ↓</div></section>

 <section id="about"><div className="wrap two"><div><small className="label">01 — ABOUT</small><h2 className="title">Curious mind.<br/><em>Practical builder.</em></h2></div><div className="copy"><p>I'm a B.Tech CSE student who enjoys working across software, data and AI. My approach is simple: understand the problem, build a usable solution, then improve it through testing and feedback.</p><p>I'm especially interested in projects where development meets data — dashboards, prediction systems, recommendation systems and student-focused products.</p><div className="stats"><b>4+<small>Projects</small></b><b>4<small>Languages</small></b><b>1<small>Internship</small></b></div></div></div></section>

 <section id="skills" className="alt"><div className="wrap"><small className="label">02 — SKILLS</small><div className="heading"><h2 className="title">Tools I use to <em>build.</em></h2><p>Fundamentals first, then the tools that solve the problem.</p></div><div className="skillgrid">{skills.map(([Icon,t,items])=><article className="skill" key={t}><Icon/><h3>{t}</h3><div>{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></div></section>

 <section id="projects"><div className="wrap"><small className="label">03 — PROJECTS</small><div className="heading"><h2 className="title">Things I've <em>worked on.</em></h2><p>Replace placeholder links with your actual repositories and demos.</p></div><div className="projects">{projects.map((p,i)=><article className="project" key={p[0]}><small>0{i+1}</small><ArrowUpRight className="arrow"/><h3>{p[0]}</h3><p>{p[1]}</p><div>{p.slice(2).map(x=><span key={x}>{x}</span>)}</div><footer><a href={profile.github}>GitHub <Github size={14}/></a><a href="#">Live demo <ArrowUpRight size={14}/></a></footer></article>)}</div></div></section>

 <section id="experience" className="alt"><div className="wrap"><small className="label">04 — EXPERIENCE</small><div className="timeline">
 <article><small>MAY 2026 — JUN 2026</small><h3>Data Analytics Intern</h3><strong>Data Valley</strong><p>Worked on practical data analytics workflows and data-driven problem solving.</p></article>
 <article><small>2024 — 2027</small><h3>B.Tech — Computer Science & Engineering</h3><strong>Andhra Loyola Institute of Engineering and Technology</strong><p>Coursework across programming, software engineering, databases, machine learning and cloud technologies.</p></article>
 <article><small>EARLIER</small><h3>Diploma</h3><strong>MVR College</strong><p>Completed diploma with 78%.</p></article>
 </div></div></section>

 <section id="contact"><div className="wrap contact"><small className="label">05 — CONTACT</small><h2>Have a project, opportunity<br/>or idea? <em>Let's talk.</em></h2><p>Open to internships, entry-level opportunities, projects and meaningful collaborations.</p><div className="actions"><a className="primary" href={"mailto:"+profile.email}>Send me an email <Mail size={18}/></a><a className="secondary" href={profile.linkedin}>LinkedIn <ArrowUpRight size={18}/></a></div><footer>© 2026 {profile.name}<span>Built with React + Vite</span></footer></div></section>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);