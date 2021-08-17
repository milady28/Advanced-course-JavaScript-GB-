const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
                <h3 class="product-item__title">${item.title}</h3>
                <p class="product-item__price">${item.price}$</p>
                <img class="product-item__img" src="img/${item.title}.jpg" width="200">
                <button class="product-item__btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    // Поскольку в html выводится массив productsList, а не строка, запятые сохраняются. Исправляем ситуацию с помощью метода массива join()
    document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderPage(products);