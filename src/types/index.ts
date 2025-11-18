export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  store: string;
  storeUrl: string;
}

export interface Look {
  id: string;
  name: string;
  style: string;
  image: string;
  products: Product[];
  description: string;
}

export interface StyleQuizAnswer {
  style: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
