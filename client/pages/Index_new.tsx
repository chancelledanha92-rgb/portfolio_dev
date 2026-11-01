import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { ContactFormResponse } from "@shared/api";
import {
  Code2,
  Smartphone,
  Zap,
  Users,
  Star,
  Mail,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  BookOpen,
  Zap as ZapIcon,
  Clock,
  AlertCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "2290190445208";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_SERVICE_MESSAGE =
  "Bonjour, je suis intéressé par vos services";
const WHATSAPP_FORMATION_MESSAGE = "Bonjour, je veux m'inscrire à cette formation";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeNavSection, setActiveNavSection] = useState<string>("hero");

  // Handle scroll to update active nav section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "formations", "projects", "skills", "testimonials", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveNavSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) {
      setFormError(null);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ContactFormResponse;

      if (data.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        setFormError(data.message || "Une erreur est survenue");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError(
        "Erreur réseau. Veuillez vérifier votre connexion et réessayer."
      );
    } finally {
      setFormLoading(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Code2,
      title: "Création de sites web professionnels",
      description:
        "Sites web modernes et performants pour établir votre présence en ligne",
    },
    {
      icon: Smartphone,
      title: "Développement d'applications mobiles",
      description:
        "Applications mobiles professionnelles avec Flutter et React Native",
    },
    {
      icon: Zap,
      title: "Refonte de sites web",
      description:
        "Modernisez votre présence web avec les dernières technologies",
    },
    {
      icon: Users,
      title: "Maintenance et optimisation",
      description:
        "Suivi technique continu et optimisation de vos applications",
    },
  ];

  const formations = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Maîtrisez HTML, CSS, JavaScript et React",
      level: "Débutant à Intermédiaire",
      duration: "8 semaines",
      topics: ["HTML & CSS", "JavaScript", "React", "Projets réels"],
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Créez des applications mobiles avec Flutter",
      level: "Débutant à Intermédiaire",
      duration: "10 semaines",
      topics: ["Dart basics", "Flutter widgets", "APIs", "Firebase"],
    },
    {
      icon: BookOpen,
      title: "Initiation à l'informatique",
      description: "Les bases essentielles de l'informatique et du web",
      level: "Débutant",
      duration: "4 semaines",
      topics: ["Fondamentaux", "Internet basics", "Navigation", "Outils"],
    },
    {
      icon: ZapIcon,
      title: "Programmation pour débutants",
      description: "Débuter la programmation avec les bons fondamentaux",
      level: "Débutant",
      duration: "6 semaines",
      topics: ["Logique", "Variables", "Fonctions", "Bases de données"],
    },
  ];

  const projects = [
    {
      title: "Plateforme d'e-commerce",
      description:
        "Plateforme de vente en ligne complète avec paiement intégré",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1460925895917-adf4e565db17?w=600&h=400&fit=crop",
    },
    {
      title: "Application SaaS",
      description: "Plateforme de gestion de projets en temps réel",
      tech: ["React", "Node.js", "Firebase", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    },
    {
      title: "Application Mobile",
      description: "Application mobile de suivi avec Flutter",
      tech: ["Flutter", "Firebase", "Dart", "REST API"],
      image:
        "https://images.unsplash.com/photo-1517694712278-c5bcc5c89c94?w=600&h=400&fit=crop",
    },
    {
      title: "Système de gestion",
      description: "Système complet de gestion avec tableau de bord",
      tech: ["React", "Node.js", "MongoDB", "D3.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Portail client",
      description: "Portail web pour gérer les services clients",
      tech: ["React", "Express", "PostgreSQL", "JWT"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      title: "Application de messagerie",
      description: "Application de chat en temps réel avec notifications",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST API", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Mobile",
      items: ["Flutter", "Dart", "Firebase", "State Management", "APIs"],
    },
    {
      category: "Outils",
      items: ["Git", "GitHub", "Docker", "Vercel", "Netlify", "VS Code"],
    },
  ];

  const testimonials = [
    {
      name: "Amadou Traoré",
      company: "TechAfrica Sarl",
      content:
        "Développeur exceptionnel ! A transformé notre vision en réalité. Très professionnel et réactif.",
      rating: 5,
    },
    {
      name: "Fatoumata Diallo",
      company: "Commerce Digital",
      content:
        "La meilleure décision que nous ayons prise. Code de qualité et respect des délais impeccable !",
      rating: 5,
    },
    {
      name: "Kofi Mensah",
      company: "Solutions Numériques",
      content:
        "Quelqu'un à l'écoute qui comprend vraiment les besoins. Je recommande vivement !",
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
    <div className="w-full bg-white flex flex-col min-h-screen">
      <Header />

      {/* Sticky Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="section-container">
          <div className="flex overflow-x-auto gap-2 py-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${
                  activeNavSection === item.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              style={{ animation: "float 4s ease-in-out infinite" }}
            ></div>
          </div>
          <div className="section-container text-center relative z-10">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Je crée des applications{" "}
                <span className="gradient-text">web et mobiles modernes</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Boostez votre business avec des solutions digitales
                professionnelles
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Voir mes services
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_SERVICE_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <MessageCircle size={20} />
                  Contactez-moi sur WhatsApp
                </a>
              </div>
            </div>

            {/* Floating Element */}
            <div className="mt-16 relative h-64 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 rounded-3xl blur-3xl animate-float"></div>
              <div className="relative text-6xl md:text-8xl">💻</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-white">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Solutions complètes pour tous vos besoins digitaux
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 border-2 border-gray-100 rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="mb-4 w-14 h-14 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Formations Section */}
        <section id="formations" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Formations</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Développez vos compétences en informatique avec nos formations
                professionnelles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {formations.map((formation, idx) => {
                const Icon = formation.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={28} className="text-white" />
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-primary text-xs font-semibold rounded-full">
                        {formation.level}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{formation.title}</h3>
                    <p className="text-gray-600 mb-4">{formation.description}</p>

                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Clock size={16} className="text-primary" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formation.topics.map((topic, topicIdx) => (
                          <span
                            key={topicIdx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(`${WHATSAPP_FORMATION_MESSAGE} : ${formation.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      S'inscrire sur WhatsApp
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Projets</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Découvrez quelques-uns de mes projets les plus remarquables
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Voir le projet
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32 bg-white">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Compétences</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Technologies et outils que je maîtrise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-cyan-400 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
          <div className="section-container">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Témoignages</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ce que mes clients pensent de mon travail
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 md:py-32 bg-gradient-to-br from-primary to-blue-700"
        >
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Parlons de votre projet
                </h2>
                <p className="text-xl text-blue-100">
                  Je suis disponible pour discuter de vos idées et créer la
                  solution parfaite
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in-up">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mb-4 text-4xl">✅</div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Message envoyé!
                    </h3>
                    <p className="text-gray-600">
                      Merci pour votre message. Je vous répondrai dans les plus
                      brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {formError && (
                      <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3">
                        <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-red-800">{formError}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Votre nom
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        disabled={formLoading}
                        required
                        className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors disabled:bg-gray-100"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Votre email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        disabled={formLoading}
                        required
                        className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors disabled:bg-gray-100"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Votre message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        disabled={formLoading}
                        required
                        rows={5}
                        className="w-full px-6 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none disabled:bg-gray-100"
                        placeholder="Décrivez votre projet..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formLoading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        "Envoyer le message"
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <a
                    href="mailto:chancelledanha92@gmail.com"
                    className="flex items-center gap-4 p-4 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">chancelledanha92@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 hover:bg-green-50 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <MessageCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+229 01 90 44 5208</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 bg-white rounded-t-2xl">
              <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="mb-6 rounded-xl overflow-hidden h-64 md:h-80">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{selectedProject.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-100 text-primary font-medium rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Caractéristiques principales</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-gray-700">Interface moderne et intuitive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-gray-700">Performance optimisée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-gray-700">Responsive design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span className="text-gray-700">Code professionnel et maintenable</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Bonjour, je suis intéressé par le projet "${selectedProject.title}"`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Discuter du projet
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={`${WHATSAPP_URL}?text=${encodeURIComponent(WHATSAPP_SERVICE_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 z-40 animate-float"
      >
        <MessageCircle size={28} />
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Portfolio</h3>
              <p className="text-gray-400">
                Solutions digitales modernes pour votre business
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-white transition cursor-pointer bg-none border-none text-left">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("formations")} className="hover:text-white transition cursor-pointer bg-none border-none text-left">
                    Formations
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("projects")} className="hover:text-white transition cursor-pointer bg-none border-none text-left">
                    Projets
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition cursor-pointer bg-none border-none text-left">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="mailto:chancelledanha92@gmail.com"
                    className="hover:text-white transition"
                  >
                    chancelledanha92@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Mon Portfolio. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
