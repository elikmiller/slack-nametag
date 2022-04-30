import { faker } from "@faker-js/faker";

export const createUser = () => {
  return {
    profile: {
      image_512: faker.image.imageUrl(512, 512, "cat", true),
      display_name_normalized: faker.hacker.noun(),
      real_name_normalized: faker.name.findName(),
    },
  };
};

const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(createUser());
  }
  return users;
};

export default generateUsers;
