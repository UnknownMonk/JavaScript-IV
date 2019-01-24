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
}

class Students extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  listSubjects() {
    return `${this.favSubjects}`;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
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
  favSubjects: ['Design', 'HTML', 'CSS', 'LESS']
});
