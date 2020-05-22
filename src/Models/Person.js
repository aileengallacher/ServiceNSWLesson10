const random = require("../Common/Random");
const uuid = require("uuid");

module.exports = class Person {
    constructor(firstName, lastName, age, id = uuid.v4()) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(
                random.getRandomGivenName(),      // will create a randomly generated given name
                random.getRandomFamilyName(),     // will create a randomly generated family name
                random.getRandomNumber(42) + 18   // will create a randomly generated number to be used as an ID number
            );
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}
