export interface SmartImage {
  alt: string;
  src: string;
  srcSet: SmartImageSet[];
}

export interface SmartImageSet {
  media: string;
  src: string;
}