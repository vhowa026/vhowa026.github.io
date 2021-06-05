	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "yaourt",
		lactoseFree: false,
		nutFree: true,
        organic: false,
        fruitorveggie: false,
		price: 1.99
	},
	{
		name: "barre de chocolat sans noix",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        fruitorveggie: false,
        price: 2.00
	},
	{
		name: "granola aux amandes",
		lactoseFree: true,
		nutFree: false,
        organic: false,
        fruitorveggie: false,
		price: 2.35
	},
    {
        name: "celeri (organique)",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        fruitorveggie: true,
        price: 2.45
    },
    {
        name: "beurre d'arachides (organique)",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        fruitorveggie: false,
        price: 2.50
    },
    {
        name: "eau (organique)",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        fruitorveggie: false,
        price: 2.50
    },
    {
        name: "pomme verte (organique)",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        fruitorveggie: true,
        price: 3.00
    },
    {
        name: "barres de cereales nature (organique)",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        fruitorveggie: false,
        price: 4.50
    },
    {
        name: "creme glacee aux fraises",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        fruitorveggie: false,
        price: 5.00
    },
    {
        name: "saumon",
		lactoseFree: true,
		nutFree: true,
        organic: false,
        fruitorveggie: false,
		price: 10.00
    }
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Sans Lactose") && (prods[i].lactoseFree == true)){
            if(prods[i].fruitorveggie == true){
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
            }
            else{
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
            }
		}
		else if ((restriction == "Sans Noix") && (prods[i].nutFree == true)){
			if(prods[i].fruitorveggie == true){
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
            }
            else{
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
            }
		}
        else if ((restriction == "Produits Organiques") && (prods[i].organic == true)){
            if(prods[i].fruitorveggie == true){
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
            }
            else{
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
            }
        }
		else if (restriction == "Aucune"){
			if(prods[i].fruitorveggie == true){
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
            }
            else{
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
            }
		}
	}
	return product_names;
}

function restrictMutlipleListProducts(prods, restriction) {
    let product_names = [];

    for(let i=0; i<prods.length; i+=1) {
        //Sans Lactose et Sans Noix
        if(restriction[0] == "Sans Lactose" && restriction[1] == "Sans Noix") {
            if((restriction[0] == "Sans Lactose") && (prods[i].lactoseFree == true)) {
                if((restriction[1] == "Sans Noix") && (prods[i].nutFree == true)) {
                    if(prods[i].fruitorveggie == true) {
                        product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
                    }
                    else {
                        product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
                    }
                }
            }
        }
        //Sans Lactose et Produits Organiques
        if(restriction[0] == "Sans Lactose" && restriction[1] == "Produits Organiques") {
            if((restriction[0] == "Sans Lactose") && (prods[i].lactoseFree == true)) {
                if((restriction[1] == "Produits Organiques") && (prods[i].organic == true)) {
                    if(prods[i].fruitorveggie == true) {
                        product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
                    }
                    else {
                        product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
                    }
                }
            }
        }
        //Sans Noix et Produits Organiques
        if(restriction[0] == "Sans Noix" && restriction[1] == "Produits Organiques") {
            if((restriction[0] == "Sans Noix") && (prods[i].nutFree == true)) {
                if((restriction[1] == "Produits Organiques") && (prods[i].organic == true)) {
                    if(prods[i].fruitorveggie == true) {
                        product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
                    }
                    else {
                        product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
                    }
                }
            }
        }
        else if(restriction.length == 3) {
            if ((restriction[0] == "Sans Lactose") && (prods[i].lactoseFree == true)) {
                if((restriction[1] == "Sans Noix") && (prods[i].nutFree == true)) {
                    if((restriction[2] == "Produits Organiques") && (prods[i].organic == true)) {
                        if(prods[i].fruitorveggie == true) {
                            product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
                        }
                        else {
                            product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
                        }
                    }
                }
            }
        }
        else if(restriction == "Aucune") {
            if(prods[i].fruitorveggie == true) {
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + true);
            }
            else {
                product_names.push(prods[i].name + ',' + prods[i].price + '$' + ',' + false);
            }
        }
    }
    return product_names;
}
// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
