const backpack = {
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
    },
};
//this is a const, not a variable. Its properties can be changed, but NOT its contents.

