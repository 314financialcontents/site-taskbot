import type { RouteKey } from './routes';

// SEO configuration for each page
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
}

type Language = 'es' | 'en';

export const pageMeta: Record<Language, { [key in RouteKey]: PageMeta }> = {
  es: {
  'home': {
    title: 'Taskbot.pro - Automatización Inteligente con IA y Robótica',
    description: 'Transforma tu conocimiento en ejecución automatizada. Agentes de IA y robótica colaborativa que automatizan tus procesos digitales y físicos con validaciones automáticas y trazabilidad completa.',
    keywords: 'automatización IA, agentes inteligentes, robótica colaborativa, hiperautomatización, RPA, procesos empresariales',
  },
  'que-hacemos': {
    title: 'Qué hacemos - Servicios de Automatización - Taskbot.pro',
    description: 'Hiperautomatización especializada para empresas. Creamos agentes de IA personalizados con guardarraíles, validaciones y trazabilidad completa. Sin caja negra.',
    keywords: 'servicios automatización, agentes IA personalizados, guardarraíles IA, validaciones automáticas, trazabilidad',
  },
  'como-lo-hacemos': {
    title: 'Cómo lo hacemos - Metodología de Automatización - Taskbot.pro',
    description: 'Proceso estructurado en 4 fases: análisis, diseño del agente, configuración y mejora continua. De piloto a producción en 4-8 semanas.',
    keywords: 'metodología automatización, implementación IA, proceso automatización, despliegue controlado',
  },
  'sobre-taskbot': {
    title: 'Sobre Taskbot - Equipo y Visión - Taskbot.pro',
    description: 'Equipo especializado en automatización con IA y robótica. Convertimos el know-how empresarial en ejecución autónoma con transparencia y activos transferibles.',
    keywords: 'sobre taskbot, equipo automatización, visión empresa, especialistas IA',
  },
  'contacto': {
    title: 'Contacto - Hablemos de tu Proyecto - Taskbot.pro',
    description: '¿Tienes un proceso repetitivo que podría automatizarse? Envíanos un email y analizaremos si es candidato para automatización con agentes de IA.',
    keywords: 'contacto taskbot, consulta automatización, análisis proceso',
  },
  'blog': {
    title: 'Blog - Insights sobre Automatización e IA - Taskbot.pro',
    description: 'Guías prácticas, tendencias y casos de éxito sobre automatización inteligente, agentes de IA, robótica y hiperautomatización para empresas.',
    keywords: 'blog automatización, guías IA, tendencias automatización, casos de éxito',
  },
  'blog/robotica-hiperautomatizacion': {
    title: 'Robótica e Hiperautomatización - Blog - Taskbot.pro',
    description: 'Cuando tus procesos digitales necesitan manos y sensores. Cómo convergen robots colaborativos, sensores IoT y agentes de IA.',
    keywords: 'robótica colaborativa, hiperautomatización, sensores IoT, integración hardware',
  },
  'blog/logica-semantica': {
    title: 'Lógica Semántica en Automatización - Blog - Taskbot.pro',
    description: 'Cómo la semántica mejora la automatización empresarial y permite que los agentes de IA entiendan el contexto de negocio.',
    keywords: 'lógica semántica, ontologías empresariales, modelos de dominio, IA contextual',
  },
  'blog/semantica-empresa': {
    title: 'Semántica en la Empresa - Blog - Taskbot.pro',
    description: 'Aplicación práctica de semántica empresarial para mejorar la interoperabilidad y automatización de procesos.',
    keywords: 'semántica empresarial, interoperabilidad, automatización procesos, integración sistemas',
  },
  'blog/guardarrailes-ia-guia-practica': {
    title: 'Guardarraíles de IA - Guía Práctica - Blog - Taskbot.pro',
    description: 'Guía práctica paso a paso para implementar guardarraíles operativos en sistemas de IA empresarial. Control, validación y seguridad.',
    keywords: 'guardarraíles IA, validaciones IA, seguridad IA, control automatización',
  },
  'aviso-legal': {
    title: 'Aviso Legal - Taskbot.pro',
    description: 'Aviso legal y condiciones de uso del sitio web de Taskbot.pro.',
  },
  'politica-privacidad': {
    title: 'Política de Privacidad - Taskbot.pro',
    description: 'Política de privacidad y protección de datos de Taskbot.pro.',
  },
  'politica-cookies': {
    title: 'Política de Cookies - Taskbot.pro',
    description: 'Política de cookies del sitio web de Taskbot.pro.',
  },
},
en: {
  'home': {
    title: 'Taskbot.pro - Intelligent Automation with AI and Robotics',
    description: 'Transform your knowledge into automated execution. AI agents and collaborative robotics that automate your digital and physical processes with automatic validations and complete traceability.',
    keywords: 'AI automation, intelligent agents, collaborative robotics, hyperautomation, RPA, business processes',
  },
  'que-hacemos': {
    title: 'What We Do - Automation Services - Taskbot.pro',
    description: 'Specialized hyperautomation for businesses. We create custom AI agents with guardrails, validations, and complete traceability. No black box.',
    keywords: 'automation services, custom AI agents, AI guardrails, automatic validations, traceability',
  },
  'como-lo-hacemos': {
    title: 'How We Do It - Automation Methodology - Taskbot.pro',
    description: 'Structured 4-phase process: analysis, agent design, configuration, and continuous improvement. From pilot to production in 4-8 weeks.',
    keywords: 'automation methodology, AI implementation, automation process, controlled deployment',
  },
  'sobre-taskbot': {
    title: 'About Taskbot - Team and Vision - Taskbot.pro',
    description: 'Team specialized in AI and robotics automation. We convert business know-how into autonomous execution with transparency and transferable assets.',
    keywords: 'about taskbot, automation team, company vision, AI specialists',
  },
  'contacto': {
    title: 'Contact - Let\'s Talk About Your Project - Taskbot.pro',
    description: 'Have a repetitive process that could be automated? Send us an email and we\'ll analyze if it\'s a candidate for AI agent automation.',
    keywords: 'contact taskbot, automation consultation, process analysis',
  },
  'blog': {
    title: 'Blog - Insights on Automation and AI - Taskbot.pro',
    description: 'Practical guides, trends, and success stories about intelligent automation, AI agents, robotics, and hyperautomation for businesses.',
    keywords: 'automation blog, AI guides, automation trends, success stories',
  },
  'blog/robotica-hiperautomatizacion': {
    title: 'Robotics and Hyperautomation - Blog - Taskbot.pro',
    description: 'When your digital processes need hands and sensors. How collaborative robots, IoT sensors, and AI agents converge.',
    keywords: 'collaborative robotics, hyperautomation, IoT sensors, hardware integration',
  },
  'blog/logica-semantica': {
    title: 'Semantic Logic in Automation - Blog - Taskbot.pro',
    description: 'How semantics improves business automation and enables AI agents to understand business context.',
    keywords: 'semantic logic, enterprise ontologies, domain models, contextual AI',
  },
  'blog/semantica-empresa': {
    title: 'Enterprise Semantics - Blog - Taskbot.pro',
    description: 'Practical application of enterprise semantics to improve interoperability and process automation.',
    keywords: 'enterprise semantics, interoperability, process automation, system integration',
  },
  'blog/guardarrailes-ia-guia-practica': {
    title: 'AI Guardrails - Practical Guide - Blog - Taskbot.pro',
    description: 'Step-by-step practical guide to implement operational guardrails in enterprise AI systems. Control, validation, and security.',
    keywords: 'AI guardrails, AI validations, AI security, automation control',
  },
  'aviso-legal': {
    title: 'Legal Notice - Taskbot.pro',
    description: 'Legal notice and terms of use for Taskbot.pro website.',
  },
  'politica-privacidad': {
    title: 'Privacy Policy - Taskbot.pro',
    description: 'Privacy and data protection policy for Taskbot.pro.',
  },
  'politica-cookies': {
    title: 'Cookie Policy - Taskbot.pro',
    description: 'Cookie policy for Taskbot.pro website.',
  },
},
};

// Update document meta tags
export const updateMetaTags = (routeKey: RouteKey, language: Language = 'es'): void => {
  const meta = pageMeta[language]?.[routeKey] || pageMeta['es']['home'];
  
  // Update title
  document.title = meta.title;
  
  // Update or create meta description
  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute('content', meta.description);
  
  // Update or create meta keywords
  if (meta.keywords) {
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', meta.keywords);
  }
  
  // Update Open Graph tags for social media sharing
  const ogTags = [
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: meta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: window.location.href },
  ];
  
  ogTags.forEach(({ property, content }) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  });
  
  // Update Twitter Card tags
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: meta.description },
  ];
  
  twitterTags.forEach(({ name, content }) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  });
};
