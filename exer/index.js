function createSundae([scoops = 1, toppings = ['Hot Fudge']] = []){
    return `scoops = ${scoops} and toppings = ${toppings} wooow`
}
console.log(createSundae([['Sprinkles', 'Caramel']]));