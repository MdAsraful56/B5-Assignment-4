// types/book.d.ts or types.ts
export interface IBook {
  _id?: string;
  title: string;
  author: string;
  image: string;
  genre:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY";
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}
