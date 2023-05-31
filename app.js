const lodash = require("lodash");
const { faker } = require("@faker-js/faker");

class RandomUser {
  constructor() {
    (this.name = faker.person.firstName()),
      (this.mail = faker.internet.email()),
      (this.phone = faker.phone.number());
  }
}

function getArrayFromTenUsers() {
  const fakeUsersArr = [];
  while (fakeUsersArr.length < 10) {
    fakeUsersArr.push(new RandomUser());
  }
  return fakeUsersArr;
}

const tenFakeUsers = getArrayFromTenUsers();
console.log(tenFakeUsers);

const sortedArrByName = lodash.sortBy(tenFakeUsers, (obj) => obj.name);
console.log(sortedArrByName);
