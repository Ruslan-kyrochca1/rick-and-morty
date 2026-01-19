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

export type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
};

export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
};

export type PaginatedResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};

export type ListItemBase = {
  id: number;
  name: string;
  image?: string;
};

export type ListType = {
  items: ListItemBase[];
  type: 'characters' | 'episodes' | 'locations';
  loadMore: () => void;
  indexLastItem: number;
};

export type ImageItemType = {
  image: string | undefined;
  name: string;
};
export type HandleSubmitType = (email: string, password: string) => void;
export type RegisterSubmitType = (name: string, text: string, email: string, sex: string, password: string) => void;

export type InputType = {
  placeholder?: string;
  name: string;
  description?: string;
  error?: string;
  type: React.HTMLInputTypeAttribute;
  label: string | number;
  required?: boolean;
  variant?: VariantType;
  radius?: RadiusType;
  size?: SizeType;
  withAsterisk?: boolean;
  disabled?: boolean;
  inputId: string;
  icon?: React.ReactNode;
};

export type ButtonType = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export type VariantType = 'default' | 'filled' | 'unstyled';
export type RadiusType = 'xs' | 'sm' | 'md' | 'lg' | undefined;
export type SizeType = 'x-small' | 'small' | 'medium' | 'large';
