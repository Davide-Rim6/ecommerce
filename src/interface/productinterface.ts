import { url } from "inspector";

export interface Product {
    id: string;
    name: string;
    image: string;
    price: string;
    description: string;
}
 const mockProducts: Product[] =  [
{
    id: "1",
    name: "Fanta Grape Soda",
    image: "https://www.jerryamerica.com/cdn/shop/products/fead87c4-4d8b-4f51-af89-f6229d54f70d_360x.jpg?v=1600294070",
    price: "2,99€",
    description: " Fanta gusto Uva per la volpa che non arriva all'uva.",

},
{
    id: "2",
    name: "Fanta Strawberry Soda",
    image: "https://www.jerryamerica.com/cdn/shop/products/FANTA-STRAWBERRY-SODA-FRAGOLA_360x.jpg?v=1571687584",
    price: "2,99€",
    description: "Fanta gusto fragola.",

},{
    id: "3",
    name: "Fanta Berry Soda",
    image: "https://www.jerryamerica.com/cdn/shop/products/fanta-berry-soda_360x.jpg?v=1571687576",
    price: "2,99 €",
    description: "Fanta gusto bacche",

},{
    id: "4",
    name: "Samyan Extreme Spicy Chips",
    image: "https://www.jerryamerica.com/cdn/shop/files/Samyang-Extreme-Buldak-Zzaldduk-2xSpicy-Chips-80g-550x550_360x.jpg?v=1706881846",
    price: "3,99 €",
    description: "Patatina estremamente piccanti, per sicurezza compra un po' di latte ",

},
{
    id: "5",
    name: "Lays Chips",
    image: "https://www.jerryamerica.com/cdn/shop/files/lays-kfc-chips-150g_700x_bc9ce93b-d8ca-4414-8572-be100fc2d376_360x.jpg?v=1697201475",
    price: "2,99 €",
    description: "Patatine Lays semplici, infatti non costano molto",

},{
    id: "6",
    name: "Herr's Carolina Reaper Chips",
    image: "https://www.jerryamerica.com/cdn/shop/products/HERR_S-CAROLINA-REAPER-FLAVOURED-POTATO-CHIP-29-gr_360x.jpg?v=1572291552",
    price: "4,99 €",
    description: "Patatine ancora più piccanti con l'aggiunta del Carolina Reaper. ",

},
{
    id: "7",
    name: "Fanta ananas",
    image: "https://www.jerryamerica.com/cdn/shop/products/1e01e4e0-ffc4-4fa6-8671-84fd98702e90_360x.jpg?v=1600294045",
    price: "3,99 €",
    description: "Fanta all'ananas, figurati se qualcuno lo compra ",

},
{
    id: "8",
    name: "Reeses",
    image: "https://www.jerryamerica.com/cdn/shop/products/c6b471a5-a330-42a8-9c81-c38fc3f9f578_360x.jpg?v=1571688232",
    price: "2,99 €",
    description: "Crema spalmabile Reese's",

},{
    id: "9",
    name: "Coca Cola Vanilla",
    image: "https://www.jerryamerica.com/cdn/shop/products/coca-cola-vanilla-355ml_360x.jpg?v=1655153874",
    price: "2,99 €",
    description: "Coca Cola alla vaniglia. ",

},
];
export default mockProducts;