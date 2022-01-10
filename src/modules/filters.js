export const searchFilter = (goods, value) => {
    if (value.length === 0) {
        return goods;
    }
    return goods.filter(item => {
        return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
};

export const categoryFilter = (goods, value) => {
    if (value.length === 0) {
        return goods;
    }
    return goods.filter(item => item.category === value);
};

export const priceFilter = (goods, min, max) => {
    return goods.filter(item => {
        if (min === '' && max === '') {
            return goods;
        } else if (min !== '' && max !== '') {
            return item.price >= +min && item.price <= +max;
        } else if (min !== '' && max === '') {
            return item.price >= +min;
        } else if (min === '' && max !== '') {
            return item.price <= +max;
        }
    });
};

export const saleFilter = (goods, value) => {
    return goods.filter(item => value ? item.sale === true : item);
};
