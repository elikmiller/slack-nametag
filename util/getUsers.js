const app = require("./bolt");

const getUsers = async () => {
  const allUsers = await app.client.users.list();

  const humanUsers = allUsers.members.filter((user) => {
    return !(user.is_bot || user.name === "slackbot");
  });

  return humanUsers;
};

module.exports = getUsers;
