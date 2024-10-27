export interface Model {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  city: string;
  values?: {
    fee: number;
    commission: number;
  };
}
