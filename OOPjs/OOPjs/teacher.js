class Teacher extends Person{

    constructor(name, gender, age, interests, bio, greeting){
        super(name, gender, age, interests, bio, greeting);
    }

    speak(){
        super.speak();
    }

}

let teacher = new Teacher("Eoin", "m", 22, "sport", "bio1");
teacher.speak();