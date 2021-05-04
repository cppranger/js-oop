// homework
class Human{
    constructor(height, weight, age, sex, name, passport, eye) {
        this.height = height;       // cm
        this.weight = weight;       // kg
        this.age = age;
        this.sex = sex;             // female or male
        this.name = name;
        this.passport = passport;   // country
        this.eye = eye;             // color
    }

    getPronoun() {
        if (this.sex === 'male') return "He";
        else if (this.sex === 'female') return "She";
        else return "It";
    }

    getHuman() {
        const pronoun = this.getPronoun();
        return `${this.name} has ${this.height} cm height, ${this.weight} kg weight.\n
                ${pronoun} is ${this.age} years old. ${pronoun} lives in ${this.passport}.\n 
                ${this.name}'s eyes are ${this.eye}.`;
    }
}

const Alice = new Human(167, 59, 22, 'female', 'Alice', 'USA', 'green');
const Vasily = new Human(185, 81, 27, 'male', 'Vasily', 'Russian Federation', 'blue');
console.log(Alice.getHuman());
console.log(Vasily.getHuman());