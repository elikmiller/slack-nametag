const app = require("./bolt");

const getTeamIcon = async () => {
  const teamInfo = await app.client.team.info();

  return teamInfo.team?.icon?.image_230;
};

module.exports = getTeamIcon;
