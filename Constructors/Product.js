// Toote lisamine

export class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

 

  describe() {
    console.log(`Toode: ${this.name} (ID: ${this.id})`);
    console.log(`Kategooria: ${this.category}`);
    console.log(`Hind: €${this.price}`);
  }

  static discountedPrice = (price, discount) =>
    price - (price * discount) / 100;
}
