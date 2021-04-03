import faker from "faker";

export const getSampleData = () => Array(50)
  .fill(null)
  .map((_, i) => ({
    uuid: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    birthDate: faker.date.past().toDateString(),
  }));
