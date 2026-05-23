export interface Gem {
  name: string;
  category: string;
  images: string[];
  video?: string;
}

export interface Images { id: number, src: string, alt: string }