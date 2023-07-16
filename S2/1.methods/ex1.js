const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta', "Tal camiseta"]

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    if (product.toLowerCase().includes("Camiseta".toLowerCase())) {
        console.log(product);
    };
}


