const connection = require("./database");

const dataMapper = {
  getAbout: async () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM about", (err, result) => {
        return err ? reject(err) : resolve(result[0]);
      });
    });
  },
  getSkills: async (domaine) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM skills WHERE domaine = '${domaine}'`, (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  },
  getAllProjects: async () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM project", (err, result) => {
        return err ? reject(err) : resolve(result);
      });
    });
  },
};

module.exports = dataMapper;