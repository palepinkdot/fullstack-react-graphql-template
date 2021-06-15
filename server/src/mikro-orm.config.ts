import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { User } from "./entities/User";

export default {
  type: "postgresql",
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [User],
  host: "postgresql.local.maxg.xyz",
  dbName: "mcpanel-dev",
  user: "postgres",
  password: "mesutozil",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
