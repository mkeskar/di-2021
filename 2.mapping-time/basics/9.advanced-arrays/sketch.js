function setup() {
  createCanvas(200,100);
  text('look in the console ⤵', 20,20);

  var people = [
    {name:"Alice", age:20, student:true},
    {name:"Bob", age:71, student:false},
    {name:"Carol", age:54, student:false},
    {name:"Dave", age:9, student:true}
  ];


  print("Students:");
  people.forEach(person => {
    if (person.student){
      print(person.name);
    }
  })


  print("Odd-numbered ages:");
  people.forEach(person => {
    if (person.age % 2 == 1){
      print(person.name, person.age);
    }
  });


  print("By age:")
  var peopleByAge = _.sortBy(people, 'age')
  // _.sortBy documentation: https://lodash.com/docs/4.17.15#sortBy

  peopleByAge.forEach(person => {
    print(person.age, person.name);
  });


  print("Creating a new array based on an old one:")
  var otherPeople = people.map( person => {
    var isAdult = person.age >= 18;

    var job;
    if (person.student){
      job = 'student';
    }else{
      job = 'worker';
    }

    return {name:person.name.toUpperCase(), adult:isAdult, job:job};
  });


  print(people)
  print(otherPeople)

}

