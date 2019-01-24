// CODE here for your Lambda Classes

// Person Class

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// Instructor Class

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes)
        this.className = studentAttributes.className;
        this.previousBackground = studentAttributes.previousBackground;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(favSubjects) {
        return `${favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }
}

class PM extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


const josh = new Instructor({
    name: 'Josh',
    age: 42,
    location: 'Colorado',
    gender: 'M',
    specialty: 'JS',
    favLanguage: 'oCaml',
    catchPhrase: 'The Big Boss',
});

const ryan = new Instructor({
    name: 'Ryan',
    age: 33,
    location: 'California',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'You are all doing amazing',
});

const fred = new Instructor({
    name: 'Fred',
    age: 39,
    location: 'Georgia',
    gender: 'M',
    specialty: 'Redux',
    favLanguage: 'Haskell',
    catchPhrase: 'Look at this!',
});

const will = new Student({
    name: 'Will',
    age: 30,
    location: 'Puerto Rico',
    gender: 'M',
    previousBackground: 'Finance',
    className: 'web17',
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript',
    ]
});

const joe = new Student({
    name: 'Joe',
    age: 25,
    location: 'California',
    gender: 'M',
    previousBackground: 'Software Sales',
    className: 'web17',
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript',
    ],
});

const mykol = new Student({
    name: 'Mykol',
    age: 24,
    location: 'Texas',
    gender: 'F',
    previousBackground: 'Nanny',
    className: 'web17',
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript',
    ],
});

const frank = new PM({
    name: 'Frank',
    age: 42,
    location: 'Illinois',
    gender: 'M',
    gradClassName: 'web5',
    favInstructor: 'Josh',
});

const tom = new PM({
    name: 'Tom',
    age: 35,
    location: 'Washington',
    gender: 'M',
    gradClassName: 'web8',
    favInstructor: 'Ryan',
});

// Instructor Tests

console.log(josh.name); 
console.log(josh.age); 
console.log(josh.location); 
console.log(josh.gender); 
console.log(josh.specialty); 
console.log(josh.favLanguage); 
console.log(josh.catchPhrase); 
console.log(josh.demo('Rust'));
console.log(josh.grade('Will', 'Rust'));

// Student Tests

console.log(will.name); 
console.log(will.age); 
console.log(will.location); 
console.log(will.gender); 
console.log(will.previousBackground); 
console.log(will.className); 
console.log(will.favSubjects); 
console.log(will.listsSubjects());
console.log(will.PRAssignment('Python'));
console.log(will.sprintChallenge('C#'));

// PM Tests

console.log(tom.name); 
console.log(tom.age); 
console.log(tom.location); 
console.log(tom.gender); 
console.log(tom.gradClassName); 
console.log(tom.favInstructor);  
console.log(tom.standUp('web17_help'));
console.log(tom.debugsCode('Francis', 'Fortran'));


