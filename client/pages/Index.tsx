import { useState } from "react";
import Header from "@/components/Header";
import { ContactFormResponse } from "@shared/api";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  LayoutTemplate,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Star,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "2290190445208";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_SERVICE_MESSAGE = "Bonjour, je suis intéressé par vos services";
const WHATSAPP_FORMATION_MESSAGE = "Bonjour, je veux m'inscrire à cette formation";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export default function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ContactFormResponse;

      if (data.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        setFormError(data.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError("Erreur réseau. Veuillez vérifier votre connexion et réessayer.");
    } finally {
      setFormLoading(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const services = [
    {
      icon: Code2,
      title: "Création de sites web",
      description: "Des sites modernes, rapides et pensés pour convertir vos visiteurs en clients.",
    },
    {
      icon: MonitorSmartphone,
      title: "Applications mobiles",
      description: "Des applications fluides et professionnelles pour iOS et Android.",
    },
    {
      icon: LayoutTemplate,
      title: "Refonte digitale",
      description: "Modernisez votre présence en ligne avec une identité visuelle claire et performante.",
    },
    {
      icon: Rocket,
      title: "Optimisation & maintenance",
      description: "Suivi technique, corrections rapides et amélioration continue de vos outils.",
    },
  ];

  const formations = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Maîtrisez HTML, CSS, JavaScript et React pour créer des interfaces professionnelles.",
      level: "Débutant à Intermédiaire",
      duration: "8 semaines",
      topics: ["HTML & CSS", "JavaScript", "React", "Projets réels"],
    },
    {
      icon: MonitorSmartphone,
      title: "Développement Mobile",
      description: "Créez des applications mobiles avec Flutter et des workflows modernes.",
      level: "Débutant à Intermédiaire",
      duration: "10 semaines",
      topics: ["Dart", "Flutter", "API", "Firebase"],
    },
    {
      icon: BookOpen,
      title: "Initiation à l'informatique",
      description: "Les bases essentielles pour comprendre le monde digital et naviguer sereinement.",
      level: "Débutant",
      duration: "4 semaines",
      topics: ["Fondamentaux", "Internet", "Navigation", "Outils"],
    },
    {
      icon: Zap,
      title: "Programmation pour débutants",
      description: "Apprenez les notions clés de la logique informatique et de la programmation.",
      level: "Débutant",
      duration: "6 semaines",
      topics: ["Logique", "Variables", "Fonctions", "Bases de données"],
    },
  ];

  const projects: Project[] = [
    {
      title: "Plateforme d'e-commerce",
      description: "Boutique en ligne complète avec paiement intégré, catalogue et gestion clientèle.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db17?w=600&h=400&fit=crop",
    },
    {
      title: "Application SaaS",
      description: "Tableau de bord de gestion de projets avec suivi des performances en temps réel.",
      tech: ["React", "Node.js", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    },
    {
      title: "Application mobile",
      description: "Application de suivi utile, simple et performante pour les utilisateurs quotidiens.",
      tech: ["Flutter", "Firebase", "Dart", "REST API"],
      image: "https://images.unsplash.com/photo-1517694712278-c5bcc5c89c94?w=600&h=400&fit=crop",
    },
    {
      title: "Système de gestion",
      description: "Outil de gestion complet avec statistiques, reporting et automatisations.",
      tech: ["React", "Node.js", "MongoDB", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Portail client",
      description: "Portail web pensé pour faciliter les demandes, la communication et le service client.",
      tech: ["React", "Express", "PostgreSQL", "JWT"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      title: "Application de messagerie",
      description: "Plateforme de chat moderne avec notifications et échanges en temps réel.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Express", "REST API", "PostgreSQL", "MongoDB"] },
    { category: "Mobile", items: ["Flutter", "Dart", "Firebase", "State Management", "APIs"] },
    { category: "Outils", items: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "VS Code"] },
  ];

  const testimonials = [
    {
      name: "Amadou Traoré",
      company: "TechAfrica Sarl",
      content: "Développeur exceptionnel ! Il a transformé notre vision en réalité avec beaucoup de professionnalisme.",
      rating: 5,
    },
    {
      name: "Fatoumata Diallo",
      company: "Commerce Digital",
      content: "La meilleure décision que nous ayons prise. Code de qualité, communication claire et respect des délais.",
      rating: 5,
    },
    {
      name: "Kofi Mensah",
      company: "Solutions Numériques",
      content: "Très à l'écoute, réactif et très compétent. Je recommande vivement son travail.",
      rating: 5,
    },
  ];

  const navigationItems = [
    { id: "hero", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "formations", label: "Formations" },
    { id: "projects", label: "Projets" },
    { id: "skills", label: "Compétences" },
    { id: "testimonials", label: "Témoignages" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="overflow-hidden">
        <section id="hero" className="relative isolate overflow-hidden bg-slate-950 pt-28 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.3),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.24),_transparent_30%)]" />
          <div className="section-container relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200">
                  <CheckCircle2 size={16} className="text-sky-300" />
                  Disponible pour nouveaux projets
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-2xl text-4xl font-black leading-tight text-white md:text-5xl lg:text-7xl">
                    Je crée des solutions
                    <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                      {" "}web & mobile
                    </span>
                    qui font grandir votre business.
                  </h1>

                  <p className="max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
                    Je conçois des interfaces modernes, performantes et utiles pour aider les entreprises à se distinguer numériquement.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:translate-y-[-1px] hover:shadow-xl hover:shadow-sky-400/40"
                  >
                    Voir mes services
                    <ArrowRight size={18} />
                  </button>

                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_SERVICE_MESSAGE)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-400/40 bg-green-500/10 px-6 py-3.5 font-semibold text-green-200 transition hover:bg-green-500/20"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>

                <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-300">
                  <div>
                    <span className="block text-2xl font-bold text-white">+4 ans</span>
                    <span>expérience</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-white">20+</span>
                    <span>projets</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-white">100%</span>
                    <span>à l’écoute</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-sky-500/30 via-blue-500/10 to-cyan-400/25 blur-2xl" />
                <div className="relative rounded-[2rem] border border-slate-700 bg-slate-900/80 p-6 shadow-2xl shadow-sky-950/40 backdrop-blur">
                  <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950 p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Portfolio</p>
                        <h2 className="text-xl font-semibold text-white">Chancelle Danha</h2>
                      </div>
                      <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                        En ligne
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm text-slate-400">Design & UX</span>
                          <span className="text-sm font-semibold text-sky-300">95%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800">
                          <div className="h-2 w-[95%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm text-slate-400">Performance</span>
                          <span className="text-sm font-semibold text-sky-300">92%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800">
                          <div className="h-2 w-[92%] rounded-full bg-gradient-to-r from-blue-400 to-indigo-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                          <div className="mb-2 text-2xl font-bold text-white">24h</div>
                          <div className="text-xs text-slate-400">Temps de réponse</div>
                        </div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                          <div className="mb-2 text-2xl font-bold text-white">100%</div>
                          <div className="text-xs text-slate-400">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-900 py-24">
          <div className="section-container">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Services</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Des solutions digitales qui créent de la valeur.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="group rounded-3xl border border-slate-800 bg-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">
                    <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-3 text-white shadow-lg shadow-sky-500/20">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-base leading-7 text-slate-300">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="formations" className="bg-slate-950 py-24">
          <div className="section-container">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Formations</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Apprendre le numérique avec une vraie progression.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {formations.map((formation, idx) => {
                const Icon = formation.icon;
                return (
                  <div key={idx} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/10">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 p-3 text-white">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{formation.title}</h3>
                        </div>
                      </div>
                      <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
                        {formation.level}
                      </span>
                    </div>

                    <p className="mb-5 text-slate-300">{formation.description}</p>

                    <div className="mb-5 space-y-3 text-sm text-slate-300">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-sky-300" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formation.topics.map((topic, topicIdx) => (
                          <span key={topicIdx} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(`${WHATSAPP_FORMATION_MESSAGE} : ${formation.title}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-400"
                    >
                      <MessageCircle size={18} />
                      S'inscrire
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-900 py-24">
          <div className="section-container">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Projets</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Quelques réalisations récentes.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, idx) => (
                <article key={idx} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-sky-500/10">
                  <div className="relative h-52 overflow-hidden">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                    <p className="mb-4 text-slate-300">{project.description}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tech.map((tech, techIdx) => (
                        <span key={techIdx} className="rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sky-500/50 bg-sky-500/10 px-4 py-3 font-semibold text-sky-100 transition hover:bg-sky-500/20"
                    >
                      Voir le projet
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-slate-950 py-24">
          <div className="section-container">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Compétences</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Des compétences travaillées et adaptées à vos besoins.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                  <h3 className="mb-5 text-xl font-bold text-sky-300">{skill.category}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-3 text-slate-200">
                        <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-slate-900 py-24">
          <div className="section-container">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Témoignages</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Ce que disent mes clients.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                  <div className="mb-5 flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-6 text-lg leading-8 text-slate-200">“{testimonial.content}”</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-sky-600 via-blue-700 to-slate-950 py-24">
          <div className="section-container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Contact</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Parlons de votre prochain projet.</h2>
              <p className="mt-4 text-lg text-sky-100/80">Je suis disponible pour écouter vos idées et vous proposer une solution claire, moderne et performante.</p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-slate-200/10 bg-white/5 p-6 backdrop-blur-sm md:p-10">
              {formSubmitted ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-emerald-500/20 p-3 text-emerald-200">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message envoyé !</h3>
                  <p className="mt-3 text-sky-100/80">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {formError && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-400/50 bg-red-500/10 p-4 text-red-100">
                      <AlertCircle className="mt-0.5 shrink-0" size={18} />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-sky-50">Votre nom</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        disabled={formLoading}
                        required
                        className="w-full rounded-xl border border-slate-600 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-sky-50">Votre email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        disabled={formLoading}
                        required
                        className="w-full rounded-xl border border-slate-600 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-sky-50">Votre message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      disabled={formLoading}
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-slate-600 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-sky-700 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:bg-slate-200"
                  >
                    {formLoading ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      "Envoyer le message"
                    )}
                  </button>
                </form>
              )}

              <div className="mt-10 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-2">
                <a href="mailto:chancelledanha92@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <div className="rounded-full bg-sky-500/20 p-3 text-sky-100">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-sky-100/80">chancelledanha92@gmail.com</p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="rounded-full bg-green-500/20 p-3 text-green-200">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-sky-100/80">+229 01 90 44 5208</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="rounded-full p-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto p-6">
              <div className="mb-6 overflow-hidden rounded-2xl">
                <img src={selectedProject.image} alt={selectedProject.title} className="h-72 w-full object-cover md:h-80" />
              </div>

              <p className="mb-6 text-lg leading-8 text-slate-200">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="mb-3 text-lg font-bold text-white">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="rounded-full bg-sky-500/10 px-3 py-1.5 text-sm font-medium text-sky-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-lg font-bold text-white">Points forts</h4>
                <ul className="space-y-2 text-slate-200">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-sky-300" size={18} /> Interface moderne et intuitive</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-sky-300" size={18} /> Performance optimisée</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-sky-300" size={18} /> Design responsive</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 text-sky-300" size={18} /> Code professionnel et maintenable</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Bonjour, je suis intéressé par le projet "${selectedProject.title}"`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-400"
                >
                  <MessageCircle size={18} />
                  Discuter du projet
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <a
        href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_SERVICE_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-7 right-7 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-400 text-white shadow-2xl shadow-green-500/40 transition hover:scale-105"
        aria-label="Contactez-moi sur WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <footer className="border-t border-slate-800 bg-slate-950 py-10">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-2xl font-bold text-white">Portfolio</h3>
              <p className="text-slate-400">Solutions digitales modernes pour votre business.</p>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Navigation</h4>
              <ul className="space-y-2 text-slate-400">
                {navigationItems.slice(1, 5).map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="text-left transition hover:text-sky-300">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="mailto:chancelledanha92@gmail.com" className="transition hover:text-sky-300">chancelledanha92@gmail.com</a></li>
                <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition hover:text-sky-300">WhatsApp</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
            © 2026 Mon Portfolio. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
