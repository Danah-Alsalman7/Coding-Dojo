function pizzaOven(crustType, sauceType, cheeses, toppings) {
        var pizza = {};
        pizza.crustType = crustType; 
        pizza.sauceType =sauceType; 
        pizza.cheeses = cheeses; 
        pizza.toppings = toppings;
        return pizza;
    }
    var p1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni", "sausage"]);
    console.log(p1);
    var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
    console.log(p2);
    var p3 = pizzaOven("deep dish", "ranch", ["parmesan"], ["chcken", "onions"]);
    console.log(p3);
    var p4 = pizzaOven("hand tossed", "BBQ", ["mozzarella"], ["chcken"]);
    console.log(p4);
    
        function randomPizza () {
            var favPizza = ['p1', 'p2','p3','p4'];
                return favPizza[Math.floor(Math.random() * favPizza.length)];
            }
            randomPizza();