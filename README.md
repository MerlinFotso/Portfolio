# Fotso — Personal Portfolio

Portfolio personnel construit avec Next.js App Router, React, TypeScript, Tailwind CSS v4, Framer Motion et Lucide React.

## Prérequis
- Node.js 20.9 ou plus récent
- npm

## Installation et lancement
```bash
npm install
cp .env.example .env.local
npm run dev
```
Ouvrir http://localhost:3000.

## Personnalisation
Les contenus principaux sont centralisés dans `src/data/portfolio.ts` :
- nom complet et localisation ;
- parcours académique ;
- technologies ;
- projets et statut.

Dans `.env.local`, renseigner `NEXT_PUBLIC_CONTACT_EMAIL` avec une adresse e-mail que tu souhaites rendre publique. Le bouton de contact copie cette adresse. Les liens GitHub et LinkedIn sont des liens génériques à remplacer par tes profils réels.

### CV
Le bouton de téléchargement du CV a volontairement été omis tant qu'un vrai CV PDF n'a pas été fourni. Dépose ton CV dans `public/cv.pdf`, puis ajoute un lien `<a href="/cv.pdf" download> Télécharger mon CV </a>` dans le composant `src/components/Portfolio.tsx`.

### Formulaire de contact
Aucun formulaire ne prétend envoyer des messages sans backend. Pour l'activer, connecte un service de formulaire (Formspree, Resend ou une route API avec un fournisseur SMTP), configure les variables secrètes côté serveur, puis ajoute validation et protection anti-spam. Ne place jamais de clé privée dans une variable `NEXT_PUBLIC_*`.

## Vérifications
```bash
npm run build
```

## Déploiement Vercel
1. Crée un dépôt GitHub et pousse le projet.
2. Importe le dépôt sur https://vercel.com.
3. Ajoute `NEXT_PUBLIC_CONTACT_EMAIL` dans les variables d'environnement du projet.
4. Déploie. Vercel détecte automatiquement Next.js.
5. Ajoute ton domaine depuis Settings → Domains si tu en possèdes un.

## À compléter avant publication
- Nom complet si souhaité.
- Adresse e-mail publique.
- URLs personnelles GitHub et LinkedIn.
- CV PDF réel.
- Ajuster les technologies pour ne conserver que celles déjà étudiées ou utilisées.
- Ajouter captures d'écran, dépôt GitHub et résultats réels du projet BVMAC.
- Vérifier les informations et le statut du projet avant présentation à des recruteurs.

## Structure
```
src/
  app/
    projects/[slug]/page.tsx
    globals.css
    layout.tsx
    not-found.tsx
    page.tsx
  components/Portfolio.tsx
  data/portfolio.ts
```
