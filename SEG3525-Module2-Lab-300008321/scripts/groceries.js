	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "yaourt",
		lactoseFree: false,
		nutFree: true,
        organic: false,
		price: 1.99
	},
    {
        name: "orange",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 2.00
    },
    {
        name: "barre de chocolat sans noix",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        price: 2.00
    },
	{
		name: "granola aux amandes",
		lactoseFree: true,
		nutFree: false,
        organic: false,
		price: 2.35
	},
    {
        name: "beurre d'arachides",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 2.50
    },
    {
        name: "eau",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 2.50
    },
    {
        name: "pomme verte",
        lactoseFree: true,
        nutFree: true,
        organic: true,
        price: 3.00
    },
    {
        name: "barres de cereales nature",
        lactoseFree: true,
        nutFree: false,
        organic: true,
        price: 4.50
    },
    {
        name: "creme glacee aux fraises",
        lactoseFree: false,
        nutFree: true,
        organic: false,
        price: 5.00
    },
	{
		name: "saumon",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Sans Lactose") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name + ',' + prods[i].price);
		}
		else if ((restriction == "Sans Noix") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name + ',' + prods[i].price);
		}
        else if((restriction == "Produits Organiques") && (prods[i].organic == true)){
            product_names.push(prods[i].name + ',' + prods[i].price);
        }
		else if (restriction == "Aucune"){
			product_names.push(prods[i].name + ',' + prods[i].price);
		}
	}
	return product_names;
}

function restrictMutlipleListProducts(prods, restriction) {
    let product_names = [];

    for (let i=0; i<prods.length; i+=1) {
        //Lactose Free and Nut Free
        if((restriction[0].value == "Sans Lactose") && (restriction[1].value == "Sans Noix")){
            if((restriction[0].value == "Sans Lactose") && (prods[i].lactoseFree == true)){
                if((restriction[1].value == "Sans Noix") && (prods[i].nutFree == true)){
                    product_names.push(prods[i].name + ',' + prods[i].price);
                }
            }
        }
        //Lactose Free and Organic Products
        else if((restriction[0].value == "Sans Lactose") && (restriction[1].value == "Produits Organiques")){
            if((restriction[0].value == "Sans Lactose") && (prod[i].lactoseFree == true)){
                if((restriction[1].value == "Produits Organiques") && (prods[i].organic == true)){
                    product_names.push(prods[i].name + ',' + prods[i].price);
                }
            }
        }
        //Nut Free and Organic Products
        else if((restriction[0].value == "Sans Noix") && (restriction[1].value == "Produits Organiques")){
            if((restriction[0].value == "Sans Noix") && (prod[i].nutFree == true)){
                if((restriction[1].value == "Produits Organiques") && (prods[i].organic == true)){
                    product_names.push(prods[i].name + ',' + prods[i].price);
                }
            }
        }
        //Nut Free, Lactose Free and Organic Products
        if(restriction.length == 3){
            if((restriction[0].value == "Sans Noix") && (prods[i].nutFree == true)){
                if((restriction[1].value == "Sans Lactose") && (prods[i].lactoseFree == true)){
                    if((restriction[2].value == "Produits Organiques") && (prods[i].organic == true)){
                        product_names.push(prods[i].name + ',' + prods[i].price);
                    }
                }
            }
        }
        else if(restriction == "None"){
            product_names.push(prods[i].name + ',' + prods[i].price);
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
