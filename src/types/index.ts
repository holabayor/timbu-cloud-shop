export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export interface Category {
  category: string;
  products: Product[];
}

export interface Collections {
  [key: string]: Category[];
}
