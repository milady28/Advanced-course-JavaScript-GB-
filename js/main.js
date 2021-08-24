class Products {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    renderProduct() {
        return `<div class="product-item">
                <img src="https://via.placeholder.com/200x150">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class ProductsList {
    constructor() {
        this.products = [];
        this.amount = 0;
    }

    getProducts() {
        this.products = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50}
        ]
    }

    renderList() {
        let listHtml = '';
        this.products.forEach(product => {
            const productItem = new Products(product.id, product.title, product.price);
            listHtml += productItem.renderProduct();
        });

        document.querySelector('.products').innerHTML = listHtml;
    }

    getPriceAmount() {
        for (let i = 0; i < this.products.length; i++) {
            this.amount += this.products[i].price;
        }
        
        console.log(this.amount);
    }
}

class Cart {
    addItem() {}
    removeItem() {}
    clearCard() {}
    checkout () {}
}

class CartItem {
    changeAmountItem() {}
    addItemToFavor() {} // Переместить товар в избранное
    addAccessories() {}
}
    
const list = new ProductsList();
list.getProducts();
list.renderList();
list.getPriceAmount();