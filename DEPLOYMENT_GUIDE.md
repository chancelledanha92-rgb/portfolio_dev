# Guide de Déploiement - Portfolio Développeur

## Vue d'ensemble

Votre site est maintenant prêt à être mis en ligne avec :
- ✅ Frontend moderne et responsive
- ✅ Backend complètement fonctionnel
- ✅ Système de stockage des messages de contact
- ✅ Email et WhatsApp intégrés
- ✅ Validation des formulaires
- ✅ Gestion des erreurs

## Architecture

### Frontend
- React + Vite + TypeScript
- Tailwind CSS pour le styling
- Animations et effets modernes

### Backend
- Express.js
- API REST pour les formulaires de contact
- Stockage JSON des soumissions

### Base de données
Les soumissions de contact sont stockées dans un fichier JSON (`submissions.json`) qui sera créé automatiquement dans le répertoire `.data/` du serveur.

## Déploiement sur Vercel

### Étape 1 : Préparer le projet
```bash
git add .
git commit -m "Portfolio prêt pour déploiement"
git push origin main
```

### Étape 2 : Connecter à Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez "New Project"
4. Sélectionnez votre repository
5. Vercel détectera automatiquement la configuration

### Étape 3 : Configuration Vercel
- **Framework**: Vite
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

Vercel va déployer automatiquement.

## Déploiement sur Netlify

### Étape 1 : Préparer le projet
```bash
git add .
git commit -m "Portfolio prêt pour déploiement"
git push origin main
```

### Étape 2 : Connecter à Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous
3. Cliquez "New site from Git"
4. Sélectionnez votre repository GitHub
5. Utilisez la configuration suivante :

### Étape 3 : Configuration Netlify
- **Build Command**: `pnpm build`
- **Publish Directory**: `dist`
- **Functions Directory**: `netlify/functions`

Netlify va déployer automatiquement.

## Stockage des données

### Actuellement (Développement/Production simple)
Les soumissions de contact sont stockées dans un fichier JSON :
- **Localisation**: `.data/submissions.json`
- **Format**: JSON avec structure
  ```json
  [
    {
      "id": "timestamp-randomid",
      "name": "Nom du client",
      "email": "client@example.com",
      "message": "Son message",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ]
  ```

### Accéder aux soumissions
- URL: `/api/submissions`
- Méthode: GET
- Réponse: Liste complète des soumissions

### Améliorations futures (Optionnel)
Si vous prévoyez une croissance importante, vous pouvez migrer vers :
1. **MongoDB Atlas** (gratuit jusqu'à 512 MB)
2. **PostgreSQL** (via Supabase, gratuit)
3. **Firebase Firestore** (gratuit jusqu'à certain quota)

## Processus de déploiement automatique

Une fois connecté à Vercel ou Netlify :
1. Chaque `git push` vers `main` déclenche un déploiement automatique
2. Le site sera reconstruit et mis en ligne
3. Vous recevrez une notification une fois prêt

## Variables d'environnement (si nécessaire)

Le projet ne nécessite actuellement aucune variable d'environnement obligatoire.

Si vous en ajoutez plus tard :
1. Créez un fichier `.env.local` en développement
2. Sur Vercel/Netlify, allez dans Settings → Environment Variables

## Points de contrôle avant le déploiement

✅ Email mis à jour : `chancelledanha92@gmail.com`
✅ Numéro WhatsApp configuré : `+229 01 90 44 5208`
✅ Tous les liens de navigation fonctionnent
✅ Formulaire de contact envoie les données au backend
✅ Animations et styles chargés correctement
✅ Mobile-responsive testé

## Tester le site en local

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Accéder à http://localhost:8080
```

## Contacter pour support

- Email: chancelledanha92@gmail.com
- WhatsApp: https://wa.me/2290190445208

---

**Dernier update**: 2024
**Status**: ✅ Prêt pour la production
