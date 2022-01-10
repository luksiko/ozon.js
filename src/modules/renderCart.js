const renderCart = (goods) => {
    const cartWrapper = document.querySelector('.cart-wrapper');

    cartWrapper.innerHTML = '';
    if (goods.length === 0) {
        cartWrapper.innerHTML = `
            <div id="cart-empty" class="cart-empty">
                <h2>Корзина пуста</h2>
                <p>Вы можете продолжить покупки, выбрав товары из магазина.</p>
            </div>
        `;
    } else {
        goods.forEach((goodsItem) => {
            const {id, title, price, img, sale} = goodsItem;
            cartWrapper.insertAdjacentHTML('beforeend', `
            <div class="card"  data-key="${id}">
                ${sale ? `<div class="card-sale">🔥Hot Sale🔥</div>` : ''}
                <div class="card-img-wrapper">
                    <span class="card-img-top"
                        style="background-image: url(${img})"></span>
                </div>
                <div class="card-body justify-content-between">
                    <div class="card-price">${price} ₽</div>
                    <h5 class="card-title">${title}</h5>
                    <button class="btn btn-primary">Удалить</button>
                </div>
            </div>  
        `);
        });
    }


};

export default renderCart;
