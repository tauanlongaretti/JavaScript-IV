// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.age;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.speciality = instructorAttributes.speciality;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(`${subject}`);
        });
    }
    PRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(ManagerAttributes) {
        super(ManagerAttributes);
        this.gradClassName = ManagerAttributes.gradClassName;
        this.favInstructor = ManagerAttributes.favInstructor;
    }
    standUp(){
        console.log(`${this.name} announces to ${gradClassName}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//Lambda school personnel

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    speciality: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const jason = new Instructor({
    name: 'Jason',
    location: 'Trenton',
    age: 28,
    favLanguage: 'Python',
    speciality: 'Back-end',
    catchPhrase: `Hard work is key`
  });

  const ana = new Instructor({
    name: 'Ana',
    location: 'Orlando',
    age: 32,
    favLanguage: 'React',
    speciality: 'Front-end',
    catchPhrase: `Less is more`
  });

  const tommy = new Student({
    name: 'Tommy',
    age: 21,
    location: 'Seattle',
    previousBackground: 'Graphic Design',
    className: 'WEBPT10',
    favSubjects: ["HTML", "Javascript"],
  });  

  const hellen = new Student({
    name: 'Hellen',
    age: 24,
    location: 'Boston',
    previousBackground: 'Sculptor',
    className: 'WEBPT8',
    favSubjects: ["CSS", "Java"],
  });  

  const jack = new ProjectManager({
    name: 'Jack',
    age: 30,
    location: 'Toronto',
    gradClassName: 'WEBPT9_jack',
    favInstructor: 'Ana',
  });

  const daniella = new ProjectManager({
    name: 'Daniella',
    age: 36,
    location: 'Houston',
    gradClassName: 'WEBPT10_daniella',
    favInstructor: 'Jason',
  });

  console.log(fred.speciality);
  console.log(jason.favLanguage);
  console.log(ana.catchPhrase);
  console.log(tommy.previousBackground);
  console.log(hellen.className);
  console.log(jack.gradClassName);
  console.log(daniella.favInstructor);


