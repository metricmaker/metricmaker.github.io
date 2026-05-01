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

export interface NavConfig {
  links: NavLink[];
  cta: NavLink;
}

export interface Hero {
  headline: string;
  subheading: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface StatItem {
  number: string;
  suffix?: string;
  label: string;
  sub?: string;
}

export interface StatsBlock {
  number: string;
  heading: string;
  intro: string;
  items: StatItem[];
}

export interface Service {
  id: string;
  idx: string;
  title: string;
  body: string;
}

export interface WhatWeDo {
  number: string;
  heading: string;
  intro: string;
  services: Service[];
}

export interface FactItem {
  key: string;
  value: string;
}

export interface CaseStudy {
  title: string;
  paragraphs: string[];
  facts: FactItem[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ApproachSection {
  enabled: boolean;
  number: string;
  heading: string;
  caseStudy: CaseStudy;
}

export interface Opportunities {
  number: string;
  heading: string;
  intro: string;
  criteria: string[];
}

export interface PeopleSection {
  number: string;
  heading: string;
  intro: string;
}

export interface Director {
  name: string;
  role: string;
  email: string;
  bio: string;
}

export interface PartnerItem {
  img: string | null;
  textLogo?: string;
  alt?: string;
  name: string;
  role: string;
  blurb: string;
}

export interface PartnersSection {
  number: string;
  heading: string;
  intro: string;
  items: PartnerItem[];
}

export interface ContactLine {
  label: string;
  email: string;
}

export interface ContactCta {
  number: string;
  heading: string;
  body: string;
  contactLines: ContactLine[];
  ctaLabel: string;
  ctaHref: string;
}

export interface SiteContent {
  site: {
    title: string;
    description: string;
    footerCopyright: string;
  };
  nav: NavConfig;
  hero: Hero;
  stats: StatsBlock;
  whatWeDo: WhatWeDo;
  approach: ApproachSection;
  opportunities: Opportunities;
  people: PeopleSection;
  directors: Director[];
  partners: PartnersSection;
  contactCta: ContactCta;
}

// ---- Parse and export ----------------------------------------------

export const content = yaml.load(raw) as SiteContent;
