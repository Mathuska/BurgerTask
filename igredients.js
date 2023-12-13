
const bun = [{ 
    "name" : "Brioche Bun (8 lei)" ,
    "characteristics" : {
        "price" : 8 ,
        "url" : "/assets/asset-1.png",
        "weight" : 0
    }
}
]
const meat = [
    { 
        "name" : "Beef Patty (35 lei)" ,
      "characteristics" :{
        "price" : 35,
        "url" : "/assets/pirjoala-de-vita.png",
        "weight" : 0
      }
    },

    { 
        "name" : "Breaded Chicken Filet (25 lei)" ,
      "characteristics" :{
        "price" : 25,
        "url" : "/assets/pirjoala-de-pui (2).png",
        "weight" : 0
      }
    },

    { 
        "name" : "Grilled Chicken Filet (25 lei)" ,
      "characteristics" :{
        "price" : 25,
        "url" : "/assets/pirjoala-de-pui (2).png",
        "weight" : 0
      }
    },
]

const bottomSauce = [
    {
        "name": "-",
        "characteristics": {
            "price": 0,
            "url": "",
            "weight": 0
        }
    },
    {
        "name": "Ketchup",
        "characteristics": {
            "price": 4,
            "url": "/assets/ketchup.png",
            "weight": 0
        }
    },
    {
        "name": "Mayonnaise",
        "characteristics": {
            "price": 4,
            "url": "/assets/maioneza.png",
            "weight": 0
        }
    },
    {
        "name": "Tartar Sauce",
        "characteristics": {
            "price": 4,
            "url": "/assets/tartar-sos.png",
            "weight": 0
        }
    },
    {
        "name": "Garlic&BBQ",
        "characteristics": {
            "price": 4,
            "url": "/assets/tartar-sos.png",
            "weight": 0
        }
    },
    {
        "name": "Sriracha",
        "characteristics": {
            "price": 6,
            "url": "/assets/sriracha.png",
            "weight": 0
        }
    },
    {
        "name": "Classy Sauce",
        "characteristics": {
            "price": 4,
            "url": "/assets/tartar-sos.png",
            "weight": 0
        }
    },
    {
        "name": "Garlic Sauce",
        "characteristics": {
            "price": 4,
            "url": "/assets/tartar-sos.png",
            "weight": 0
        }
    }
];

const topSauce = [
    {
        "name": "-",
        "characteristics": {
            "price": 0,
            "url": "",
            "weight": 0
        }
    },
    {
        "name": "Mayonnaise",
        "characteristics": {
            "price": 4,
            "url": "/assets/maioneza.png",
            "weight": 0
        }
    },
    {
        "name": "Tartar Sauce",
        "characteristics": {
            "price": 4,
            "url": "/assets/tartar-sos.png",
            "weight": 0
        }
    },
    {
        "name": "Garlic&BBQ",
        "characteristics": {
            "price": 4,
            "url": "/assets/tartar-sos.png",
            "weight": 0
        }
    },
    {
        "name": "Ketchup",
        "characteristics": {
            "price": 4,
            "url": "/assets/ketchup.png",
            "weight": 0
        }
    },
    {
        "name": "Classy Sauce",
        "characteristics": {
            "price": 4,
            "url": "/assets/tartar-sos.png",
            "weight": 0
        }
    },
    {
        "name": "Sriracha",
        "characteristics": {
            "price": 6,
            "url": "/assets/sriracha.png",
            "weight": 0
        }
    },
    {
        "name": "Garlic Sauce",
        "characteristics": {
            "price": 4,
            "url": "/assets/tartar-sos.png",
            "weight": 0
        }
    }
];


const cheese = [
    {
        "name": "-",
        "characteristics": {
            "price": 0,
            "url": "",
            "weight": 0
        }
    },
    {
        "name": "Chedar Cheese",
        "characteristics": {
            "price": 12,
            "url": "/assets/cheddar.png",
            "weight": 0
        }
    },
    {
        "name": "Dorblu Cheese",
        "characteristics": {
            "price": 15,
            "url": "/assets/cascaval-dorblu.png",
            "weight": 0
        }
    }
];
cheese.forEach(element => console.log(element.name))

const toppings = [
    {
        "name": "-",
        "characteristics": {
            "price": 0,
            "url": "",
            "weight": 0
        }
    },
    {
        "name": "Crispy Bacon",
        "characteristics": {
            "price": 12,
            "url": "/assets/bacon-crocant.png",
            "weight": 0
        }
    },
    {
        "name": "Fried Egg",
        "characteristics": {
            "price": 10,
            "url": "/assets/ou-prajit.png",
            "weight": 0
        }
    },
    {
        "name": "Marinated Onion",
        "characteristics": {
            "price": 2,
            "url": "/assets/ceapa-marinata.png",
            "weight": 0
        }
    },
    {
        "name": "Caramel Onion",
        "characteristics": {
            "price": 4,
            "url": "/assets/ceapa-caramelizata.png",
            "weight": 0
        }
    },
    {
        "name": "Pickles",
        "characteristics": {
            "price": 4,
            "url": "/assets/castraveti-murati.png",
            "weight": 0
        }
    },
    {
        "name": "Cucumber",
        "characteristics": {
            "price": 4,
            "url": "/assets/castraveti-proaspeti.png",
            "weight": 0
        }
    },
    {
        "name": "Tomato",
        "characteristics": {
            "price": 5,
            "url": "/assets/rosii.png",
            "weight": 0
        }
    },
    {
        "name": "Iceberg Lettuce",
        "characteristics": {
            "price": 5,
            "url": "/assets/salata-iceberg.png",
            "weight": 0
        }
    }
];

