# Portfolio Professionnel - Développeur Web & Mobile

Un portfolio moderne et professionnel créé avec React, Vite et Tailwind CSS. Le site présente les services, formations, projets et compétences d'un développeur web et mobile basé en Afrique.

## 🎯 Fonctionnalités

- ✅ **Hero Section** - Présentation impactante avec CTA
- ✅ **Services** - 4 services principaux
- ✅ **Formations** - 4 formations en informatique
- ✅ **Projets** - Galerie de 6 projets avec modal interactif
- ✅ **Compétences** - Stack technologique complet
- ✅ **Témoignages** - Avis clients authentiques
- ✅ **Formulaire de Contact** - Avec stockage backend
- ✅ **Intégration WhatsApp** - Bouton flottant + liens directs
- ✅ **Responsive Design** - Mobile-first
- ✅ **Animations** - Smooth scrolling et transitions
- ✅ **SEO Optimisé** - Meta tags et robots.txt

## 🛠 Technologies

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3 + Lucide Icons
- **Backend**: Express.js
- **Database**: JSON file storage (`.data/submissions.json`)
- **Deployment**: Vercel ou Netlify

## 📋 Contenu

- **Email**: chancelledanha92@gmail.com
- **WhatsApp**: +229 01 90 44 5208
- **Services**: Web, Mobile, Refonte, Maintenance
- **Formations**: Web, Mobile, Initiation, Programmation

## 🚀 Démarrage Rapide

### Installation

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Accéder à http://localhost:8080
```

### Build pour la Production

```bash
# Créer une build de production
pnpm build

# Tester localement la build
pnpm start
```

## 📚 Structure du Projet

```
.
├── client/
│   ├── pages/
│   │   ├── Index.tsx          # Page principale
│   │   └── NotFound.tsx        # Page 404
│   ├── components/
│   │   ├── Header.tsx          # Navigation
│   │   └── ui/                 # Composants réutilisables
│   ├── App.tsx                 # Routing et setup
│   └── global.css              # Styles globaux
├── server/
│   ├── index.ts                # Setup Express
│   └── routes/
│       ├── contact.ts          # API contact
│       └── demo.ts             # API démo
├── shared/
│   └── api.ts                  # Types partagés
└── public/
    └── robots.txt              # SEO
```

## 🔌 API Endpoints

### POST /api/contact
Soumettre un formulaire de contact

**Requête:**
```json
{
  "name": "Nom",
  "email": "email@example.com",
  "message": "Message"
}
```

**Réponse:**
```json
{
  "success": true,
  "message": "Message envoyé",
  "id": "timestamp-randomid"
}
```

### GET /api/submissions
Récupérer toutes les soumissions (Admin)

**Réponse:**
```json
{
  "success": true,
  "data": [...],
  "count": 5
}
```

## 🗄 Stockage des Données

Les soumissions de contact sont sauvegardées dans:
- **Fichier**: `.data/submissions.json`
- **Format**: JSON array
- **Auto-création**: Répertoire créé automatiquement au premier message

### Structure d'une soumission:
```json
{
  "id": "1234567890-abc123",
  "name": "Client",
  "email": "client@example.com",
  "message": "Message",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

## 🌐 Déploiement

### Vercel (Recommandé)

1. **Connecter le repo**
   - Aller sur [vercel.com](https://vercel.com)
   - Importer depuis GitHub
   - Vercel détecte automatiquement la config

2. **Variables d'environnement** (si nécessaire)
   - Aucune requise pour le déploiement de base

3. **Déploiement automatique**
   - Chaque `git push` déclenche un build

### Netlify

1. **Connecter le repo**
   - Aller sur [netlify.com](https://netlify.com)
   - Importer depuis GitHub

2. **Configuration**
   - **Build Command**: `pnpm build`
   - **Publish Directory**: `dist`

3. **Déployer**
   - Netlify construit et déploie automatiquement

### Déploiement Manuel

```bash
# Build
pnpm build

# Déployer le dossier 'dist'
# Utiliser un service comme Vercel, Netlify ou votre serveur
```

## ✨ Fonctionnalités de Production

### Formulaire de Contact
- Validation en temps réel
- Gestion d'erreurs complète
- Messages d'erreur en français
- Indicateur de chargement
- Confirmation de succès

### Modal Projets
- Clic sur "Voir le projet" ouvre un modal
- Affichage détaillé du projet
- Bouton WhatsApp direct
- Fermeture par Esc, clic dehors ou bouton

### Intégration WhatsApp
- Bouton flottant animé
- Messages pré-remplis
- Ouverture dans nouvel onglet
- Compatible tous les appareils

### Optimisations SEO
- Meta tags complets
- Robots.txt configuré
- Canonical URL
- Open Graph tags
- Sitemap (optionnel)

## 🔒 Sécurité

- Validation email côté serveur
- Limite de taille des messages
- Protection CORS
- Pas de données sensibles en frontend

## 📱 Responsive

- Mobile: ✅ (375px+)
- Tablet: ✅ (768px+)
- Desktop: ✅ (1024px+)
- Large: ✅ (1400px+)

## 🎨 Personnalisation

### Couleurs
Éditer `client/global.css`:
```css
--primary: 217 100% 50%;      /* Bleu principal */
--accent: 180 100% 50%;        /* Cyan secondaire */
```

### Contenu
Modifier directement dans `client/pages/Index.tsx`:
- `services` array
- `formations` array
- `projects` array
- `skills` array
- `testimonials` array

### Email et WhatsApp
Mettre à jour les constantes en haut de `client/pages/Index.tsx`:
```typescript
const WHATSAPP_NUMBER = "2290190445208";
```

## 🐛 Troubleshooting

### Le formulaire ne s'envoie pas
- Vérifier la connexion réseau
- Vérifier les erreurs dans la console
- S'assurer que le backend est en ligne

### Images non chargées
- Vérifier les URLs Unsplash
- Vérifier la connexion internet

### Modal ne s'ouvre pas
- Vérifier la console pour les erreurs
- Vérifier que JavaScript est activé

## 📞 Support et Contact

- **Email**: chancelledanha92@gmail.com
- **WhatsApp**: https://wa.me/2290190445208
- **Services**: Développement web, applications mobiles, formations

## 📄 Licence

Tous droits réservés © 2024 Chancelle Danha

## ✅ Checklist Pré-Déploiement

- ✅ Email: chancelledanha92@gmail.com
- ✅ WhatsApp: +229 01 90 44 5208
- ✅ Formulaire de contact: Fonctionnel
- ✅ Modal projets: Fonctionnel
- ✅ Animations: Chargées
- ✅ Mobile responsive: Testé
- ✅ SEO: Optimisé
- ✅ .gitignore: Configuré
- ✅ Pas de données sensibles en clair

## 🎉 Prêt pour la Production!

Ce portfolio est entièrement prêt à être mis en ligne. Déployer sur Vercel ou Netlify et partager!

---

**Status**: ✅ Production Ready
**Last Updated**: 2024
**Version**: 1.0
