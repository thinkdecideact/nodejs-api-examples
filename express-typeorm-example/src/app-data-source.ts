import { DataSource } from "typeorm"
// import "reflect-metadata"

export const myDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "learn_by_examples",
  password: "123456",
  database: "learn_by_examples",
  entities: ["src/**/*.entity.js", "dist/**/*.entity.js"],
  logging: true,
  synchronize: false,
  timezone: "+08:00",
  dateStrings: true,
})