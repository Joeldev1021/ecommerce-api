import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.MYSQL_USER!,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 23306,
  }
);

(async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully .");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });

  //  await sequelize.sync({ force: true });
})();

export default sequelize;
