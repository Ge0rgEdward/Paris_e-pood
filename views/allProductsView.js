

export const displayAllProductsView = (products) => {
    const section = document.createElement("main-section");

    section.innerHTML = <h2>Meie Tooted</h2>;



    const itemContainer = document.createElement('section');
    productsContainer.classList.add('products-section');

    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard = classList.add('product')
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Kategooria: $${product.category}</p>
            <p>Hind: ${product.price}
         `;
    });

    //Toote kaardile vajutades mine toode detailsesse vaatesse



    
            


const cartButton = document.createElement("button");
cartButton.textContent = 'Lisa ostukorvi';

productCard.appendChild(cartButton);


}


