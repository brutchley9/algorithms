import Bookel from "./Bookel.js";

/*const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    strapLength: {
        left: 26,
        right: 26,
    },
    lidOpen: false,
    toggleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    },
};

const euchlid = {
    name: "bimpus",
    nomenclature: {
        name: "targus",
        numberOfBloats: 5,
        mrPlinkett: [1, 3, 5, 7, 8, 9],
        hoaglum: ["dinklum", "herkel"]
    },
};
//this is a const, not a variable. Its properties can be changed, but NOT its contents.



console.log(euchlid.nomenclature.numberOfBloats);
console.log(euchlid.nomenclature.mrPlinkett[3])
console.log("Hello! My name is " + euchlid.nomenclature.hoaglum[0])*/

//////////

//Bookel.js has been importeted at top of page, specifically class constructor for Bookel

const newBookel = new Bookel(
    "Pip Boy",
    30,
    "lemon biege",
    true,
);

console.log(newBookel);
console.log(newBookel.volume);