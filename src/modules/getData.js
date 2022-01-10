const getData = (str) => {
    return fetch(`https://ozonglo-1355d-default-rtdb.firebaseio.com/goods.json`)
        // `https://ozonglo-1355d-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`) // REST API
        .then(response => response.json());
};

export default getData;
