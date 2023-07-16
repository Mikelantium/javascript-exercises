init();
async function init() {
    const orders = await getOrders();

    completeProductsInfo(sortByDate(orders))
}

async function getOrders() {
    const resOrders = await fetch("http://localhost:3000/orders");
    return resOrders.json();
}

async function getProduct(id) {
    const resProduct = await fetch("http://localhost:3000/products/" + id);
    return await resProduct.json();
}

function sortByDate(array) {
    return array.sort((a, b) => new Date(a.date) - new Date(b.date))
}

async function completeProductsInfo(orders) {
    for (const order of orders) {

        for (let index = 0; index < order.products.length; index++) {
            const product = order.products[index];
            const resProduct = await fetch("http://localhost:3000/products/" + product.productId);
            const productDetail = await resProduct.json();
            order.products[index] = {...product, ...productDetail};
        }
        printOrder(order)
        
        // CON PROMESAS
        // const promises = [];

        // for (const product of order.products) {
        //     const f = fetch("http://localhost:3000/products/" + product.productId);
        //     promises.push(f)
        // }

        // const resProducts = await Promise.all(promises);
        // const resProductsPros = resProducts.map(resProduct => resProduct.json())
        // const productsDetail = await Promise.all(resProductsPros);
        // printOrder(order, productsDetail)

    }
}

function printOrder(order) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<h2>${order.date}</h2>`

    for (let index = 0; index < order.products.length; index++) {
        const product = order.products[index];
        div$$.innerHTML += `<p>${product.quantity} ${product.name}</p>`
    }
    
    document.body.appendChild(div$$)
}

