const faker = require('faker');

const data = [];

for (let i = 0; i < 10; i++) {
  const item = {
    id: faker.random.uuid(),
    title: faker.lorem.sentence(),
    authors: faker.name.findName(),
    source: faker.lorem.word(),
    pubyear: faker.date.past().getFullYear().toString(),
    doi: faker.internet.url(),
    claim: faker.lorem.sentence(),
    evidence: faker.lorem.paragraph(),
  };

  data.push(item);
}

console.log(data);