import { useEffect, useState } from 'react'
import './App.css'
import { OperationsSaaSDashboard, FieldServiceDemo, APIArchitectureDemo } from './components/ProjectDemo'

function App() {
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('fr')
  const [activeProjectDemo, setActiveProjectDemo] = useState(0)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const savedLanguage = localStorage.getItem('language')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light')
    const nextLanguage = savedLanguage || 'fr'
    setTheme(nextTheme)
    setLanguage(nextLanguage)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  const toggleLanguage = () => {
    const nextLanguage = language === 'fr' ? 'en' : 'fr'
    setLanguage(nextLanguage)
    localStorage.setItem('language', nextLanguage)
  }

  const content = {
    fr: {
      nav: ['À propos', 'Compétences', 'Projets', 'Services', 'Parcours', 'Contact'],
      role: 'Software Engineer · Full-Stack · Mobile · Backend',
      heroTitle:
        'Je conçois des produits digitaux scalables qui génèrent des résultats business mesurables.',
      heroLead:
        'J'aide les entreprises à transformer des enjeux métier complexes en applications web, mobiles et backend sécurisées, performantes et prêtes à évoluer.',
      ctaPrimary: 'Démarrer un projet',
      ctaSecondary: 'Voir les cas clients',
      demoTitle: 'Démo interactive du projet',
      metrics: [
        { label: 'Focus principal', value: 'Impact business' },
        { label: 'Approche', value: 'Architecture + Produit' },
        { label: 'Priorités', value: 'Sécurité · Performance' },
      ],
      aboutTitle: 'À propos',
      aboutText:
        'Je suis Rayen Houaidi, Software Engineer orienté valeur client. Mon travail consiste à aligner stratégie produit, architecture technique et exécution rapide pour livrer des plateformes qui améliorent les opérations, réduisent les risques et accélèrent la croissance.',
      skillsTitle: 'Compétences techniques',
      skills: {
        first: 'Frontend & Mobile',
        second: 'Backend & APIs',
        third: 'Data & Bases de données',
        fourth: 'Cloud & Delivery',
      },
      projectsTitle: 'Projets phares',
      problem: 'Problème',
      solution: 'Solution',
      tech: 'Technologies',
      results: 'Résultats',
      servicesTitle: 'Services proposés',
      services: [
        {
          title: 'Développement produit sur-mesure',
          text: 'Conception et livraison d’applications web, mobile et backend alignées à vos objectifs business.',
        },
        {
          title: 'Architecture API & Scalabilité',
          text: 'Structuration de systèmes robustes, sécurisés et prêts pour la montée en charge.',
        },
        {
          title: 'Modernisation & Performance',
          text: 'Refonte technique, optimisation de la performance et réduction de la dette technique.',
        },
      ],
      experienceTitle: 'Expérience & formation',
      contactTitle: 'Contact & Call-To-Action',
      contactText:
        'Vous lancez un produit, modernisez une plateforme ou renforcez votre backend ? Parlons de vos objectifs et construisons une solution orientée résultats.',
      contactButton: 'Réserver un échange',
      languageButton: 'EN',
      themeButtonDark: 'Mode clair',
      themeButtonLight: 'Mode sombre',
    },
    en: {
      nav: ['About', 'Skills', 'Projects', 'Services', 'Experience', 'Contact'],
      role: 'Software Engineer · Full-Stack · Mobile · Backend',
      heroTitle: 'I design scalable digital products that drive measurable business outcomes.',
      heroLead:
        'I help companies turn complex business challenges into secure, high-performance web, mobile, and backend solutions built to scale.',
      ctaPrimary: 'Start a Project',
      ctaSecondary: 'View Case Studies',
      demoTitle: 'Interactive Project Demo',
      metrics: [
        { label: 'Core focus', value: 'Business impact' },
        { label: 'Approach', value: 'Architecture + Product' },
        { label: 'Priorities', value: 'Security · Performance' },
      ],
      aboutTitle: 'About Me',
      aboutText:
        'I am Rayen Houaidi, a Software Engineer focused on client value. I align product strategy, technical architecture, and fast execution to deliver platforms that improve operations, reduce risk, and accelerate growth.',
      skillsTitle: 'Technical Skills',
      skills: {
        first: 'Frontend & Mobile',
        second: 'Backend & APIs',
        third: 'Data & Databases',
        fourth: 'Cloud & Delivery',
      },
      projectsTitle: 'Featured Projects',
      problem: 'Problem',
      solution: 'Solution',
      tech: 'Tech',
      results: 'Results',
      servicesTitle: 'Services Offered',
      services: [
        {
          title: 'Custom Product Development',
          text: 'Design and delivery of web, mobile, and backend solutions aligned with business goals.',
        },
        {
          title: 'API Architecture & Scalability',
          text: 'Engineering robust, secure systems ready for long-term growth and scaling.',
        },
        {
          title: 'Modernization & Performance',
          text: 'Technical revamp, performance optimization, and debt reduction for sustainable delivery.',
        },
      ],
      experienceTitle: 'Experience & Education',
      contactTitle: 'Contact & Call-To-Action',
      contactText:
        'Launching a product, modernizing a platform, or strengthening your backend? Let’s discuss your goals and build a results-driven solution.',
      contactButton: 'Book a Discovery Call',
      languageButton: 'FR',
      themeButtonDark: 'Light mode',
      themeButtonLight: 'Dark mode',
    },
  }

  const skillsByDomain = {
    first: ['Angular', 'Flutter', 'Responsive UI', 'Design Systems', 'Web Performance'],
    second: ['Node.js', 'Express', 'Spring Boot', 'Django', 'REST API Design'],
    third: ['MongoDB', 'MySQL', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
    fourth: ['Docker', 'Git', 'Linux', 'CI/CD Ready Delivery', 'Production Monitoring'],
  }

  const projects = [
    {
      title: 'Enterprise Operations SaaS Platform',
      problem: {
        fr: 'Une PME multi-sites gérait ses opérations manuellement, causant erreurs, retards et manque de visibilité.',
        en: 'A multi-site SME managed operations manually, causing errors, delays, and weak visibility.',
      },
      solution: {
        fr: 'Conception d’une plateforme SaaS modulaire avec RBAC, dashboards temps réel et automatisation des workflows.',
        en: 'Designed a modular SaaS platform with RBAC, real-time dashboards, and automated workflows.',
      },
      tech: 'Angular, Node.js, Express, PostgreSQL, Docker',
      results: {
        fr: '42% de réduction du temps de traitement et meilleure prise de décision grâce aux KPI centralisés.',
        en: '42% reduction in processing time and better decision-making through centralized KPIs.',
      },
    },
    {
      title: 'Mobile Field Service Application',
      problem: {
        fr: 'Les équipes terrain perdaient du temps sur la collecte d’information et la coordination des interventions.',
        en: 'Field teams were losing time on data collection and intervention coordination.',
      },
      solution: {
        fr: 'Création d’une app Flutter reliée à un backend sécurisé avec synchronisation temps réel et notifications.',
        en: 'Built a Flutter app connected to a secure backend with real-time sync and notifications.',
      },
      tech: 'Flutter, Node.js, WebSocket, MongoDB',
      results: {
        fr: '35% d’interventions en retard en moins et amélioration nette de la qualité de service.',
        en: '35% fewer delayed interventions and a clear improvement in service quality.',
      },
    },
    {
      title: 'Secure API Multi-Service Backbone',
      problem: {
        fr: 'Un SI multi-services souffrait de latence, d’accès non maîtrisés et d’un manque de traçabilité.',
        en: 'A multi-service system suffered from latency, uncontrolled access, and low traceability.',
      },
      solution: {
        fr: 'Mise en place d’une architecture API sécurisée avec authentification forte, logs centralisés et rate limiting.',
        en: 'Implemented a secure API architecture with strong authentication, centralized logs, and rate limiting.',
      },
      tech: 'Spring Boot, Django, PostgreSQL, Docker, Linux',
      results: {
        fr: 'Baisse des incidents critiques et amélioration de la stabilité sous montée en charge.',
        en: 'Reduced critical incidents and improved stability under increased load.',
      },
    },
  ]

  const experienceItems = {
    fr: [
      {
        title: 'Software Engineer · Freelance / Product Projects',
        text: 'Conception et livraison de solutions full-stack, mobile et API-first pour des besoins business réels.',
      },
      {
        title: 'Formation ingénierie logicielle',
        text: 'Parcours orienté backend, architecture de systèmes et pratiques de livraison professionnelle.',
      },
    ],
    en: [
      {
        title: 'Software Engineer · Freelance / Product Projects',
        text: 'Designed and delivered full-stack, mobile, and API-first solutions for real business challenges.',
      },
      {
        title: 'Software Engineering Background',
        text: 'Training focused on backend architecture, scalable systems, and professional delivery practices.',
      },
    ],
  }

  const activeContent = content[language]

  return (
    <div className="portfolio">
      <div className="background-effects" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
      </div>
      <header className="topbar">
        <div className="brand">Rayen Houaidi</div>
        <nav>
          <a href="#about">{activeContent.nav[0]}</a>
          <a href="#skills">{activeContent.nav[1]}</a>
          <a href="#projects">{activeContent.nav[2]}</a>
          <a href="#services">{activeContent.nav[3]}</a>
          <a href="#experience">{activeContent.nav[4]}</a>
          <a href="#contact">{activeContent.nav[5]}</a>
        </nav>
        <div className="controls">
          <button className="language-toggle" onClick={toggleLanguage}>
            {activeContent.languageButton}
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? activeContent.themeButtonDark : activeContent.themeButtonLight}
          </button>
        </div>
      </header>

      <main className="content">
        <section className="hero section">
          <p className="eyebrow">{activeContent.role}</p>
          <h1 className="hero-title">{activeContent.heroTitle}</h1>
          <p className="lead">{activeContent.heroLead}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              {activeContent.ctaPrimary}
            </a>
            <a className="btn btn-secondary" href="#projects">
              {activeContent.ctaSecondary}
            </a>
          </div>
          <div className="metrics-grid">
            {activeContent.metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <p className="metric-label">{metric.label}</p>
                <p className="metric-value">{metric.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2>{activeContent.aboutTitle}</h2>
          <p>{activeContent.aboutText}</p>
        </section>

        <section id="skills" className="section">
          <h2>{activeContent.skillsTitle}</h2>
          <div className="skills-grid">
            <article className="card">
              <h3>{activeContent.skills.first}</h3>
              <ul>
                {skillsByDomain.first.map((skillItem) => (
                  <li key={skillItem}>{skillItem}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3>{activeContent.skills.second}</h3>
              <ul>
                {skillsByDomain.second.map((skillItem) => (
                  <li key={skillItem}>{skillItem}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3>{activeContent.skills.third}</h3>
              <ul>
                {skillsByDomain.third.map((skillItem) => (
                  <li key={skillItem}>{skillItem}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3>{activeContent.skills.fourth}</h3>
              <ul>
                {skillsByDomain.fourth.map((skillItem) => (
                  <li key={skillItem}>{skillItem}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>{activeContent.projectsTitle}</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <div className="tech-tags">
                  {project.tech.split(',').map((techItem) => (
                    <span key={`${project.title}-${techItem.trim()}`} className="tech-tag">
                      {techItem.trim()}
                    </span>
                  ))}
                </div>
                <p>
                  <strong>{activeContent.problem}:</strong> {project.problem[language]}
                </p>
                <p>
                  <strong>{activeContent.solution}:</strong> {project.solution[language]}
                </p>
                <p>
                  <strong>{activeContent.results}:</strong> {project.results[language]}
                </p>
                <button
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem', width: '100%' }}
                  onClick={() => setActiveProjectDemo(idx)}
                >
                  {activeContent.demoTitle}
                </button>
              </article>
            ))}
          </div>

          {/* Project Demos */}
          <div style={{ marginTop: '3rem' }}>
            {activeProjectDemo === 0 && (
              <>
                <h3 style={{ 
                  marginBottom: '1.5rem', 
                  background: 'linear-gradient(135deg, #00d9ff 0%, #7c5cff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Enterprise Operations SaaS - Live Dashboard Preview
                </h3>
                <OperationsSaaSDashboard />
              </>
            )}
            {activeProjectDemo === 1 && (
              <>
                <h3 style={{ 
                  marginBottom: '1.5rem', 
                  background: 'linear-gradient(135deg, #7c5cff 0%, #ffd700 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Mobile Field Service - Real-time Sync Demo
                </h3>
                <FieldServiceDemo />
              </>
            )}
            {activeProjectDemo === 2 && (
              <>
                <h3 style={{ 
                  marginBottom: '1.5rem', 
                  background: 'linear-gradient(135deg, #ffd700 0%, #00d9ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Secure API - Architecture & Performance
                </h3>
                <APIArchitectureDemo />
              </>
            )}
          </div>
        </section>

        <section id="services" className="section">
          <h2>{activeContent.servicesTitle}</h2>
          <div className="services-grid">
            {activeContent.services.map((serviceItem) => (
              <article key={serviceItem.title} className="card">
                <h3>{serviceItem.title}</h3>
                <p>{serviceItem.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>{activeContent.experienceTitle}</h2>
          <div className="timeline">
            {experienceItems[language].map((experienceItem) => (
              <article key={experienceItem.title} className="timeline-item">
                <h3>{experienceItem.title}</h3>
                <p>{experienceItem.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>{activeContent.contactTitle}</h2>
          <p>{activeContent.contactText}</p>
          <a className="btn btn-primary" href="mailto:rayen.houaidi.dev@gmail.com">
            {activeContent.contactButton}
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
