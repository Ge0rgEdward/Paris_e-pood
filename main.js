// import { displayAllProductsView} from './allProductsView';

// import {Product} from '/Product.js';
// import {Cart} from '/Cart.js';
// import {Customer} from '/Customer.js';

//E-poe tooted

// const headphones = new Product(1, "Kõrvaklapid", 339.99, "Elektrooinka");
// const sneakers = new Product(2, 'Tossud', 110.99,'Jalanõud');
// const hoodie = new Product(3,'Pusa', 55.00, 'Riided');

// displayAllProductsView();

class Product {
    constructor(id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    describe(){
        console.log(`Toode: ${this.name} (ID: ${this.id})`);
        console.log(`Kategooria: ${this.category}`);
        console.log(`Hind: €${this.price}`);

    };

    static discountedPrice = (price, discount) => 
        (price - (price * discount) / 100);
}

const laptop = new Product(1, 'Sülearvuti', 999.99, 'Elektroonika');

console.log('läpakas', laptop.describe());

console.log(Product.discountedPrice(laptop.price, 10)); // 10% allahindlus

class Cart{
    constructor(){
        this.products = [];
    }

//Toote lisamine ostukorvi 
addProduct = (product, quantity) => {
    this.products.push({product, quantity});
}    

//Toote eemaldamine ostukorvist
removeProduct =(productId) => {
    this.products = this.products.filter((product) => product.id !== productId);

}

//Ostukorvi kogusumma arvutamine
calculateTotal(){
    console.log(this.products);
    return this.products.reduce((total, item) => 
    total + item.product.price * item.quantity, 0)
};

//Mitu toodet on ostukorvis 
get totalItems() {
    return this.products.length; 
};

}

class Order{
    constructor(cart){
        this.orderDate = new Date();
        this.cart = cart;
    }

    printOrder(){
        
        console.log(this.orderDate);
        this.cart.products.forEach((item) =>{
            console.log(`Nimi: ${item.product.name}`);
            console.log(`Price: ${item.product.price}`);
            console.log(`Kogus: ${item.quantity}`);
        });
            console.log(this.cart.calculateTotal());
        
        

    }
}

class Customer{
    constructor(name){
        this.name = name;
        this.orderHistory = [];
    }

    placeOrder(cart) {
        const order = new Order(cart);
        this.orderHistory.push(order);
            
        }

    printOrderHistory() {
        console.log(`${this.name} tellimuste ajalugu:`);
        this.orderHistory.forEach((order, index) => {
            console.log(`Tellimus ${index + 1} - Kuupäev ${order.orderDate.toDateString()}, Kogusumma: $${order.cart.calculateTotal()}`);
        });
    }
    
    

}

const cart = new Cart();

const customer = new Customer('Georg');

customer.placeOrder(cart);


customer.printOrderHistory();








cart.addProduct(laptop, 5);

console.log(cart.calculateTotal()); // Kokku hind

console.log(cart.totalItems); // Kokku tooteid ostukorvis

const order = new Order(cart);
order.printOrder()







