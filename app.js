/**For the Cat class:

Give the class at least three properties.
Give the class at least three methods.
Create two instances of the class (two cats).
Log both instances to see their properties.
Invoke each method from both instances. */
class Cat {
    constructor(name, eyes, legs) {//Give the class at least three properties.
        this.name = name;
        this.eyes = eyes;
        this.legs = legs
    }
    //Give the class at least three methods.
    introduce() {
        console.log(`my name is ${this.name}. I have ${this.eyes} eyes and ${this.legs} legs.`);
    }

    playTime(toys) {
        console.log(`${toys} is my favorite toy.`);
    }

    friend(myFriend) {
        console.log(`I like playing with ${myFriend}.`)
    }
}
//Create two instances of the class (two cats).
const meow = new Cat("Rich", 2, 4);
const newcat = new Cat("Blippi", 2, 4);
//Log both instances to see their properties.
console.log(meow);
console.log(newcat);

//Invoke each method from both instances
meow.introduce();
meow.playTime("dino");
meow.friend("chapi");

//Invoke each method from both instances
newcat.introduce();
newcat.playTime("dogi");
newcat.friend("lali");

/** For the Pirate class:

Create three properties that are set by the constructor.
Create three methods.
Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: jollyRoger and blackPearl.
Loop over each array and print three properties of each pirate*/
class Pirate {
    constructor(name, age, transport) {//Create three properties that are set by the constructor.
        this.name = name;
        this.age = age;
        this.transport = transport
    }

    introduce() { //Create three methods.
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my everyday transport is ${this.transport}.`)
    }

    awake() {
        console.log("I am awake during night time.");
    }

    work(bestFriend) {
        console.log(`${bestFriend} works with me and is my best friend.`);
    }
}

//Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: jollyRoger and blackPearl.
//Loop over each array and print three properties of each pirate
const jollyRoger = [
    new Pirate("Chris Brown", 30, "boat"),
    new Pirate("Will Smith", 40, "ship"),
    new Pirate("Zac Efron", 35, "yacht")
];
for (let pirate of jollyRoger) {
  console.log("Pirate Name:", pirate.name);
  console.log("Pirate Age:", pirate.age);
  console.log("Pirate transport:", pirate.transport);
}

const blackPearl = [
    new Pirate("Jack Sparrow", 40, "submarines"),
    new Pirate("Brad Pitt", 40, "hovercraft"),
    new Pirate("Tom Cruise", 45, "WhaterCar")
];
for (let pirate of blackPearl) {
  console.log("Pirate Name:", pirate.name);
  console.log("Pirate Age:", pirate.age);
  console.log("Pirate transport:", pirate.transport);
}


