import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Database, Workflow, FileText } from "lucide-react";
import { projects } from "@/data/portfolio";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="project-page"><div className="project-page-glow"/><div className="container project-page-container">
    <Link href="/#projects" className="back-link"><ArrowLeft size={16}/> Retour aux projets</Link>
    <span className="eyebrow">{project.category}</span><h1>{project.title}</h1><p className="project-page-lead">{project.description}</p>
    <div className="project-page-banner"><div className="banner-icon"><Database size={42}/></div><div><span>PROJECT STATUS</span><h2>{project.status}</h2></div><Workflow size={34} className="banner-workflow"/></div>
    <section className="detail-section"><span className="eyebrow">01 / OVERVIEW</span><h2>À propos du projet</h2><p>{project.overview}</p></section>
    <section className="detail-section"><span className="eyebrow">02 / HOW IT WORKS</span><h2>Architecture envisagée</h2><ol className="detail-list">{project.architecture.map((step,i)=><li key={step}><span>0{i+1}</span>{step}</li>)}</ol></section>
    <section className="detail-section"><span className="eyebrow">03 / TECHNOLOGIES</span><h2>Stack technique</h2><div className="project-stack">{project.stack.map((tag)=><span key={tag}>{tag}</span>)}</div></section>
    <section className="detail-section"><span className="eyebrow">04 / NEXT STEPS</span><h2>Pistes d’amélioration</h2><ul className="detail-list">{project.next.map((step,i)=><li key={step}><span>↗</span>{step}</li>)}</ul></section>
    <div className="project-disclaimer"><FileText size={18}/><p>Cette fiche décrit l’objectif, le fonctionnement prévu et les pistes d’évolution du projet. Elle sera enrichie avec les résultats et détails techniques au fur et à mesure de son avancement.</p></div>
    <Link href="/#contact" className="button button-primary">Échanger à propos du projet <ArrowUpRight size={17}/></Link>
  </div></main>;
}
