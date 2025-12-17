export type CharacterType = {
  id: number;
  name: string;
  status: 'Alive' | 'unknown' | 'Dead';
  species: string;
  type: string;
  gender: 'Male' | 'unknown' | 'Female';
  image: string;
  created: string;
};

type Item = {
  id: number;
  name: string;
  image?: string;
};
export type ListType = {
  items: Item[];
  type: 'characters' | 'episodes' | 'locations';
};

export type ImageItemType = {
  image: string | undefined;
  name: string;
};
