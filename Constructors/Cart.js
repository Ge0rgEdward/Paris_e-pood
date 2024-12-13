export class Cart {
  constructor() {
    this.products = [];
  }

  //Toote lisamine ostukorvi
  addPorduct = (product, quantity) => {
    this.products.push({ product, quantity });
  };

  //Toote eemaldamine ostukorvist
  removeProduct = (productId) => {
    this.products = this.products.filter((product) => product.id !== productId);
  };

  //Ostukorvi kogusumma arvutamine
  calculateTotal() {
    console.log(this.products);
    return this.products.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  //Mitu toodet on ostukorvis
  get totalItems() {
    return this.products.length;
  }
}
