
export interface Category {
  id: number;
  name: string;
  imageUrl: string;
  active: boolean;
}

export interface Subcategory {
  id: number;
  categoryId: number;
  name: string;
  active: boolean;
}
