export const displayCartView = () =>  {
    const container = document.getElementById('view-cart');
    container.innerHTML = "view-cart";
    
    const cart = cartConstructor.getAllProducts();

    if(!cart.length) {
        const cartItemElement = document.createElement('p');
        cartItemElement.innerText = 'Ostukorv on tühi'
        container.append(cartItemElement);
    }

    else{
        cart.forEach((item) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item')
            cartItemElement.innerHTML = `
            <h3>${item.product.name}</h3>
            <p>Kategooria: $${item.product.category}</p>
            <p>Hind: ${item.product.quantity}</p>
        `;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eemalda';

        cartItemElement.appendChild(removeButton);
        container.append(cartItemElement);

        });
    }

};

