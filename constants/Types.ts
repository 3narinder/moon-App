export type Product = {
  id: number;
  name: string;
  price: number;
  sold: number;
  dateOfArrival: string;
  category: string;
  colors: string[];
  categories: string[];
  image: string[];
  description: string;
  quantity?: number | undefined;
};

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};
