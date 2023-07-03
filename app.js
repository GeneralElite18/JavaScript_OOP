console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    info(){
        //Doesn't seem like we use this. Just practice for declaring method?
    }
    soundOff(){
        //Doesn't seem like we use this. Just practice for declaring method?   
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }

    removeHobby(hobby){
        for(let i = 0; i < this.hobbies.length; i++){
            if(this.hobbies[i] == hobby){
                this.hobbies.splice(i, 1);
                return;
            }
        }
    }
    
    greeting(){
        console.log("Hello fellow person!");
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies){
        super(name,pets,residence,hobbies);
        this.occupation = "Full Stack Web Developer";
    }
    greeting(){
        console.log("Hello! I don't get out much.");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let guy = new Person("Joe", 3, "1234 Place", ["Watching TV","Sleeping"]);

let me = new Coder("Alex", 58, "1256 place st", ["Gaming", "Coding", "Watching YouTube"]);

console.log(guy.hobbies);

guy.addHobby("Working out");

guy.removeHobby("Watching TV");

console.log(guy.hobbies);

console.log(me);

guy.greeting();
me.greeting();

class calculator {
    constructor(result){
        this.result = 0;
    }
    add(a, b){
        console.log(a + " + " + b);
        this.result = a + b;
        return this.result;
    }

    subtract(a, b){
        console.log(a + " - " + b);
        this.result = a - b;
        return this.result;
    }

    multiply(a, b){
        console.log(a + " * " + b);
        this.result = a * b;
        return this.result;
    }

    divide(a, b){
        console.log(a + " / " + b);
        this.result = a / b;
        return this.result;
    }

    displayResults(){
        console.log("Result: " + this.result);
    }
}

let calc = new calculator();

calc.displayResults();
calc.add(2, 6);
calc.displayResults();
calc.multiply(5, 8);
calc.displayResults();
calc.subtract(7, 5);
calc.displayResults();
calc.divide(9, 3);
calc.displayResults();

