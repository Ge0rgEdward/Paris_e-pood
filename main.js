// import { displayAllProductsView} from './allProductsView';

import { Product } from "./Constructors/Product.js";
import { Order } from "./Constructors/Order.js";
import { Customer } from "./Constructors/Customer.js";
import { Cart } from "./Constructors/Cart.js";

//E-poe tooted

// const headphones = new Product(1, "Kõrvaklapid", 339.99, "Elektrooinka");
// const sneakers = new Product(2, 'Tossud', 110.99,'Jalanõud');
// const hoodie = new Product(3,'Pusa', 55.00, 'Riided');

// displayAllProductsView();



const laptop = new Product(1, 'Sülearvuti', 999.99, 'Elektroonika');

console.log('läpakas', laptop.describe());

console.log(Product.discountedPrice(laptop.price, 10)); // 10% allahindlus




//Ostukorvi kogusumma arvutamine



const cart = new Cart();

const customer = new Customer('Georg');

customer.placeOrder(cart);


customer.printOrderHistory();

cart.addPorduct(laptop, 5);

console.log(cart.calculateTotal()); // Kokku hind

console.log(cart.totalItems); // Kokku tooteid ostukorvis

const order = new Order(cart);
order.printOrder();







