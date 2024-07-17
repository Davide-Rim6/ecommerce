import { Product } from "./productinterface";

export default interface Cart {
    product: Product;
    amount: number;
}