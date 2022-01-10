import { categoryFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog li');

    let isOpen = false;
    const triggerMenu = () => {
        isOpen = !isOpen;
        catalogModal.style.display = isOpen ? 'block' : 'none';
    };
    btnCatalog.addEventListener('click', () => triggerMenu());

    catalogModalItems.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;

            getData().then((data) => {
                renderGoods(categoryFilter(data, text));
            });

            triggerMenu();
        });
    });
};

export default catalog;
