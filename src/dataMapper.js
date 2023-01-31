const connection = require("./database");

const dataMapper = {
  getAllProjects: async () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM project", (err, result) => {
        return err ? reject(err) : resolve(result[0]);
      });
    });
  },
};

module.exports = dataMapper;
