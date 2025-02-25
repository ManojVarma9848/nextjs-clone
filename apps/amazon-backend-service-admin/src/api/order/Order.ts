import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  paymentintent: boolean | null;
  price: number | null;
  products?: Array<Product>;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
