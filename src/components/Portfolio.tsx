"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Moon, Sun, Database, Workflow, Code2, Cloud, ExternalLink, MapPin, Terminal, ChevronRight } from "lucide-react";
import { profile, education, skillGroups, projects, learning } from "@/data/portfolio";

const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: "easeOut" as const } } };

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = profile.email;
  const copyEmail = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };
  const nav = [["À propos", "#about"], ["Parcours", "#education"], ["Compétences", "#skills"], ["Projets", "#projects"], ["Contact", "#contact"]];
  return (
    <main className={light ? "site light" : "site"}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand"><span className="brand-mark">F.</span><span>FOTSO<span className="brand-dot">.</span></span></a>
          <div className="desktop-nav">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div className="nav-actions">
            <button className="theme-toggle" aria-label="Changer de thème" onClick={() => setLight(!light)}>{light ? <Moon size={17}/> : <Sun size={17}/>}</button>
            <a className="nav-cta" href="#contact">Parlons de votre projet <ArrowUpRight size={15}/></a>
            <button className="mobile-menu" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </nav>
        {menuOpen && <div className="mobile-nav">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15}/></a>)}</div>}
      </header>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="show" variants={reveal}>
            <div className="status-line"><span className="status-pulse"/> PORTFOLIO PERSONNEL <span className="status-divider">/</span> {profile.location.toUpperCase()}</div>
            <p className="hero-kicker">HELLO, WORLD. I’M</p>
            <h1>{profile.fullName}<span className="hero-period">.</span></h1>
            <h2>Building software.<br/><span>Engineering data.</span></h2>
            <p className="hero-description">{profile.intro}</p>
            <div className="hero-buttons"><a className="button button-primary" href="#projects">Explorer mes projets <ArrowUpRight size={17}/></a><a className="button button-ghost" href="#about">En savoir plus <ArrowDown size={16}/></a></div>
            <div className="hero-meta"><span><MapPin size={14}/> Basé au Cameroun</span><span className="meta-separator">·</span><span>Software Engineering Student</span></div>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
          <div className="visual-top"><span>DATA_FLOW.exe</span><span className="window-dots"><i/><i/><i/></span></div>
          <div className="visual-grid"/>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="core"><Database size={43} strokeWidth={1.15}/><span>DATA<br/>ENGINEERING</span></div>
          <div className="node node-a"><Code2 size={17}/><span>CODE</span></div><div className="node node-b"><Workflow size={17}/><span>PIPELINE</span></div><div className="node node-c"><Cloud size={17}/><span>CLOUD</span></div>
          <div className="data-chip chip-a">01 <span>EXTRACT</span></div><div className="data-chip chip-b">02 <span>TRANSFORM</span></div><div className="data-chip chip-c">03 <span>LOAD</span></div>
          <div className="visual-bottom"><span>SYS.STATUS</span><span className="online-dot"/> LEARNING IN PROGRESS</div>
        </motion.div>
        <a href="#about" className="scroll-cue"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section container">
        <SectionHead number="01" eyebrow="A LITTLE INTRODUCTION" title="Au-delà du code."/>
        <div className="about-grid">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} className="about-main">
            <p className="lead">Je m’intéresse à la manière dont <span>le logiciel et les données</span> peuvent résoudre des problèmes concrets.</p>
            <p>Mon parcours a commencé dans les sciences économiques et de gestion à l’Université de Yaoundé II. Cette première expérience m’a donné un regard sur les organisations, les systèmes et la valeur de l’information.</p>
            <p>Aujourd’hui étudiant en génie logiciel à ICT University, je construis progressivement mon socle technique. Mon ambition est de devenir Data Engineer et de concevoir des systèmes fiables pour collecter, transformer et rendre les données utiles.</p>
          </motion.div>
          <motion.aside className="about-aside" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
            <div className="aside-icon"><Terminal size={22}/></div><span className="eyebrow">MY CURRENT FOCUS</span><h3>From information<br/>to infrastructure.</h3><p>Apprendre. Construire. Améliorer. Un projet à la fois.</p>
            <div className="aside-tags"><span>Curiosity</span><span>Consistency</span><span>Problem solving</span></div>
          </motion.aside>
        </div>
      </section>

      <section id="education" className="section container">
        <SectionHead number="02" eyebrow="THE JOURNEY SO FAR" title="Mon parcours."/>
        <div className="timeline">{education.map((item,i)=><motion.div className="timeline-item" key={item.title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
          <div className="timeline-index">{String(i+1).padStart(2,"0")}</div><div className="timeline-marker"><span/></div><div className="timeline-content"><span className="eyebrow">{item.period}</span><h3>{item.title}</h3><h4>{item.place}</h4><p>{item.detail}</p></div>
        </motion.div>)}</div>
      </section>

      <section id="skills" className="section container">
        <SectionHead number="03" eyebrow="TOOLS & TECHNOLOGIES" title="Mon environnement technique."/>
        <p className="section-intro">Une base qui se construit au fil de la formation et des projets. Les technologies à explorer sont volontairement séparées des outils déjà mobilisés.</p>
        <div className="skills-grid">{skillGroups.map((group,i)=><motion.article className={`skill-card ${i===3?"skill-card-explore":""}`} key={group.title} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><div className="skill-card-top"><span className="skill-icon">{group.icon}</span><span className="skill-count">0{i+1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div>{i===3&&<span className="explore-note">TECHNOLOGIES TO EXPLORE</span>}</motion.article>)}</div>
        <p className="disclaimer">Note : cette liste est une base de présentation à personnaliser selon les technologies effectivement étudiées et pratiquées.</p>
      </section>

      <section id="projects" className="section container">
        <SectionHead number="04" eyebrow="SELECTED WORK" title="Des idées en construction."/>
        <p className="section-intro">Des projets concrets pour apprendre, expérimenter et progresser vers l’ingénierie des données.</p>
        {projects.map(project=><motion.article className="project-feature" key={project.slug} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
          <div className="project-art"><div className="project-art-label">CASE STUDY / {project.number}</div><div className="pipeline-graphic"><div className="pipe-box"><span>01</span><Database/><b>SOURCE</b></div><div className="pipe-connector"><i/><i/><i/></div><div className="pipe-box pipe-active"><span>02</span><Workflow/><b>PROCESS</b></div><div className="pipe-connector"><i/><i/><i/></div><div className="pipe-box"><span>03</span><Cloud/><b>OUTPUT</b></div></div><div className="project-art-footer"><span>FINANCIAL DATA</span><span>PYTHON / AUTOMATION</span></div></div>
          <div className="project-info"><div className="project-meta"><span>{project.category}</span><span className="project-status"><i/>{project.status}</span></div><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(tag=><span key={tag}>{tag}</span>)}</div><Link className="text-link" href={`/projects/${project.slug}`}>Découvrir le projet <ArrowUpRight size={17}/></Link></div>
        </motion.article>)}
        <div className="future-projects"><span className="future-icon">＋</span><div><b>La suite s’écrit ici.</b><p>D’autres projets Python, Data Engineering et Software Development viendront enrichir cet espace.</p></div><span className="future-label">COMING NEXT</span></div>
      </section>

      <section className="section container">
        <SectionHead number="05" eyebrow="KEEP MOVING FORWARD" title="Learning in public."/>
        <p className="section-intro">Mon évolution s’organise autour de trois dynamiques : apprendre les fondamentaux, construire des solutions et explorer de nouveaux horizons.</p>
        <div className="learning-grid">{learning.map((item,i)=><motion.article key={item.label} className={`learning-card ${item.tone}`} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><span className="learning-index">0{i+1} / {item.label}</span><div className="learning-symbol">{["⌁","⌘","◈"][i]}</div><h3>{item.title}</h3><p>{item.detail}</p><span className="learning-line"/></motion.article>)}</div>
      </section>

      <section className="goal-band"><div className="container goal-inner"><div><span className="eyebrow">THE LONG-TERM VISION</span><h2>Building the foundations<br/>for <span>smarter data systems.</span></h2></div><div className="goal-copy"><p>Mon objectif : devenir Data Engineer et contribuer à la conception de pipelines, d’infrastructures et d’architectures de données robustes.</p><div className="goal-tags"><span>Data Pipelines</span><span>Cloud Data</span><span>Big Data</span><span>Data Architecture</span></div></div></div></section>

      <section id="contact" className="section container contact-section">
        <SectionHead number="06" eyebrow="LET’S CONNECT" title="Construisons quelque chose."/>
        <div className="contact-grid"><div><p className="lead">Une idée, une collaboration ou simplement envie d’échanger autour de la tech et de la data ?</p><p className="contact-sub">Je suis ouvert aux échanges, aux projets d’apprentissage et aux opportunités de collaboration.</p><div className="contact-links">{email ? <button onClick={copyEmail} className="contact-link"><Mail size={18}/>{copied?"Adresse copiée !":email}<ArrowUpRight size={15}/></button> : <p className="missing-contact">Ajoute ton adresse e-mail dans la configuration pour activer le contact direct.</p>}<a className="contact-link" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ExternalLink size={14}/></a><a className="contact-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ExternalLink size={14}/></a></div></div><div className="contact-terminal"><div className="terminal-head"><span/><span/><span/><b>contact.sh</b></div><div className="terminal-body"><p><i>$</i> whoami</p><h3>Fotso</h3><p><i>$</i> current_focus</p><h3>Software Engineering <em>+</em> Data</h3><p><i>$</i> location</p><h3>Cameroon <span className="cursor">_</span></h3><p className="terminal-foot">// Always learning, always building.</p></div></div></div>
      </section>

      <footer className="footer"><div className="container footer-inner"><a href="#home" className="brand"><span className="brand-mark">F.</span><span>FOTSO<span className="brand-dot">.</span></span></a><span>Building software. Engineering data. Creating possibilities.</span><a href="#home" className="back-top">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} Fotso. Built with curiosity.</small></div></footer>
    </main>
  );
}

function SectionHead({number,eyebrow,title}:{number:string;eyebrow:string;title:string}) {
  return <div className="section-head"><span className="section-number">{number}</span><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div><span className="head-rule"/></div>;
}
