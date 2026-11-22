import Link from "next/link";
export default function NotFound() {
  return <main className="not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Lost in the data stream?</h1><p>Cette page n’existe pas ou a été déplacée.</p><Link className="button button-primary" href="/">Retour à l’accueil <span>↗</span></Link></main>;
}
