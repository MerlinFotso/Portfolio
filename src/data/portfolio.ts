export const profile = {
  name: "Fogue_Fotso",
  fullName: "GUY_MERLIN", // Remplace par ton nom complet si tu le souhaites.
  location: "Cameroun",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "merlinfotso01@gmail.com",
  headline: "Software Engineering Student · Aspiring Data Engineer",
  intro: "Passionné par la technologie et l'exploitation des données, je développe progressivement mes compétences en génie logiciel et en ingénierie des données pour concevoir des systèmes capables de collecter, traiter, organiser et valoriser l'information."
};

export const education = [
  { period: "Formation antérieure", title: "Baccalauréat — Série D", place: "Cameroun", detail: "Formation scientifique qui a constitué une première base pour mon parcours universitaire." },
  { period: "Une année universitaire", title: "Sciences économiques et de gestion", place: "Université de Yaoundé II · Cameroun", detail: "Une première expérience universitaire qui m’a familiarisé avec les enjeux économiques, la gestion et l’analyse." },
  { period: "Formation actuelle", title: "Génie logiciel", place: "ICT University · Cameroun", detail: "Formation en cours avec pour objectif l’obtention d’une licence en génie logiciel." }
];

export const skillGroups = [
  { title: "Développement & programmation", icon: "⌘", items: ["Python", "R", "JavaScript / TypeScript"] },
  { title: "Données & bases de données", icon: "▤", items: ["SQL", "MySQL", "PostgreSQL", "MongoDB"] },
  { title: "Outils & développement", icon: "⌁", items: ["Git & GitHub", "APIs", "Développement web"] },
  { title: "En exploration", icon: "◈", items: ["Apache Spark", "Apache Airflow", "Docker", "Cloud (AWS / Azure / GCP)", "Data Warehousing", "ETL / ELT"] }
];

export const projects = [
  {
    slug: "bvmac-data-collector",
    number: "01",
    category: "FINANCIAL DATA · AUTOMATION",
    title: "BVMAC — Automated Financial Data Collection",
    description: "Un outil Python conçu pour automatiser la récupération des Bulletins Officiels de la Cote publiés par la Bourse des Valeurs Mobilières de l’Afrique Centrale.",
    status: "En développement",
    stack: ["Python", "Requests", "BeautifulSoup", "Web Scraping"],
    overview: "Ce projet vise à simplifier l’accès aux publications financières de la BVMAC en automatisant la détection et le téléchargement des Bulletins Officiels de la Cote (BOC). Il constitue une première étape vers la constitution d’un jeu de données financières exploitable.",
    architecture: ["Requête HTTP vers la page de publication BVMAC", "Analyse du HTML avec BeautifulSoup", "Extraction des liens de bulletins", "Téléchargement et organisation locale des documents"],
    next: ["Renforcer la gestion des erreurs et des délais réseau", "Éviter les téléchargements en doublon", "Journaliser les opérations et les fichiers récupérés", "Étudier l’extraction structurée des données contenues dans les PDF"]
  }
];

export const learning = [
  { label: "LEARNING", title: "Approfondir les fondamentaux", detail: "Consolider mes bases en programmation, bases de données et génie logiciel.", tone: "cyan" },
  { label: "BUILDING", title: "Transformer les idées en projets", detail: "Mettre en pratique Python et l’automatisation à travers des projets concrets comme le collecteur BVMAC.", tone: "blue" },
  { label: "EXPLORING", title: "Aller vers la Data Engineering", detail: "Découvrir les architectures distribuées, l’orchestration et les plateformes cloud.", tone: "violet" }
];
