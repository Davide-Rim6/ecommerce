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
    name: "Davide il capo a cavallo",
    image: "https://th.bing.com/th/id/OIG4.9.BBCAIEJ_B35yDymd9_?pid=ImgGn",
    price: "1.000.000,00€",
    description: "Uomo dall'immensa bellezza che vive la vita nel migliore dei modi, affrontando tutte le difficoltà insieme al suo prode cavallo Pippo.",

},
{
    id: "2",
    name: "Joshua e la sua papera",
    image: "https://th.bing.com/th/id/OIG3.wwy4I8dRwQUeoCJNbwGe?pid=ImgGn",
    price: "0,99€",
    description: "Solo Joshua con l'ossessione per le papere di gomma.",

},{
    id: "3",
    name: "Vincenzo che psicanalizza un pinguino",
    image: "https://th.bing.com/th/id/OIG4.8qSan3.NEFrfg9hJ0nQj?pid=ImgGn",
    price: "Un rene €",
    description: "Lo psicologo Vincenzo analizza il pinguino depresso rifiugiato in Italia per colpa del riscaldamento globale",

},{
    id: "4",
    name: "Lucia e i gatti",
    image: "https://th.bing.com/th/id/OIG1.F89.D4o6EKHkGTBDxhpX?pid=ImgGn",
    price: "un paio di croccantini e un pesciolino €",
    description: "Dopo innumerevoli tentativi nel creare un'opera d'arte che possa rappresentare la nostra Lucia ci siamo dovuti accontentare di questa foto con i gatti... che carini i gattini ",

},
{
    id: "3",
    name: "Vincenzo che psicanalizza un pinguino",
    image: "https://th.bing.com/th/id/OIG4.8qSan3.NEFrfg9hJ0nQj?pid=ImgGn",
    price: "Un rene €",
    description: "Lo psicologo Vincenzo analizza il pinguino depresso rifiugiato in Italia per colpa del riscaldamento globale",

},{
    id: "4",
    name: "Lucia e i gatti",
    image: "https://th.bing.com/th/id/OIG1.F89.D4o6EKHkGTBDxhpX?pid=ImgGn",
    price: "un paio di croccantini e un pesciolino €",
    description: "Dopo innumerevoli tentativi nel creare un'opera d'arte che possa rappresentare la nostra Lucia ci siamo dovuti accontentare di questa foto con i gatti... che carini i gattini ",

},
];
export default mockProducts;