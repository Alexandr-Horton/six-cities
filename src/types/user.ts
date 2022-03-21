export type User = {
  avatarUrl?: string;
  email: string;
  id: number,
  isPro?: boolean,
  name: string,
}

export type BackUser = {
  'avatar_url'?: string,
  email: string,
  id: number,
  'is_pro'?: boolean,
  name: string,
  token: string
}
