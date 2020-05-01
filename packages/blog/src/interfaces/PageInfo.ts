export interface PageInfo {
  title: string;
  titleTemplate?: string;
  description: string;
  canonical?: string;
  url: string;
  twitter?: TwitterInfo
  openGraph?: OpenGraph
}

export interface PageImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface OpenGraph{
  url: string;
  title: string;
  description: string;
  site_name: string;
  images?: PageImage[]
  locale?: string;
}

export interface TwitterInfo {
  handle: string;
  cardType: string;
  site?: string;
}
