const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    
    if(element.toLowerCase().includes('Camiseta'.toLowerCase())){ // tolowerCase pasa a minuscula para comparar
        console.log(element);
    }
}