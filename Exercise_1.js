class Musican{
    constructor(name){
        this.name = name;
    }
    play(piece){
        console.log(`${this.name} is now play ${piece}`)
    }
}

var Violinist = new Musican("violinist");
var Pianist = new Musican("pianist");

//testing
Violinist.play(23);
Pianist.play(24);