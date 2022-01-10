import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartCounter = cartBtn.querySelector('.counter');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const cartSendBtn = cartModal.querySelector('.cart-confirm');
    const goodsWrapper = document.querySelector('.goods');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const cartWrapper = cartModal.querySelector('.cart-wrapper');

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cartModal.style.display = 'flex';

        renderCart(cart);
        cartTotal.textContent = cart.reduce((sum, item) => sum + item.price, 0);
    };

    const cartCount = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cartCounter.textContent = cart.length;
    };
    cartCount();

    const closeCart = () => {
        cartModal.style.display = 'none';
    };

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    goodsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const key = e.target.closest('.card').dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const goodItem = goods.find(item => item.id === +key);
            localStorage.setItem('cart', JSON.stringify([...cart, goodItem]));
            cartCount();
        }
    });
    cartWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const key = e.target.closest('.card').dataset.key;
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const index = cart.findIndex(item => item.id === +key);
            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(cart);
            cartTotal.textContent = cart.reduce((sum, item) => sum + item.price, 0);
            cartCount();

        }
    });
    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        postData(cart).then(() => {
            localStorage.removeItem('cart');
            renderCart([]);
            cartTotal.textContent = 0;
            cartCount();
        });
    });
};
export default cart;
