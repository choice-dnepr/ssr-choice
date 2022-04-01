export interface SmartImage {
  alt: string;
  src: string;
  srcSet: SmartImageSet[];
}

export interface SmartImageSet {
  media: string;
  src: string;
}

export interface CompanyAdvantage {
  order: number;
  text: string;
}

export interface BrandRow {
  title: string;
  description: string;
  logo: string;
}