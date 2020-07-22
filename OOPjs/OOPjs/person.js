class Person {
    constructor(name, gender, age, interests, bio, greeting) {
        this._name = name;
        this._gender = gender;
        this._age = age;
        this._interests = interests;
        this._bio = bio;
        this._greeting = greeting;
    }

    speak(){
        console.log(`${this._name} says ${this.checkGreeting()}`);
    }

    checkGreeting(){
        if(this._age>18){
            return "Hello";
        } else {
            return "Sup";
        }
    }
}