// CODE here for your Lambda Classes
class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    this.gender = personAttr.gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.specialty = instructorAttr.specialty;
    this.faveLanguage = instructorAttr.faveLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }

  studentGrade(student) {
    const projectGrade = Math.floor(Math.random() * (-50 - 50));

    let newStudentGrade = student.grade + projectGrade;
    newStudentGrade;
    return newStudentGrade;
  }
}

class Students extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
    this.grade = studentAttr.grade;
  }
  listSubjects() {
    return `${this.favSubjects}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  graduate() {
    if (this.grade > 70) {
      return `Student by the name of ${this.name}'s grade is ${
        this.grade
      }% not bad ${this.name} may move on the the next round `;
    } else {
      return `Sorry but ${this.name}'s grade is ${
        this.grade
      } and that is not enough to pass`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(managerAttr) {
    super(managerAttr);
    this.gradClassName = managerAttr.gradClassName;
    this.favInstructor = managerAttr.favInstructor;
    this.favSubjects = managerAttr.favSubjects;
  }
  standUp(channel) {
    return `${this.name} debugs ${channel}, @channel standy times `;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  faveLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `OOOH YEAH`
});

const Jill = new ProjectManager({
  name: 'Jill',
  location: 'Jamcity',
  age: 25,
  gender: 'female',
  faveLanguage: 'Java',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  favSubjects: ['Design', 'HTML', 'CSS', 'LESS'],
  favInstructor: 'Josh Knell',
  gradClassName: 'Web_16'
});

const Jonas = new Students({
  name: 'Jonas',
  age: '37',
  location: 'Florida',
  gender: 'male',
  previousBackground: 'Bartender',
  className: 'web_17',
  favSubjects: ['Design', 'HTML', 'CSS', 'LESS'],
  grade: 100
});

console.log(fred.name);
console.log(fred.age);
console.log(fred.location);
console.log(fred.gender);
console.log(fred.specialty);
console.log(fred.faveLanguage);
console.log(fred.catchPhrase);
console.log(Jill.name);
console.log(Jill.age);
console.log(Jill.location);
console.log(Jill.gender);
console.log(Jill.specialty);
console.log(Jill.faveLanguage);
console.log(Jill.catchPhrase);
console.log(Jill.gradClassName);
console.log(Jill.favInstructor);
console.log(Jonas.name);
console.log(Jonas.age);
console.log(Jonas.location);
console.log(Jonas.gender);
console.log(Jonas.previousBackground);
console.log(Jonas.className);
console.log(Jonas.favSubjects);
console.log(fred.speak());
console.log(Jill.speak());
console.log(Jonas.speak());
console.log(fred.demo('Javascript'));
console.log(fred.grade(Jonas, 'Javascript'));
console.log(Jill.standUp('#getsome'));
console.log(Jill.debugsCode(Jonas, 'Javascript'));
console.log(Jonas.listSubjects());
console.log(Jonas.PRAssignment('Javascript'));
console.log(Jill.sprintChallenge('LESS'));
console.log((Jonas.grade = Jill.studentGrade(Jonas)));
console.log(Jonas.graduate());
