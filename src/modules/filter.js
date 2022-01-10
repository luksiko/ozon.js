import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, saleFilter } from "./filters";

const filter = () => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');
    const checkboxInput = document.getElementById('discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');

    const filterGoods = () => {
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
        });
    };

    minInput.addEventListener('input', () => filterGoods());
    maxInput.addEventListener('input', () => filterGoods());
    checkboxInput.addEventListener('change', () => {
        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked');
        } else {
            checkboxSpan.classList.remove('checked');
        }
        filterGoods();
    });
};

export default filter;
