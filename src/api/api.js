const getStock = async () => {
    const response = await fetch('https://67d9752a00348dd3e2ab2aa5.mockapi.io/stock');
    const data = await response.json();
    return data;
}

export { getStock }