/*
 * Reads src/content/site.yaml at build time and exposes the parsed
 * content as a typed object called `content`. Every page / component
 * in the site imports from here so there is a single source of truth
 * for editable copy.
 */

import yaml from 'js-yaml';
// Vite's `?raw` import inlines the file contents at build time, so this
// works identically in dev and production without any runtime fs access.
import raw from './content/site.yaml?raw';

// ---- Types ----------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  number: string;
  suffix?: string;
  label: string;
}

export interface StatsBlock {
  eyebrow: string;
  heading: string;
  intro: string;
  items?: StatItem[];
}

export interface FactItem {
  key?: string;
  value?: string;
  number?: string;
  label?: string;
}

export interface Service {
  id: string;
  idx: string;
  title: string;
  summary: string;
  detail?: string;
  structures?: string[];
}

export interface JvSubSpecialism {
  label: string;
  title: string;
  body: string;
}

export interface NarrativeBlock {
  number: string;
  heading: string;
  paragraphs: string[];
}

export interface Principle {
  label: string;
  title: string;
  body: string;
}

export interface Director {
  name: string;
  role: string;
  email: string;
  shortBio: string;
  quote: string;
  bio: string[];
}

export interface PartnerItem {
  img: string | null;
  textLogo?: string;
  alt?: string;
  name: string;
  role: string;
  blurb: string;
}

export interface PageHeaderCopy {
  eyebrow: string;
  title: string;
  lead?: string;
}

export interface SiteContent {
  site: {
    title: string;
    description: string;
    footerCopyright: string;
  };
  nav: {
    ctaLabel: string;
    links: NavLink[];
  };
  home: {
    hero: {
      eyebrow: string;
      headline: string;
      lead: string;
      ctaPrimary: string;
      ctaSecondary: string;
      meta: string;
    };
    servicesSection: { number: string; heading: string; intro: string };
    featureProject: {
      eyebrow: string;
      title: string;
      subtitle: string;
      body: string;
      ctaLabel: string;
      facts: FactItem[];
    };
    peopleSection: { number: string; heading: string; intro: string };
    partnersSection: { number: string; heading: string; intro: string };
  };
  stats: StatsBlock;
  statsPeopleVariant: StatsBlock;
  whatWeDo: {
    seoTitle: string;
    seoDescription: string;
    header: PageHeaderCopy;
    services: Service[];
    jvSubSpecialisms: JvSubSpecialism[];
  };
  approach: {
    seoTitle: string;
    seoDescription: string;
    header: PageHeaderCopy;
    facts: FactItem[];
    narrative: NarrativeBlock[];
    principlesHeading: string;
    principles: Principle[];
  };
  people: {
    seoTitle: string;
    seoDescription: string;
    header: PageHeaderCopy;
  };
  directors: Director[];
  partners: {
    seoTitle: string;
    seoDescription: string;
    header: PageHeaderCopy;
    closingNote: string;
    items: PartnerItem[];
  };
  contact: {
    seoTitle: string;
    seoDescription: string;
    header: PageHeaderCopy;
    currentFocusHeading: string;
    currentFocus: string[];
    structuresHeading: string;
    structures: string[];
    responseHeading: string;
    responseBody: string;
    generalEmail: string;
  };
  contactCta: {
    eyebrow: string;
    defaultHeading: string;
    body: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    headings: Record<string, string>;
  };
}

// ---- Parse and export ----------------------------------------------

export const content = yaml.load(raw) as SiteContent;
