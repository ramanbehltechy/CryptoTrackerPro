const urlGetCoins = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
const urlPostCoins = '';

function* getCoinsFromApi() {
    const allcoins = yield fetch(urlGetCoins).then(resp => resp.json()).then(coins => {
        return coins;
    });
    return allcoins;
}

function* insertNewCoinFromApi(newCoin) {
    const response = yield fetch(urlPostCoins, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newCoin.name
        }),
    });
    yield console.log(`response = ${JSON.stringify(response)}`); 
    return yield (response.status === 201);//true or false
}

export const Api = {
    getCoinsFromApi,
    insertNewCoinFromApi
}; 