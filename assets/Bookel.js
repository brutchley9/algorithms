class Bookel {
    constructor(
    //define parameters
    name,
    volume,
    color,
    vegan
    ) {
    //define properties
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.vegan = vegan;
    }
    meatOrNo(veganStatus) {
        this.vegan = veganStatus;
    }
}

export default Bookel;