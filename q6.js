const myProfile = {
  name: "Emmanuel",
  age: 20,
  country: "Nigeria",
  hobby: "Coding"
};

function displayProfile(person) {
  console.log(person.name + " is " + person.age + " years old, from " + person.country + ", and loves " + person.hobby + ".");
}

displayProfile(myProfile);