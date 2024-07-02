export interface IProduct {
  id: string;
  category_id: string | null;
  product_shop_id: string | null;
  brand: string | null;
  product_name: string | null;
  supplier: string | null;
  product_desc: string | null;
  product_status: number | null;
  product_attrs: JSON | null;
  image: JSON | null;
  cover_image: JSON | null;
  video: JSON | null;
  description: string | null;
  price_sale: string | null;
  discount: string | null;
  quantity: number | null;
  weight: string | null;
  length: string | null;
  width: string | null;
  height: string | null;
  rating: string | null;
  number_review: number | null;
  total_sale: number | null;
  shipping_unit: string | null;
  status: string | null;
  sort: number | null;
  deleted: boolean | null;
  disable: boolean | null;
  createAt: string | null;
  updateAt: string | null;
  deleteAt: string | null | null;
}