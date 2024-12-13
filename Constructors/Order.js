export class Order {
  constructor(cart) {
    this.orderDate = new Date();
    this.cart = cart;
  }

  printOrder() {
    console.log(this.orderDate);
    this.cart.products.forEach((item) => {
      console.log(`Nimi: ${item.product.name}`);
      console.log(`Price: ${item.product.price}`);
      console.log(`Kogus: ${item.quantity}`);
    });
    console.log(this.cart.calculateTotal());
  }
}
