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
