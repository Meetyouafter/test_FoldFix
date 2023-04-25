interface Project {
  discord: string,
  display_name: string,
  img_url: string,
  is_verified: boolean,
  project_slug: string,
  supply: number,
  tensor_slug: string,
  tensor_whitelist: string,
  twitter: string,
  website: string,
}

export interface User {
  collection_id: string,
  floor_price: number,
  project: Project,
}

export interface CollectionState {
  collection: User[];
  isLoading: boolean;
  error: string | null;
}
