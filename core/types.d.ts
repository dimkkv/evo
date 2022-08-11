export interface Card {
  id: string;
  skills: Skill[];
  traits: Trait[];
}

export interface Skill {
  id: string;
  title: string;
  description: string;
}

export interface Trait {
  id: string;
  title: string;
  imageUrl: string;
}
