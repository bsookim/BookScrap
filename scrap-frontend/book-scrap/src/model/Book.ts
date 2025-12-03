export type BookCategoryClick = {
  name: string;
};

export type BookCategoryResponse = {
  id: number;
  categoryUrl: string;
  categoryName: string;
};

export type BookResponse = {
  id: number;
  title: string;
  price: string;
  stock: string;
  description: string;
  upc: string;
  productType: string;
  thumbNail:string;
  currentUrl: string;
  reply: BookReplyResponse[];
};

export type BookReplyResponse = {
  id: number;
  content: string;
};

export type BookUrlRequest = {
  currentUrl: string;
};
