export interface APIUser {
  login: string;
  name: string;
  followers?: number;
  following?: number;
  public_repos: string;
  avatar_url: string;
  blog?: string;
  bio?: string;
  company?: string;
  email?: string;
  location: string;
}

export interface APIConnection {
  login?: string;
  avatar_url?: string;
}

export interface APIMe { 
  name: string;
  bio?: string;
  company?: string;
}
